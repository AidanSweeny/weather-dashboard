$("#searchBtn").on("click", function(event) {
    var city = $("#citySearch").val();
    var button = $("<button>");
    button.text(city);
    button.attr("class", "cityBtn");
    console.log(city)
    $("#cities").prepend(button);
})
$(".cityBtn").on("click", function(event) {
    var city = event.val()
    console.
})
$(document).ready(function() {
    var APIKey = "166a433c57516f51dfab1f7edaed8413";
    var city = "atlanta";
    // Here we are building the URL we need to query the database
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    });
});
