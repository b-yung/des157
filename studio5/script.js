// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed")

mapboxgl.accessToken = 'pk.eyJ1IjoiYnl1bmciLCJhIjoiY2l6OHplcHhiMDF5eTMycW9iZGV2dnVmdiJ9.zjEkLqI0pMFXxzFKo_0AEg';

// Set bounds to Bay Area
var bounds = [
    [-122.615662, 36.760891], // Southwest coordinates
    [-120.220642, 40.42186]  // Northeast coordinates
];

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v9',
    center: [-121.934509, 38.000491],
    zoom: 1,
    maxBounds: bounds // Sets bounds as max
});

map.on('load', function () {

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
                'stops': [[12, 2], [22, 180]]
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
                    ['Other', '#ccc']]
            }
        }
    });
))}
};
