const API_KEY = "475a1e1ccdee5705c657fdd6f9c17647";
const KEY_COORDS = "key_coords";

const containerWeather = document.querySelector(".js-weather");

function init() {
  loadCoords();
}
init();

function loadCoords() {
  const loadedCoords = localStorage.getItem(KEY_COORDS);
  if (loadedCoords === null) {
    askForCoords();
  } else {
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords);
  }
}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coords = {
    latitude,
    longitude,
  };

  saveCoords(coords);
  getWeather(coords);
}

function handleGeoError() {
  console.log("Failed to get geolocation!");
}

function getWeather(coords) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${API_KEY}&units=metric`
  )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
      containerWeather.classList.remove("display-none");

      const spanWeather = document.createElement("span");
      spanWeather.classList.add("js-weather__desc");
      spanWeather.innerText = `${json.weather[0].description}, ${json.main.temp}℃ @ ${json.name}`;

      containerWeather.appendChild(spanWeather);
    });
}

function saveCoords(coords) {
  localStorage.setItem(KEY_COORDS, JSON.stringify(coords));
}

function showWeather() {}
