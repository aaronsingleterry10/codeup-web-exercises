"use strict";

$(document).ready(function () {
    // === WeatherMap API ===
    var weatherUrl = 'https://api.openweathermap.org/data/2.5/onecall';
    var weatherOptions = {
        lat: 29.7030,
        lon: -98.1245,
        appid: weatherMapKey,
        // excludes extra stuff not needed
        exclude: 'minutely, current, hourly',
        units: 'imperial'
    };

    // === Displays city and state
    reverseGeocode({lng: -98.1245, lat: 29.7030}, mapBoxKey).then(function (results) {
        results = results.split(',');
        console.log(results[0]);
        $('#current-city').html(results[0]);
    });

    // ==== Makes timestamp human readable ====
    function getDate(timestamp) {
        return new Date(timestamp * 1000).toLocaleDateString();
    }
    // Get request for Weather API
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
                forecastHtml += "<div class='list-group-item temp'>" + data.daily[i].temp.max + "&#176;" + "F" + " / " + data.daily[i].temp.min + "&#176;" + "F" + "<br>" + "<img src='http://openweathermap.org/img/w/" + data.daily[i].weather[0].icon + ".png'>" + "</div>";
                forecastHtml += "<div class='list-group-item'>" + "Description: " + "<span class='bold'>" + data.daily[i].weather[0].description + "</span>" + "</div>";
                forecastHtml += "<div class='list-group-item'>" + "Humidity: " + "<span class='bold'>" + data.daily[i].humidity + "</span>" + "</div>";
                forecastHtml += "<div class='list-group-item'>" + "Wind: " + "<span class='bold'>" + data.daily[i].wind_speed + "</span>" + "</div>";
                forecastHtml += "<div class='list-group-item'>" + "Pressure: " + "<span class='bold'>" + data.daily[i].pressure + "</span>" + "</div>";
                forecastHtml += "</div>";
            }
            $('#cards').html(forecastHtml);
        });
    }
    // === Function Call ===
    weatherUpdate();

    // ===== MAPBOX API ====
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

    // ==== MARKER ====
    var marker = new mapboxgl.Marker()
        .setLngLat({lng: -98.1245, lat: 29.7030})
        .addTo(map)
        .setDraggable(true);

    marker.on("dragend", function () {
        var lngLat = marker.getLngLat();
        console.log('Longitude: ' + lngLat.lng + ', Latitude: ' + lngLat.lat);
        // Method below displays city and state on the navbar wherever marker is placed
        reverseGeocode(lngLat, mapBoxKey).then(function (results) {
            console.log(results);
            results = results.split(',');
            console.log(results[1]);
            $('#current-city').html(results[0]);
        });
        // displays the forecast of the city where marker is placed
        weatherOptions.lat = lngLat.lat;
        weatherOptions.lon = lngLat.lng;
        $('#cards').html('');
        weatherUpdate();

    });

    // === Code for "City, State" search box and "Find" button ===
    var cityStateInput = document.forms.search.city;
    var coords;
    $('#submit-btn').click(function (e) {
        e.preventDefault();
        geocode(cityStateInput.value, mapBoxKey).then(function (results) {
            coords = results;
            map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
                center: {
                    lng: coords[0],
                    lat: coords[1]
                },
                zoom: 11
            });
            marker.setLngLat(coords);
            marker.addTo(map);
            // === Displays name of city and state of the search input ===
            reverseGeocode({lng: coords[0], lat: coords[1]}, mapBoxKey).then(function (results) {
                results = results.split(',');
                $('#current-city').html(results[0]);
            });
            // === Updates weather forecast of searched city ===
            weatherOptions.lat = coords[1];
            weatherOptions.lon = coords[0];
            $('#cards').html('');
            weatherUpdate();
        });
    });

    // ==== Geocode functions ====

    function geocode(search, token) {
        var baseUrl = 'https://api.mapbox.com';
        var endPoint = '/geocoding/v5/mapbox.places/';
        return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
            .then(function (res) {
                return res.json();
                // to get all the data from the request, comment out the following three lines...
            }).then(function (data) {
                return data.features[0].center;
            });
    }

    function reverseGeocode(coordinates, token) {
        var baseUrl = 'https://api.mapbox.com';
        var endPoint = '/geocoding/v5/mapbox.places/';
        return fetch(baseUrl + endPoint + coordinates.lng + "," + coordinates.lat + '.json' + "?" + 'access_token=' + token)
            .then(function (res) {
                return res.json();
            })
            // to get all the data from the request, comment out the following three lines...
            .then(function (data) {
                console.log(data)
                return data.features[2].place_name;
            });
    }

    console.log($('.navbar, .form-inline'));
});