// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
console.log("DOM fully loaded and parsed");


// Access Token for Salaries
mapboxgl.accessToken =
    'pk.eyJ1IjoiYnl1bmciLCJhIjoiY2l6OHplcHhiMDF5eTMycW9iZGV2dnVmdiJ9.zjEkLqI0pMFXxzFKo_0AEg';


/* LOAD MAP, CONTAINER, STYLE, CENTER, ZOOM
-------------------------------------- */
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/byung/cj030pl5c00252sntkcqcr2rz', //Salaries Style
    center: [-121.934509, 38.000491],
    zoom: 5,
});

map.on('load', function() {
    map.fitBounds([
        [-133.2421875, 16.972741],
        [-47.63671875, 52.696361]
    ]);

/* LAYER VARIABLES
-------------------------------------- */
    var layers = ['29-38', '38-47', '47-56', '56-65', '65-74'];
    var layerz = ['a38-47', 'a47-56', 'a56-65', 'a65-74', 'a74-83'];


/* HOVER INFO WINDOW
-------------------------------------- */
    // Hover state that shows population density information for state.
    // If the cursor is not hovering over a state, the info window should say, "Hover over a state!"
    // Add a listener for mousemove event, identify which state is at the location of the cursor if any, and update the info window.
    map.on('mousemove', function(e) {
        var states = map.queryRenderedFeatures(e.point, {
            layers: layers, layerz: layerz,
        });

        if (states.length > 0) {
            document.getElementById('pd').innerHTML = '<h3><strong>' + states[0].properties.name +
            '</strong></h3><p><strong><em><span style="color:green">$' +
            states[0].properties.gdsalary +
            'k</span></strong> on avg. for graphic design</em></p><p><strong><em><span style="color:#3074a4">$' + states[0].properties.salary +
            'k</span></strong> on avg. for animation</em></p>';
        } else {
            document.getElementById('pd').innerHTML = '<p>Hover over a state!</p>';
        }
    });

/* POPUP WINDOW
-------------------------------------- */
    // When a click event occurs near a polygon, open a popup at the location of
    // the feature, with description HTML from its properties.
    map.on('click', function(e) {
      var states = map.queryRenderedFeatures(e.point, {
          layerz: layerz,
          layers: layers
      });

        var popup = new mapboxgl.Popup()
            .setLngLat(map.unproject(e.point))
            .setHTML('<strong>' + states[0].properties.name + '</strong><br>$' + states[0].properties.salary + 'k')
            .addTo(map);
    });

    // Change cursor style to pointer
    map.on('mousemove', function(e) {
        var features = map.queryRenderedFeatures(e.point, {
            layerz: layerz,
            layers: layers
        });
    map.getCanvas().style.cursor = (features.length) ? 'pointer' : '';
});

/* MENU TO TOGGLE LAYER GROUPS [JOB MENU]
-------------------------------------- */
toggleLayer(['29-38', '38-47', '47-56', '56-65', '65-74'], 'Graphic Design');
toggleLayer(['a38-47', 'a47-56', 'a56-65', 'a65-74', 'a74-83'], 'Animation');

function toggleLayer(ids, name) {
    var link = document.createElement('a');
    link.href = '#';
    link.className = 'active';
    link.textContent = name;

    link.onclick = function(e) {
        e.preventDefault();
        e.stopPropagation();

        for (layers in ids) {
            var visibility = map.getLayoutProperty(ids[layers], 'visibility');
            if (visibility === 'visible') {
                map.setLayoutProperty(ids[layers], 'visibility', 'none');
                this.className = '';
            } else {
                this.className = 'active';
                map.setLayoutProperty(ids[layers], 'visibility', 'visible');
            }
        }

    };
    var layers = document.getElementById('jobMenu');
    layers.appendChild(link);

}


/* MENU TO TOGGLE LAYERS [SALARY MENU]
-------------------------------------- */
var toggleableLayerIds = ['29-38', '38-47', '47-56', '56-65', '65-74', 'a38-47', 'a47-56', 'a56-65', 'a65-74', 'a74-83'];


for (var i = 0; i < toggleableLayerIds.length; i++) {
    var id = toggleableLayerIds[i];

    var link = document.createElement('a');
    link.href = '#';
    link.className = 'active';
    link.textContent = id;

    link.onclick = function(e) {
        var clickedLayer = this.textContent;
        e.preventDefault();
        e.stopPropagation();

        var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

        if (visibility === 'visible') {
            map.setLayoutProperty(clickedLayer, 'visibility', 'none');
            this.className = '';
        } else {
            this.className = 'active';
            map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
        }
    };

    var layerz = document.getElementById('salaryMenu');
    layerz.appendChild(link);
}

/* BORDERS
-------------------------------------- */
function style(feature) {
    return {
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7,
        fillColor: getColor(feature.properties.density)
    };
}

function highlightFeature(e) {
    var layerss = e.target;

    layerss.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.7
    });

    info.update(layerss.feature.properties);
}

var geojson;

function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
}

function onEachFeature(feature, layerss) {
    layerss.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
    });
}

geojson = L.geoJson(layers, layerz, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);


/* ANIMATED CIRCLE SCRIPT
-------------------------------------- */

var framesPerSecond = 15;
var initialOpacity = 1;
var opacity = initialOpacity;
var initialRadius = 6;
var radius = initialRadius;
var maxRadius = 18;

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
