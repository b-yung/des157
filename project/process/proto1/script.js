// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed")

    mapboxgl.accessToken = 'pk.eyJ1IjoiYnl1bmciLCJhIjoiY2l6OHplcHhiMDF5eTMycW9iZGV2dnVmdiJ9.zjEkLqI0pMFXxzFKo_0AEg';

    var framesPerSecond = 15;
    var initialOpacity = 1;
    var opacity = initialOpacity;
    var initialRadius = 6;
    var radius = initialRadius;
    var maxRadius = 18;

    // Set bounds to Bay Area
    /* var bounds = [
        [-122.615662, 36.760891], // Southwest coordinates
        [-120.220642, 40.42186]  // Northeast coordinates
    ]; */

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v9',
        center: [-121.934509, 38.000491],
        zoom: 8,
    });

    map.on('load', function() {

        // Add a source displaying a point which will be animated in a circle.
        map.addSource('point', {
            "type": "geojson",
            "data": {
                "type": "Point",
                "coordinates": [-121.751693, 38.539478]
            }
        });

        // Add layer displaying a point which will be animated in a circle
        map.addLayer({
            "id": "point",
            "source": "point",
            "type": "circle",
            "paint": {
                "circle-radius": initialRadius,
                "circle-radius-transition": {
                    duration: 0
                },
                "circle-opacity-transition": {
                    duration: 0
                },
                "circle-color": "#007cbf"
            }
        });

        // Add layer for blue circle dot
        map.addLayer({
            "id": "point1",
            "source": "point",
            "type": "circle",
            "paint": {
                "circle-radius": initialRadius,
                "circle-color": "#007cbf"
            }
        });

        // Call the animation function for the circle
        function animateMarker(timestamp) {
            setTimeout(function() {
                requestAnimationFrame(animateMarker);

                radius += (maxRadius - radius) / framesPerSecond;
                opacity -= (.9 / framesPerSecond);

                map.setPaintProperty('point', 'circle-radius', radius);
                map.setPaintProperty('point', 'circle-opacity', opacity);

                if (opacity <= 0) {
                    radius = initialRadius;
                    opacity = initialOpacity;
                }

            }, 1000 / framesPerSecond);

        }

        // Start the animation.
        animateMarker(0);
        map.addLayer({
            'id': 'population',
            'type': 'circle',
            'source': {
                type: 'vector',
                url: 'mapbox://examples.8fgz4egr'
            },
            'source-layer': 'sf2010',
            'paint': {
                // make circles larger as the user zooms from z12 to z22
                'circle-radius': {
                    'base': 1.75,
                    'stops': [
                        [12, 2],
                        [22, 180]
                    ]
                },
                // color circles by ethnicity, using data-driven styles
                'circle-color': {
                    property: 'ethnicity',
                    type: 'categorical',
                    stops: [
                        ['White', '#fbb03b'],
                        ['Black', '#223b53'],
                        ['Hispanic', '#e55e5e'],
                        ['Asian', '#3bb2d0'],
                        ['Other', '#ccc']
                    ]
                }
            }
        });

    });
});
