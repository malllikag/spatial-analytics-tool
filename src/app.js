require(["esri/Map", "esri/views/MapView", "esri/layers/GeoJSONLayer"], function(Map, MapView, GeoJSONLayer) {
    // Create the map
    var map = new Map({
        basemap: "streets-navigation-vector"
    });

    // Create the view
    var view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-118.2437, 34.0522],
        zoom: 10
    });

    // Fetch data from the Flask backend
    fetch('http://localhost:5000/api/optimal_sites')
        .then(response => response.json())
        .then(data => {
            var geojsonLayer = new GeoJSONLayer({
                url: "data:application/json," + encodeURIComponent(JSON.stringify(data))
            });
            map.add(geojsonLayer);
        })
        .catch(error => console.error('Error fetching data:', error));
});
