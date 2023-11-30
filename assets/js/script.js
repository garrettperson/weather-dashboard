
var APIKey = "9fef7e39f83251253e4fefa00914d539";



var cityInput = document.getElementById('city-input');
var weatherInfo = document.getElementById('weather-info');

var savedCity = localStorage.getItem('savedCity');
if (savedCity) {
    cityInput.value = savedCity;
}

var savedCityTwo = localStorage.getItem('savedCityTwo');
if (savedCityTwo) {
    savedCity.value = savedCityTwo;
}

document.getElementById('city-one').textContent = savedCity

document.getElementById('city-two').textContent = savedCityTwo

document.getElementById('get-weather').onclick = async function getWeather() {
    var city = cityInput.value;
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey 

    fetch(queryURL)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
            // Save the entered city to local storage
            localStorage.setItem('savedCity', city);
        })
        .catch(error => {
            alert('An error occurred while fetching weather data.');
            console.error(error);
        });
}

function displayWeather(data) {
    console.log(data)
 
    var forecastList = data.list;

    var forecastHTML = ''; 

    var currentweather = data.list[0]
    var temperature = currentweather.main.temp
    var description = currentweather.weather[0].description

    var date = dayjs().format("MM DD YYYY hh:mm")
    forecastHTML +=     `<div class="forecast-item">
                            <p>${date}</p>
                            <p>Temperature: ${temperature - 273.15}°C</p>
                            <p>Description: ${description}</p>
                        </div>`;
    console.log(forecastHTML)

    weatherInfo.innerHTML = forecastHTML;
}