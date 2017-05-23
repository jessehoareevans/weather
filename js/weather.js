var apiKey = require('./../.env').apiKey;

Weather = function(){
};

Weather.prototype.getWeather = function(city, displayHumidity){
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response){
      console.log(response);
    displayHumidity(city, response.main.humidity);

  }).fail(function(error){
    $('.showWeather').text(error.responseJSON.message);
  });
};

Weather.prototype.getTemp = function(city, displayTemperature){
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=imperial&appid=' + apiKey).then(function(response){
      console.log(response);
    displayTemperature(city, response.main.temp);

  }).fail(function(error){
    $('.showWeather').text(error.responseJSON.message);
  });
};

exports.weatherModule = Weather;
