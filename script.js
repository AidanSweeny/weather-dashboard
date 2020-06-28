$(document).ready(function() {
    $("#searchBtn").on("click", function(event) {
        var city = $("#citySearch").val();
        var button = $("<button>");
        button.text(city);
        button.addClass("cityBtn btn btn-light");
        console.log(city)
        $("#cities").append(button);
    })
    $("#cities").on("click", function(event) {
        var city = event.target.textContent
        var APIKey = "166a433c57516f51dfab1f7edaed8413";
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city +"&units=imperial&appid=" + APIKey;
        var latitude = "";
        var longitude = "";
        $.when($.ajax({
            url: queryURL,
            method: "GET"
        })).then(function(response) {
            latitude = response.city.coord.lat;
            longitude = response.city.coord.lon;
            done = true;

        // Here we are building the URL we need to query the database
        console.log(latitude);
        console.log(longitude);
        var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&units=imperial&appid=" + APIKey;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {

            $("#cityName").text(city + " (" + moment().format("dddd, MMMM Do YYYY")+ ")");
            $("#windSpeed").text("Wind Speed: " + response.current.wind_speed + " MPH");
            $("#temperature").text("Temperature: " + response.current.temp + " F");
            $("#humidity").text("Humidity: " + response.current.humidity + "%");
            $("#uvIdx").text("UV Index: " + response.current.uvi);
            var queryURL = "api.openweathermap.org/data/2.5/forecast?q={city name}&appid=" + A
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function(response) {
    
                $("#cityName").text(city + " (" + moment().format("dddd, MMMM Do YYYY")+ ")");
                $("#windSpeed").text("Wind Speed: " + response.current.wind_speed + " MPH");
                $("#temperature").text("Temperature: " + response.current.temp + " F");
                $("#humidity").text("Humidity: " + response.current.humidity + "%");
                $("#uvIdx").text("UV Index: " + response.current.uvi);
            });
        });
        });
        
    })
});
