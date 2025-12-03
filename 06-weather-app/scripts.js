const input = document.querySelector('.find input[type="text"]');
const searchBtn = document.querySelector(".btn-search");

function handleSearch() {
  const cityName = input.value;
  console.log("City name:", cityName);

  if (cityName.trim() === "") {
    alert("Please enter the name of the city");
    return;
  }

  getWeather(cityName);
}

searchBtn.addEventListener("click", handleSearch);

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    handleSearch();
  }
});

async function getWeather(city) {
  const API_KEY = CONFIG.WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=eng`;

  showLoading();

  try {
    const response = await fetch(url);
    const data = await response.json();

    hideLoading();

    // Control if city exist
    if (data.cod === 200) {
      displayWeather(data);
      clearError();
      saveToHistory(data);
      displayHistory();
      input.value = "";
    } else {
      const card = document.querySelector(".card");
      card.innerHTML = "";
      showError(data.message || "City not found");
    }

    console.log(data);
    return data;
  } catch (error) {
    hideLoading();
    showError("Network error. Please try again.");
    console.error(error);
  }
}

function getIconPath(iconName) {
  const isLightTheme = document.body.classList.contains("light-theme");
  const theme = isLightTheme ? "dark" : "light";
  return `./assets/${theme}/${iconName}_${theme}.svg`;
}

function displayWeather(data) {
  const card = document.querySelector(".card");

  const cityName = data.name;
  const country = data.sys.country;
  const temp = Math.round(data.main.temp);
  const windSpeed = data.wind.speed;
  const description = data.weather[0].description;
  const icon = data.weather[0].icon;
  const humidity = data.main.humidity;
  const visibility = (data.visibility / 1000).toFixed(1);

  const mapIcon = getIconPath("map-pi");
  const thermometerIcon = getIconPath("thermometer");
  const windIcon = getIconPath("wind");
  const dropletIcon = getIconPath("droplet");
  const eyeIcon = getIconPath("eye");

  card.innerHTML = `
    <div class="weather-info">
          <div class="city-name">
            <h2>${cityName}, ${country}</h2>
            <img src="${mapIcon}" alt="Location" />
          </div>

          <div class="weather-temp">

            <div class="div temp-image">
                <img src="${thermometerIcon}" alt="Temperature" />
            </div>

            <div class="temperature">
                <h1>${temp}°C</h1>
            </div>

            <div class="weather-img">
                <img src="https://openweathermap.org/img/wn/${icon}@4x.png" alt="${description}" />
            </div>
          </div>

          <div class="datails">
            <div class="datail">
              <div class="datail-image">
                <img src="${windIcon}" alt="Wind" />
              </div>
              <div class="datail-text">
                <span class="label">WIND</span>
                <span class="value">${windSpeed} m/s</span>
              </div>
            </div>

            <div class="datail">
              <div class="datail-image">
                <img src="${dropletIcon}" alt="Humidity" />
              </div>
              <div class="datail-text">
                <span class="label">HUMIDITY</span>
                <span class="value">${humidity}%</span>
              </div>
            </div>

            <div class="datail">
              <div class="datail-image">
                <img src="${eyeIcon}" alt="Visibility" />
              </div>
              <div class="datail-text">
                <span class="label">VISIBILITY</span>
                <span class="value">${visibility} km</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  `;
}

function showError(message) {
  const failsDiv = document.querySelector(".fails p");
  failsDiv.textContent = message;
  failsDiv.style.display = "block";

  setTimeout(() => {
    clearError();
  }, 5000);
}

function clearError() {
  const failsDiv = document.querySelector(".fails p");
  failsDiv.textContent = "";
  failsDiv.style.display = "none";
}

// SAVE TO HISTORY

function saveToHistory(data) {
  let history = JSON.parse(localStorage.getItem("weatherHistory")) || [];

  const newItem = {
    city: data.name,
    temp: Math.round(data.main.temp),
    icon: data.weather[0].icon,
  };

  const existingIndex = history.findIndex((item) => item.city === newItem.city);

  if (existingIndex !== -1) {
    history.splice(existingIndex, 1);
  }

  history.unshift(newItem);

  history = history.slice(0, 7);

  localStorage.setItem("weatherHistory", JSON.stringify(history));
}

// DISPLAY HISTORY

function displayHistory() {
  const history = JSON.parse(localStorage.getItem("weatherHistory")) || [];
  const recentWeatherDiv = document.querySelector(".recent-weather");

  recentWeatherDiv.innerHTML = "";

  history.forEach((item) => {
    const weatherCard = document.createElement("div");
    weatherCard.className = "weather";
    weatherCard.innerHTML = `
      <div class="history-city">${item.city}</div>
      <img src="https://openweathermap.org/img/wn/${item.icon}@2x.png" alt="${item.description}">
      <div class="history-temp">${item.temp}°C</div>`;

    weatherCard.addEventListener("click", () => {
      getWeather(item.city);
    });

    recentWeatherDiv.appendChild(weatherCard);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  displayHistory();
});

// THEME SWITCHER
const themeToggle = document.getElementById("theme-toggle");

function updateWeatherIcons() {
  const card = document.querySelector(".card");
  if (!card || !card.innerHTML) return;

  const mapImg = card.querySelector(".city-name img");
  const thermometerImg = card.querySelector(".temp-image img");
  const windImg = card.querySelector('.datail-image img[alt="Wind"]');
  const humidityImg = card.querySelector('.datail-image img[alt="Humidity"]');
  const visibilityImg = card.querySelector(
    '.datail-image img[alt="Visibility"]'
  );

  if (mapImg) mapImg.src = getIconPath("map-pi");
  if (thermometerImg) thermometerImg.src = getIconPath("thermometer");
  if (windImg) windImg.src = getIconPath("wind");
  if (humidityImg) humidityImg.src = getIconPath("droplet");
  if (visibilityImg) visibilityImg.src = getIconPath("eye");
}

if (themeToggle) {
  themeToggle.addEventListener("change", () => {
    if (themeToggle.checked) {
      document.body.classList.add("light-theme");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.remove("light-theme");
      localStorage.setItem("theme", "dark");
    }

    updateWeatherIcons();
  });
}

function loadTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    themeToggle.checked = true;
  } else {
    document.body.classList.remove("light-theme");
    themeToggle.checked = false;
  }
}

loadTheme();

// LOADING STATE
function showLoading() {
  const loadingContainer = document.querySelector(".loader-container");
  const weatherCard = document.querySelector(".weather-card");

  if (loadingContainer) {
    loadingContainer.classList.add("active");
  }
  if (weatherCard) {
    weatherCard.style.display = "none";
  }
}

function hideLoading() {
  const loadingContainer = document.querySelector(".loader-container");
  const weatherCard = document.querySelector(".weather-card");

  if (loadingContainer) {
    loadingContainer.classList.remove("active");
  }
  if (weatherCard) {
    weatherCard.style.display = "flex";
  }
}
