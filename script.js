$(document).ready(function() {
    $("#searchBtn").on("click", function(event) {
        var city = $("#citySearch").val();
        var button = $("<button>");
        button.text(city);
        button.addClass("cityBtn btn btn-light");
        console.log(city)
        $("#cities").append(button);
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
            console.log(response.list)
            $("#5day").text("5-Day Forecast");
            $(".dayForecast").empty()
            // Make the 5 day based on the time it is right now
            // UV index in colors
            // Cloud icon next to name of city
            // Local storage 
            // Change format of 5-day date
            for (var i=3; i<response.list.length; i = i + 8){
                var div = $("<div>");
                div.addClass("container col-md-2 bg-primary rounded");
                var day = $("<h4>");
                day.text(response.list[i].dt_txt.split(" ")[0]);
                day.addClass("m-3 text-white");
                var temp = $("<p>");
                temp.text("Temp: " + response.list[i].main.temp);
                temp.addClass("m-3 text-white")
                var humid = $("<p>");
                humid.text("Humidity: " + response.list[i].main.humidity);
                humid.addClass("m-3 text-white");
                var img = $("<img>");
                console.log(response.list[i].weather[0].icon)
                img.attr("src",  response.list[i].weather[0].icon  + ".png");
                div.append(day, img, temp, humid);
                $(".dayForecast").append(div);
            }

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
            $("#uvIdx").text("UV Index: ");
            $("#uvIdx").append("<span class = 'uvIdxColor'>" + response.current.uvi + "</span>");
            if(response.current.uvi > 10){
                $(".uvIdxColor").css({"background-color": "red", "color":"white"});
            }
            else {
                $(".uvIdxColor").css({"background-color": "green", "color":"white"});
            }
        });
        });
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
            console.log(response.list)
            $("#5day").text("5-Day Forecast");
            $(".dayForecast").empty()
            // Make the 5 day based on the time it is right now
            // Make it so when you  search it displays the data
            // UV index in colors
            // Cloud icon next to name of city
            // Local storage 
            for (var i=3; i<response.list.length; i = i + 8){
                var div = $("<div>");
                div.addClass("container col-md-2 bg-primary rounded");
                var day = $("<h4>");
                day.text(response.list[i].dt_txt.split(" ")[0]);
                day.addClass("m-3 text-white")
                var temp = $("<p>");
                temp.text("Temp: " + response.list[i].main.temp);
                temp.addClass("m-3 text-white")
                var humid = $("<p>");
                humid.text("Humidity: " + response.list[i].main.humidity);
                humid.addClass("m-3 text-white")
                var img = $("<img>");
                console.log(response.list[i].weather[0].icon)
                img.attr("src",  response.list[i].weather[0].icon  + ".png");
                div.append(day, img, temp, humid);
                $(".dayForecast").append(div);
            }

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
            $("#uvIdx").text("UV Index: ");
            $("#uvIdx").append("<span class = 'uvIdxColor'>" + response.current.uvi + "</span>");
            if(response.current.uvi > 10){
                $(".uvIdxColor").css({"background-color": "red", "color":"white"});
            }
            else {
                $(".uvIdxColor").css({"background-color": "green", "color":"white"});
            }
        });
        });
        
    })
});
