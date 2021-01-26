function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#cityInput");
  cityElement.innerHTML = cityInput.value;
}

function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let fahrenheitTemperature = (celsiusTemperature) *9 /5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSubmit);

let celsiusTemperature= null;
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);
let icon = document.querySelector("#icon");

function displayWeatherCondition(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );

  document.querySelector("#temp_min").innerHTML = Math.round(
    response.data.main.temp_min
  );
  document.querySelector("#temp_max").innerHTML = Math.round(
    response.data.main.temp_max
  );
  document.querySelector(".current-weather-condition").innerHTML =
    response.data.weather[0].main;
  icon.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  icon.setAttribute("alt", response.data.weather[0].description);
  celsiusTemperature= response.data.main.temp;
  document.querySelector("#forecast").innerHTML= formatDate(response.data.dt*1000);
}

function formatHours(timestamp) {
let date = new Date(timestamp);
let hours = date.getHours();
      if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}`;
}
function displayForecast(response) {
let forecastElement = document.querySelector("#forecast");
let forecast= response.data.list[0];
console.log(forecast);
forecastElement.innerHTML = 
  `<div class="col">
      <Strong>
        Weekly Forecast
      </Strong>
      <br />
      ${formatHours(forecast.dt * 1000)}
        <img 
            src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png"
            alt=""
        />
      <br />
    </div>` 
}

function searchCity(city) {
  let apiKey = "f080158c041532d07353f9c3c3fc3150";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(displayWeatherCondition);
}
function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#cityInput").value;
  searchCity(city);
}

function searchLocation(position) {
  let apiKey = "f080158c041532d07353f9c3c3fc3150";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeatherCondition);
}
let unit = "metric";

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentWeatherButton = document.querySelector("#weatherInfo");
currentWeatherButton.addEventListener("submit", handleSubmit);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

searchCity("Taipei");
