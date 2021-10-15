var APIKey = "c1a6641ae26f2c0316f0a4414c81a3e3";
var city = "";


console.log("work")


var currentConditions = (event) => {
    let city = $("#search-city").val();
    currentWeather = $("#search-city").val();
    console.log("working")
    let queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
    fetch(queryURL)
    .then (handleErrors)
    .then((response) => {
        return response.json();
    })
     console.log("does this work")
}