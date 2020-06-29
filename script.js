$(document).ready(function() {
    // localStorage.clear();
    var cityArray = JSON.parse(localStorage.getItem("cities"));
    if(cityArray !== null){
        for(var i=0; i<cityArray.length; i++){
            var button = $("<button>");
            button.text(cityArray[i]);
            button.addClass("cityBtn btn btn-light");
            $("#cities").append(button);
        }
    }
    else {
        cityArray = [];
    }
    $("#clear").on("click", function(){
        localStorage.clear();
        $("#cities").empty();
    });
    $("#searchBtn").on("click", function(event) {
        var city = $("#citySearch").val();
        var button = $("<button>");
        cityArray.push(city);
        localStorage.setItem("cities", JSON.stringify(cityArray));
        button.text(city);
        button.addClass("cityBtn btn btn-light");
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
            $("#5day").text("5-Day Forecast");
            $(".dayForecast").empty()
            for (var i=0; i<response.list.length; i = i + 8){
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
                img.attr("src",  response.list[i].weather[0].icon  + ".png");
                div.append(day, img, temp, humid);
                $(".dayForecast").append(div);
            }

        // Here we are building the URL we need to query the database
        var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&units=imperial&appid=" + APIKey;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {

            $("#cityName").text(city + " (" + moment().format("dddd, MMMM Do YYYY")+ ")");
            $("#cityName").append("<img style = 'width: 70px;' src='" + response.current.weather[0].icon  + ".png'>");
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
            $("#5day").text("5-Day Forecast");
            $(".dayForecast").empty()
            for (var i=0; i<response.list.length; i = i + 8){
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
                img.attr("src",  response.list[i].weather[0].icon  + ".png");
                div.append(day, img, temp, humid);
                $(".dayForecast").append(div);
            }

        // Here we are building the URL we need to query the database
        var queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&units=imperial&appid=" + APIKey;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {

            $("#cityName").text(city + " (" + moment().format("dddd, MMMM Do YYYY")+ ")");
            $("#cityName").append("<img style = 'width: 70px;' src='" + response.current.weather[0].icon  + ".png'>");
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
