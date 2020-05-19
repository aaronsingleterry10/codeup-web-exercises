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
        $('#date1').html(getDate(data.daily[0].dt));
        // $(data).each(function(index, element) {
        //     $('#cards').html("<div>" + getDate(element.daily[index].dt) + "</div>" +)
        // });
        var forecastHtml = '';
        for (var i = 0; i <= 5; i++) {
            forecastHtml += "<div class='card' style='width: 12rem;'>";
            forecastHtml += "<div class='card-header'>" + getDate(data.daily[i].dt) + "</div>";
            forecastHtml += "<div class='list-group-item'>" + data.daily[i].weather[0].description + "</div>";
            forecastHtml += "<div class='list-group-item'>" + "Humidity: " + data.daily[i].humidity + "</div>";
            forecastHtml += "<div class='list-group-item'>" + "Wind: " + data.daily[i].wind_speed + "</div>";
            forecastHtml += "<div class='list-group-item'>" + "Pressure: " + data.daily[i].pressure + "</div>";
            forecastHtml += "</div>";
        }
        $('#cards').html(forecastHtml);
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

    console.log(document.getElementsByTagName('article'));

});