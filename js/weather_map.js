"use strict";

$(document).ready(function() {

    var weatherUrl = 'https://api.openweathermap.org/data/2.5/onecall';
    var weatherOptions = {
        lat: 29.7030,
        lon: -98.1245,
        appid: weatherMapKey,
        // excludes extra stuff not needed
        exclude: 'minutely, current, hourly'
    };

    function getDate(timestamp) {
        return new Date(timestamp * 1000).toLocaleDateString();
    }

    $.get(weatherUrl, weatherOptions).done(function(data) {
        console.log(data);
        var todayDate = getDate(data.daily[0].dt);
        console.log(todayDate);
    });

    // MAPBOX API
    mapboxgl.accessToken = mapBoxKey;
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: {
            lng: -98.1245,
            lat: 29.7030
        },
        zoom: 12
    });

    var marker = new mapboxgl.Marker()
        .setLngLat({lng: -98.1245, lat: 29.7030})
        .addTo(map)
        .setDraggable(true);


    marker.on("dragend", function() {
        console.log(marker.getLngLat());
    });



});