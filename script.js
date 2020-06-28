$(document).ready(function() {
    queryURL = "htpps://api.openweathermap.org/data/2.5/weather?q=SanFrancisco,California&appid=8e279ea4e87ca0ed65b17053a29ece11"
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    });
});