
var APIKey = "9fef7e39f83251253e4fefa00914d539";



var cityInput = document.getElementById('city-input');
var weatherInfo = document.getElementById('weather-info');
var forecastOne = document.getElementById('forecast-one')
var forecastTwo = document.getElementById('forecast-two')
var forecastThree = document.getElementById('forecast-three')
var forecastFour = document.getElementById('forecast-four')
var forecastFive = document.getElementById('forecast-five')

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

    var forecastHTMLone = '';
    var forecastweatherone = data.list[3]
    var temperatureOne = forecastweatherone.main.temp
    var descriptionOne = forecastweatherone.weather[0].description

    forecastHTMLone +=     `<div class="forecast-item">
                            <p>${forecastweatherone.dt_txt}</p>
                            <p>Temperature: ${temperatureOne - 273.15}°C</p>
                            <p>Description: ${descriptionOne}</p>
                        </div>`;
    
    forecastOne.innerHTML = forecastHTMLone

    var forecastHTMLtwo = '';
    var forecastweatherTwo = data.list[11]
    var temperatureTwo = forecastweatherTwo.main.temp
    var descriptionTwo = forecastweatherTwo.weather[0].description

    forecastHTMLtwo +=     `<div class="forecast-item">
                            <p>${forecastweatherTwo.dt_txt}</p>
                            <p>Temperature: ${temperatureTwo - 273.15}°C</p>
                            <p>Description: ${descriptionTwo}</p>
                        </div>`;
    
    forecastTwo.innerHTML = forecastHTMLtwo

    var forecastHTMLthree = '';
    var forecastweatherThree = data.list[19]
    var temperatureThree = forecastweatherThree.main.temp
    var descriptionThree = forecastweatherThree.weather[0].description

    forecastHTMLthree +=     `<div class="forecast-item">
                            <p>${forecastweatherThree.dt_txt}</p>
                            <p>Temperature: ${temperatureThree - 273.15}°C</p>
                            <p>Description: ${descriptionThree}</p>
                        </div>`;
    
    forecastThree.innerHTML = forecastHTMLthree

    var forecastHTMLfour = '';
    var forecastweatherFour = data.list[27]
    var temperatureFour = forecastweatherFour.main.temp
    var descriptionFour = forecastweatherFour.weather[0].description

    forecastHTMLfour +=     `<div class="forecast-item">
                            <p>${forecastweatherFour.dt_txt}</p>
                            <p>Temperature: ${temperatureFour - 273.15}°C</p>
                            <p>Description: ${descriptionFour}</p>
                        </div>`;
    
    forecastFour.innerHTML = forecastHTMLfour

    var forecastHTMLfive = '';
    var forecastweatherFive = data.list[35]
    var temperatureFive = forecastweatherFive.main.temp
    var descriptionFive = forecastweatherFive.weather[0].description

    forecastHTMLfive +=     `<div class="forecast-item">
                            <p>${forecastweatherFive.dt_txt}</p>
                            <p>Temperature: ${temperatureFive - 273.15}°C</p>
                            <p>Description: ${descriptionFive}</p>
                        </div>`;
    
    forecastFive.innerHTML = forecastHTMLfive
}