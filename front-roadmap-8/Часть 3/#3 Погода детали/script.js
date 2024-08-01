import { uiElementsCollection } from './uiElementsCollection.js';
import { getWeatherApiUrl, getFutureWeatherJson } from './weatherApiInfo.js';
import { getCurrentLocation } from './geolocationApiInfo.js';
import initialLocations from './initialLocations.json' with {type: 'json'};

const ERRORS_MESSAGES = {
    limitReachedError: 'Мы можем хранить не больше 5 любимых локаций',
    pointAlreadyInFavoritesError: 'Это место уже находится в Избранных'
};
const TEMPERATURE_SYSTEMS = {
    standard: { units: 'standard', temperatureSign: 'K' },
    metrics: { units: 'metric', temperatureSign: 'C' },
    imperial: { units: 'imperial', temperatureSign: 'F' }
};

const maxFavoritesAmount = 5;
uiElementsCollection.submitButton.addEventListener('click', updateInfo);
uiElementsCollection.searchForm.addEventListener('submit', updateInfo);
uiElementsCollection.likeButton.addEventListener('click', addToFavorites);
uiElementsCollection.currentTemperature.addEventListener('click', convertTemperatureValue);
uiElementsCollection.userCurrentLocationIcon.addEventListener('click', getCurrentLocationWeatherInfo);

let currentLocationWeatherInfo = {};
let currentTemperatureSystem = TEMPERATURE_SYSTEMS.metrics;
let currentLocation = '';
let favoriteLocations = initialLocations;
updateFavoriteLocationsListFromArray();

function updateInfo(event) {
    event.preventDefault();
    const location = getSearchInputValue();
    updateWeatherInfo(location);
}

function getSearchInputValue() {
    return uiElementsCollection.searchInput.value;
}

function updateWeatherInfo(location = currentLocation) {
    currentLocation = location;
    const weatherApiUrl = getWeatherApiUrl(currentLocation, currentTemperatureSystem);
    const weatherInfo = fetch(weatherApiUrl).then(response => response.json());

    weatherInfo
        .then(weatherInfo => {
            currentLocationWeatherInfo = weatherInfo;
            checkJsonResponseCode(currentLocationWeatherInfo);
            uiElementsCollection.chosenLocation.textContent = currentLocationWeatherInfo.name;
            uiElementsCollection.currentTemperature.textContent =
                Math.round(currentLocationWeatherInfo.main.temp) + '°' + currentTemperatureSystem.temperatureSign;
            uiElementsCollection.weatherIcon.src = `./icons/weatherIcons/${currentLocationWeatherInfo.weather[0].icon}.svg`;
            uiElementsCollection.likeButton.style.display = 'block';
            const isFavoriteLocation = favoriteLocations.some(element => element === currentLocationWeatherInfo.name);
            if (isFavoriteLocation) {
                uiElementsCollection.likeButton.classList.add('like-button--liked');
            }
            if (!isFavoriteLocation) {
                uiElementsCollection.likeButton.classList.remove('like-button--liked');
            }

            updateCurrentFeelsLike();
            updateTimeInfo();
            updateSunrise();
            updateSunset();

            getFutureWeatherJson(currentLocation, currentTemperatureSystem).then(futureWeatherInfo => {
                uiElementsCollection.featureWeatherElementsContainer.textContent = '';
                for (let index = 0; index < 3; index++) {
                    const interval = futureWeatherInfo.list[index];
                    const date = new Date(interval.dt * 1000 + currentLocationWeatherInfo.timezone * 1000);

                    const humanTime = getHumanTimeInCurrentZone(date);
                    const temperature = Math.round(interval.main.temp);
                    const feelsLike = Math.round(interval.main.feels_like);

                    createFutureWeathersElements(humanTime, temperature, feelsLike);
                }
            });
        })
        .catch(error => console.error(error.message));
}

function createFutureWeathersElements(humanTime, temperature, feelsLike) {
    const divContainer = document.createElement('div');
    const timeElement = document.createElement('p');
    const temperatureElement = document.createElement('p');
    const feelsLikeElement = document.createElement('p');

    divContainer.classList.add('future-weather-container');
    timeElement.classList.add('future-time','future-element', 'bold-text');
    temperatureElement.classList.add('future-temperature','future-element');
    feelsLikeElement.classList.add('future-feels-like','future-element');

    timeElement.textContent = humanTime;
    temperatureElement.textContent = 'Температура: '+temperature+'°' + currentTemperatureSystem.temperatureSign;
    feelsLikeElement.textContent = 'Ощущается: '+feelsLike+'°' + currentTemperatureSystem.temperatureSign;

    divContainer.append(timeElement, temperatureElement, feelsLikeElement);
    uiElementsCollection.featureWeatherElementsContainer.append(divContainer);
}

function updateCurrentFeelsLike() {
    uiElementsCollection.currentFeelsLike.textContent = Math.round(currentLocationWeatherInfo.main.feels_like)+'°' + currentTemperatureSystem.temperatureSign;
}

