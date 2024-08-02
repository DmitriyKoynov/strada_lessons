import { UI } from './UI.js';
import { getWeatherInfo, getIconUrl, REQUEST_TYPE } from './api/weatherApi.js';
import { getCurrentLocation } from './api/geolocationApi.js';
import locationsList from './json/locationsList.json' with {type: 'json'};

const TEMPERATURE_SYSTEMS = {
    standard: { units: 'standard', temperatureSign: 'K' },
    metrics: { units: 'metric', temperatureSign: 'C' },
    imperial: { units: 'imperial', temperatureSign: 'F' }
};

let locationWeatherInfo = {};
let locationForecastInfo = {};
let temperatureSystem = TEMPERATURE_SYSTEMS.metrics;

const favoriteLocations = [];
const initialFavoriteLocations = locationsList;

const initialLocation = 'Екатеринбург';
let currentUserLocation = '';

function updateWeatherInfo(location) {
    Promise.all(
        [getWeatherInfo(location, temperatureSystem, REQUEST_TYPE.WEATHER),
        getWeatherInfo(location, temperatureSystem, REQUEST_TYPE.FORECAST)]
    )
        .then(([weatherResponse, forecastResponse]) => {
            console.log(weatherResponse);
            console.log(forecastResponse);
            locationWeatherInfo = weatherResponse;
            locationForecastInfo = forecastResponse;
            checkJsonResponseCode(locationWeatherInfo);

            UI.CHOSEN_LOCATION.textContent = locationWeatherInfo.name;
            UI.WEATHER_ICON.src = getWeatherIconSrcPath(locationWeatherInfo.weather[0].icon);
            setLikeButtonState(locationWeatherInfo.name);

            UI.TEMPERATURE.textContent = roundAndAddTemperatureSign(locationWeatherInfo.main.temp);
            UI.FEELS_LIKE.textContent = roundAndAddTemperatureSign(locationWeatherInfo.main.feels_like);

            UI.TIME.textContent = getConvenientTime(locationWeatherInfo, Date.now() / 1000);
            UI.SUNRISE.textContent = getConvenientTime(locationWeatherInfo, locationWeatherInfo.sys.sunrise);
            UI.SUNSET.textContent = getConvenientTime(locationWeatherInfo, locationWeatherInfo.sys.sunset);

            clearForecastContainer();
            createForecastElements();
        })
        .catch(error => console.error(error.message));
}

function createForecastElements() {
    for (let index = 0; index < 3; index++) {
        const forecastElement = locationForecastInfo.list[index];

        const date = new Date(forecastElement.dt * 1000 + locationWeatherInfo.timezone * 1000);
        const humanTime = getConvenientTimeInCurrentZone(date);
        const temperature = Math.round(forecastElement.main.temp);
        const feelsLike = Math.round(forecastElement.main.feels_like);

        createForecastUIElement(humanTime, temperature, feelsLike);
    }
}

function clearForecastContainer() {
    UI.FORECAST_ELEMENTS_CONTAINER.textContent = '';
}

function setLikeButtonState(location) {
    const isFavoriteLocation = favoriteLocations.some(element => element === location);
    if (isFavoriteLocation) {
        UI.LIKE_BUTTON.classList.add('like-button--liked');
    }
    // Кажется, и без этого должно работать. Если да — удаляй
    // if (!isFavoriteLocation) {
    //     UI.LIKE_BUTTON.classList.remove('like-button--liked');
    // }
}

function getWeatherIconSrcPath(iconFromWeatherInfo) {
    return `./icons/weatherIcons/${iconFromWeatherInfo}.svg`;
}

function roundAndAddTemperatureSign(temperature) {
    return Math.round(temperature) + '°' + temperatureSystem.temperatureSign;
}

///////////////////////////////////////////////////////////////////////

export function updateInfo(event) {
    event.preventDefault();
    const location = getSearchInputValue();
    updateWeatherInfo(location);
}

function getSearchInputValue() {
    return UI.SEARCH_INPUT.value;
}

export function getCurrentLocationWeatherInfo() {
    getCurrentLocation()
        .then(location => {
            currentLocation = location;
            updateWeatherInfo();
        })
        .catch(error => console.error(error));
}

function createForecastUIElement(humanTime, temperature, feelsLike) {
    const divContainer = document.createElement('div');
    const timeElement = document.createElement('p');
    const temperatureElement = document.createElement('p');
    const feelsLikeElement = document.createElement('p');

    divContainer.classList.add('forecast-container');
    timeElement.classList.add('forecast-time', 'forecast-element', 'bold-text');
    temperatureElement.classList.add('forecast-temperature', 'forecast-element');
    feelsLikeElement.classList.add('forecast-feels-like', 'forecast-element');

    timeElement.textContent = humanTime;
    temperatureElement.textContent = 'Температура: ' + temperature + '°' + temperatureSystem.temperatureSign;
    feelsLikeElement.textContent = 'Ощущается: ' + feelsLike + '°' + temperatureSystem.temperatureSign;

    divContainer.append(timeElement, temperatureElement, feelsLikeElement);
    UI.FORECAST_ELEMENTS_CONTAINER.append(divContainer);
}

function getConvenientTime(locationWeatherInfo, timestamp) {
    // Возможно, только для рассвета и заката нужно умножить timestamp на 1000
    const time = new Date(timestamp * 1000 + locationWeatherInfo.timezone * 1000);
    return getConvenientTimeInCurrentZone(time);
}

function updateSunrise() {
    const sunriseDate = new Date(
        currentLocationWeatherInfo.sys.sunrise * 1000 + currentLocationWeatherInfo.timezone * 1000
    );
    const sunriseTime = getConvenientTimeInCurrentZone(sunriseDate);
    uiElementsCollection.sunrise.textContent = sunriseTime;
}
function updateSunset() {
    const sunsetDate = new Date(
        currentLocationWeatherInfo.sys.sunset * 1000 + currentLocationWeatherInfo.timezone * 1000
    );
    const sunsetTime = getConvenientTimeInCurrentZone(sunsetDate);
    uiElementsCollection.sunset.textContent = sunsetTime;
}

function getConvenientTimeInCurrentZone(date) {
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

export function convertTemperatureValue() {
    switch (temperatureSystem) {
        case TEMPERATURE_SYSTEMS.metrics:
            temperatureSystem = TEMPERATURE_SYSTEMS.standard;
            break;
        case TEMPERATURE_SYSTEMS.standard:
            temperatureSystem = TEMPERATURE_SYSTEMS.imperial;
            break;
        case TEMPERATURE_SYSTEMS.imperial:
            temperatureSystem = TEMPERATURE_SYSTEMS.metrics;
            break;
    }
    updateWeatherInfo(locationWeatherInfo.name);
}
