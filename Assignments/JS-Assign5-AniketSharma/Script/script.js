window.onload = function () {
    var API_KEY = "e208071fec091f20061bb284eaa9bb46";
    var BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
    var outputSection = document.getElementById("output");
    var outLocation = document.getElementById("location");
    var outTemp = document.getElementById("temperature");
    var outConditions = document.getElementById("conditions");
    var outIcon = document.getElementById("icon");
    var outFifthData = document.getElementById("fifth-data");
    var outWindSpeed = document.getElementById("wind-speed");
  
    function openWeather(city) {
      var url = BASE_URL + "?q=" + city + "&appid=" + API_KEY + "&units=metric";    // string ?q=city tells the API which city to fetch weather information
      
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.responseType = "json";
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            var DATA = xhr.response;
            console.log(DATA);
  
            // Update DOM elements with API data
            outLocation.innerHTML = DATA.name;
            outTemp.innerHTML = Math.round(DATA.main.temp) + "\u2103";
            outConditions.innerHTML = DATA.weather[0].description;
  
            // Weather icon with alt attribute
            outIcon.innerHTML = '<img src="http://openweathermap.org/img/wn/' + DATA.weather[0].icon + '.png" alt="' + DATA.weather[0].description + ' icon" />';
  
            // Fifth data property: Humidity
            outFifthData.innerHTML =  DATA.main.humidity + '\u0025';
  
            // Add wind speed to the output
            outWindSpeed.innerHTML =  DATA.wind.speed + ' m/s'; 
  
            // Make the output section visible
            outputSection.style.display = "block";
          } else {
            outLocation.textContent = "Unable to fetch weather data.";
            console.error('Error ' + xhr.status + ': ' + xhr.statusText);
          }
        }
      };
      xhr.send();
    }
  
    // Add event listeners to all buttons
    var buttons = document.querySelectorAll("#buttons button");
    buttons.forEach((button) => {
      button.addEventListener("click", () => openWeather(button.id));
    });
  
    // Initially hide the output section
    outputSection.style.display = "none";
  };
  