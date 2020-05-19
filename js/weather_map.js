"use strict";

$(document).ready(function() {

    var weatherUrl = 'https://api.openweathermap.org/data/2.5/onecall';
    var weatherOptions = {
        lat: 29.7030,
        lon: -98.1245,
        appid: weatherMapKey,
        // excludes extra stuff not needed
        exclude: 'minutely, current, hourly',
        units: 'imperial'
    };
    reverseGeocode({lng: -98.1245, lat: 29.7030}, mapBoxKey).then(function(results) {
        results = results.split(',');
        console.log(results);
       $('#current-city').html(results[2]);
    });
    // Makes timestamp human readable
    function getDate(timestamp) {
        return new Date(timestamp * 1000).toLocaleDateString();
    }
    function weatherUpdate() {
        $.get(weatherUrl, weatherOptions).done(function (data) {
            console.log(data);
            var todayDate = getDate(data.daily[0].dt);
            console.log(todayDate);
            $('#date1').html(getDate(data.daily[0].dt));

            var forecastHtml = '';
            for (var i = 0; i <= 4; i++) {
                forecastHtml += "<div class='card' style='width: 15rem;'>";
                forecastHtml += "<div class='card-header heading'>" + getDate(data.daily[i].dt) + "</div>";
                forecastHtml += "<div class='list-group-item temp'>" + data.daily[i].temp.max + "&#176;" + "F" + " / " + data.daily[i].temp.min + "&#176;" + "F" + "</div>";
                forecastHtml += "<div class='list-group-item'>" + "Description: " + "<span class='bold'>" + data.daily[i].weather[0].description + "</span>" + "</div>";
                forecastHtml += "<div class='list-group-item'>" + "Humidity: " + "<span class='bold'>" + data.daily[i].humidity + "</span>" + "</div>";
                forecastHtml += "<div class='list-group-item'>" + "Wind: " + "<span class='bold'>" + data.daily[i].wind_speed + "</span>" + "</div>";
                forecastHtml += "<div class='list-group-item'>" + "Pressure: " + "<span class='bold'>" + data.daily[i].pressure + "</span>" + "</div>";
                forecastHtml += "</div>";
            }
            $('#cards').html(forecastHtml);
        });
    }
    weatherUpdate();
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

    // MARKER
    var marker = new mapboxgl.Marker()
        .setLngLat({lng: -98.1245, lat: 29.7030})
        .addTo(map)
        .setDraggable(true);

    marker.on("dragend", function() {
        var lngLat = marker.getLngLat();
        console.log('Longitude: ' + lngLat.lng + ', Latitude: ' + lngLat.lat );
        reverseGeocode(lngLat, mapBoxKey).then(function(results) {
            console.log(results);
            results = results.split(',');
            console.log(results[1]);
            $('#current-city').html(results[1]);
        });

        weatherOptions = {
            lat: lngLat.lat,
            lon: lngLat.lng,
            appid: weatherMapKey,
            // excludes extra stuff not needed
            exclude: 'minutely, current, hourly',
            units: 'imperial'
        };
        $('#cards').html('');
        weatherUpdate();

    });


});