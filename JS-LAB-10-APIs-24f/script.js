window.onload = function() {
    var out_location = document.getElementById("location");
    var out_temp = document.getElementById("temperature");
    var out_conditions = document.getElementById("conditions");


    // API key provided
    var apiKey = "e208071fec091f20061bb284eaa9bb46";
    var url ="http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=" + apiKey + "&units=metric";
    


    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = "json";
    xhr.send(null);

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var DATA = xhr.response;

                // Display city name
                out_location.innerHTML = DATA.name;

                // Display temperature rounded to nearest integer and append "°C"
                out_temp.innerHTML = Math.round(DATA.main.temp) + "&#8451";

                var description = DATA.weather[0].description;
                out_conditions.innerHTML = description.charAt(0).toUpperCase() + description.slice(1) + ".";

    
            } else {
                // Handle errors
                out_location.innerHTML = "API call was unsuccessful";
                console.error("Error: " + xhr.status);

            }
        }
    };
};