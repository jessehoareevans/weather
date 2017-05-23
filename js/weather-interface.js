var Weather = require('./../js/weather.js').weatherModule;

var displayHumidity = function(city, humidityData) {
  $('.showWeather').text("The humidity in " + city + " is " + humidityData + "%");
};

var displayTemperature = function(city, displayTemperature) {
  $('.showTemp').text("The temperature in " + city + " is " + displayTemperature);
};

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getWeather(city, displayHumidity);
  });
  var currentTempObject = new Weather();
$('#fahrenheit').click(function() {
  var city = $('#location').val();
  $('#location').val("");
  currentTempObject.getTemp(city, displayTemperature);
  });
});
