// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed")

    // Access Token for GD-Salary
    mapboxgl.accessToken =
        'pk.eyJ1IjoiYnl1bmciLCJhIjoiY2l6OHplcHhiMDF5eTMycW9iZGV2dnVmdiJ9.zjEkLqI0pMFXxzFKo_0AEg';

    var framesPerSecond = 15;
    var initialOpacity = 1;
    var opacity = initialOpacity;
    var initialRadius = 6;
    var radius = initialRadius;
    var maxRadius = 18;

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/byung/cj030pl5c00252sntkcqcr2rz', //GD-Salary Style
        center: [-121.934509, 38.000491],
        zoom: 5,
    });

    map.on('load', function() {
        map.fitBounds([
            [-133.2421875, 16.972741],
            [-47.63671875, 52.696361]
        ]);

        // Add variable for each layer
        var layers = ['29-38', '38-47', '47-56', '56-65', '65-74'];

        /*
        // Add a legend that iterates through the list of layers defined above.
        // Add a legend element based on the NAME of the layer + its COLOR.
        layers.forEach(function(layer) {
            var color = map.getPaintProperty(layer, 'fill-color');
            var item = document.createElement('div');
            var key = document.createElement('span');
            key.className = 'legend-key';
            key.style.backgroundColor = color;

            var value = document.createElement('span');
            value.innerHTML = layer;
            item.appendChild(key);
            item.appendChild(value);
            legend.appendChild(item);
        });
*/

        // Add the info window
        // Hover state that shows population density information for state.
        // If the cursor is not hovering over a state, the info window should say, "Hover over a state!"
        // Add a listener for mousemove event, identify which state is at the location of the cursor if any, and update the info window.
        map.on('mousemove', function(e) {
            var states = map.queryRenderedFeatures(e.point, {
                layers: layers
            });

            if (states.length > 0) {
                document.getElementById('pd').innerHTML = '<h3><strong>' + states[0].properties.name + '</strong></h3><p><strong><em>$' + states[0].properties.salary + 'k</strong> on average</em></p>';
            } else {
                document.getElementById('pd').innerHTML = '<p>Hover over a state!</p>';
            }
        });

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

    });
});
