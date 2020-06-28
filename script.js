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
            console.log(response.list)
            for (var i=0; i<response.list.length; i = i + 8){
                var div = $("<div>");
                div.addClass("container col-md-2");
                var day = $("<h4>");
                day.text(response.list[i].dt_txt.split(" ")[0]);
                var temp = $("<p>");
                temp.text("Temp: " + response.list[i].main.temp);
                var humid = $("<p>");
                humid.text("Humidity: " + response.list[i].main.humidity);
                div.append(day, temp, humid);
                $("#5day").append(div);
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
            $("#uvIdx").text("UV Index: " + response.current.uvi);
        });
        });
        
    })
});
