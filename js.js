$(document).ready(function(){
    $.get(
   "http://api.openweathermap.org/data/2.5/weather",
       {
       "id" : "707470",
       "appid" : "0e1ecde1b691c12ec84b758227ebe661"
       },
      function(Data){
          $('#name').html(Data.name);
          $('#img').attr('src','https://openweathermap.org/img/w/'+Data.weather[0].icon+'.png');
          $('#clouds').html("xмарність : " + Data.clouds.all + "%");
          $('#humidity').html("вологість : " + Data.main.humidity  + "%");
          $('#pressure').html("тиск : " + Math.round(Data.main.pressure*0.00750063755419211*100) + " мм.рт.ст");
          $('#temp').html("температура : " + Math.round(Data.main.temp-273) + ' &#176C');
      } 
    ); 

});