function updateTimeInfo() {
    const currentDate = new Date(Date.now() + currentLocationWeatherInfo.timezone * 1000);
    const currentTime = getHumanTimeInCurrentZone(currentDate);
    uiElementsCollection.currentTime.textContent = currentTime;
}

function updateSunrise() {
    const sunriseDate = new Date(
        currentLocationWeatherInfo.sys.sunrise * 1000 + currentLocationWeatherInfo.timezone * 1000
    );
    const sunriseTime = getHumanTimeInCurrentZone(sunriseDate);
    uiElementsCollection.sunrise.textContent = sunriseTime;
}
function updateSunset() {
    const sunsetDate = new Date(
        currentLocationWeatherInfo.sys.sunset * 1000 + currentLocationWeatherInfo.timezone * 1000
    );
    const sunsetTime = getHumanTimeInCurrentZone(sunsetDate);
    uiElementsCollection.sunset.textContent = sunsetTime;
}

function getHumanTimeInCurrentZone(date) {
    const currentHours = date.getUTCHours();
    const currentMinutes = date.getMinutes();

    const humanHours = currentHours < 10 ? '0' + currentHours : currentHours;
    const humanMinutes = currentMinutes < 10 ? '0' + currentMinutes : currentMinutes;

    const currentTime = `${humanHours}:${humanMinutes}`;
    return currentTime;
}

function checkJsonResponseCode(responseJson) {
    const responseCodeErrorFirstSymbol = '4';
    if (responseJson.cod[0] === responseCodeErrorFirstSymbol) {
        alert(responseJson.message);
        throw new Error(responseJson.message);
    }
}

function addToFavorites() {
    const newFavoriteLocation = uiElementsCollection.chosenLocation.textContent;
    const isFavoriteLocation = favoriteLocations.some(element => element === newFavoriteLocation);
    if (isFavoriteLocation) {
        const locationToRemoveIndex = favoriteLocations.findIndex(element => element === newFavoriteLocation);
        favoriteLocations.splice(locationToRemoveIndex, 1);
        updateFavoriteLocationsListFromArray();
        uiElementsCollection.likeButton.classList.remove('like-button--liked');
        return;
    }
    const hasReachedMaxFavorites = favoriteLocations.length >= maxFavoritesAmount;
    if (hasReachedMaxFavorites) {
        alert(ERRORS_MESSAGES.limitReachedError);
        return;
    }

    favoriteLocations.push(newFavoriteLocation);
    updateFavoriteLocationsListFromArray();
    uiElementsCollection.likeButton.classList.add('like-button--liked');
}

function removeFromFavorites(event) {
    event.stopPropagation();
    event.target.removeEventListener('click', removeFromFavorites);

    const elementNameToRemove = event.target.previousSibling.textContent;
    const locationToRemoveIndex = favoriteLocations.findIndex(element => element === elementNameToRemove);
    favoriteLocations.splice(locationToRemoveIndex, 1);
    updateFavoriteLocationsListFromArray();

    const isCurrentLocationFavorite = currentLocation === elementNameToRemove;
    if (isCurrentLocationFavorite) {
        uiElementsCollection.likeButton.classList.remove('like-button--liked');
    }
}

function clearFavoriteLocationsList() {
    uiElementsCollection.locationList.textContent = '';
    const removeButtons = uiElementsCollection.findAllRemoveButtons();
    removeButtons.forEach(element => {
        element.removeEventListener('click', removeFromFavorites);
    });
}

function updateFavoriteLocationsListFromArray() {
    clearFavoriteLocationsList();
    favoriteLocations.forEach(element => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        const removeButton = document.createElement('button');

        li.classList.add('location-list-item');
        p.classList.add('body-text');
        removeButton.type = 'button';
        removeButton.classList.add('removeButton');
        removeButton.style.display = 'none';

        p.textContent = element;

        li.addEventListener('mouseover', showRemoveButton);
        li.addEventListener('mouseout', hideRemoveButton);
        li.addEventListener('click', () => updateWeatherInfo(p.textContent));
        removeButton.addEventListener('click', removeFromFavorites);

        li.appendChild(p);
        li.appendChild(removeButton);
        uiElementsCollection.locationList.appendChild(li);
    });
}
function hideRemoveButton() {
    this.querySelector('.removeButton').style.display = 'none';
}

function showRemoveButton() {
    this.querySelector('.removeButton').style.display = 'block';
}

function convertTemperatureValue() {
    switch (currentTemperatureSystem) {
        case TEMPERATURE_SYSTEMS.metrics:
            currentTemperatureSystem = TEMPERATURE_SYSTEMS.standard;
            break;
        case TEMPERATURE_SYSTEMS.standard:
            currentTemperatureSystem = TEMPERATURE_SYSTEMS.imperial;
            break;
        case TEMPERATURE_SYSTEMS.imperial:
            currentTemperatureSystem = TEMPERATURE_SYSTEMS.metrics;
            break;
    }
    updateWeatherInfo();
}

function getCurrentLocationWeatherInfo() {
    getCurrentLocation()
        .then(location => {
            currentLocation = location;
            updateWeatherInfo();
        })
        .catch(error => console.error(error));
}
