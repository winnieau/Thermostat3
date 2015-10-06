thermostat = new Thermostat;
$(document).ready(function() {
  function value() {
    $('#display').text(thermostat.temperature+"\u00B0C");
    $('#display').css("color", function() {
      if (thermostat.temperature < 18) {
        return ("green");
      } else if (thermostat.temperature < 25) {
        return ("yellow");
      } else {
        return ("red");
      };
    });
  };

  var weatherAPI = function (city) {
    $.ajax("http://api.openweathermap.org/data/2.5/weather?q="+city, {
      success: function (data) {
        $('h2').html( "The temperature in "+data.name+" is "+Math.round(data.main.temp-273.15)+"\u00B0C" );
      }
    });
  };

  value()
  weatherAPI("London")

  $('#submit').click(function(){
    weatherAPI($('#city').val())
  });

  $('increasebutton').click(function() {
    thermostat.increaseBy(1);
    value();
  });
  $('decreasebutton').click(function() {
    thermostat.decreaseBy(1);
    value()
  });
  $('resetbutton').click(function() {
    thermostat.resetTemp();
    value()
  });
  $('PSMbutton').click(function() {
    thermostat.psmswitch();
  });
});
