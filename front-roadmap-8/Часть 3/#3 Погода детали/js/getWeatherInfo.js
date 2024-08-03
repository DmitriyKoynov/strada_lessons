import { UI } from './UI.js';
import { getWeatherInfo, REQUEST_TYPE } from './api/weatherApi.js';
import { getCurrentLocation } from './api/geolocationApi.js';
import { updateLikeButton } from './favoriteLocations.js';

const TEMPERATURE_SYSTEMS = {
    standard: { units: 'standard', temperatureSign: 'K' },
    metrics: { units: 'metric', temperatureSign: 'C' },
    imperial: { units: 'imperial', temperatureSign: 'F' }
};

export let locationWeatherInfo = {};
export let locationForecastInfo = {};
let temperatureSystem = TEMPERATURE_SYSTEMS.metrics;

export function getLocationInfoBySearch(event) {
    event.preventDefault();
    const location = getSearchInputValue();
    updateWeatherAndForecastInfo(location);
}

export function updateWeatherAndForecastInfo(location) {
    Promise.all([
        getWeatherInfo(location, temperatureSystem, REQUEST_TYPE.WEATHER),
        getWeatherInfo(location, temperatureSystem, REQUEST_TYPE.FORECAST)
    ])
        .then(([weatherResponse, forecastResponse]) => {
            locationWeatherInfo = weatherResponse;
            locationForecastInfo = forecastResponse;

            updateWeatherInfo(locationWeatherInfo);
            updateForecastInfo(locationForecastInfo);
            updateLikeButton();
        })
        .catch(error => console.error(error.message));
}

function updateWeatherInfo(locationWeatherInfo) {
    UI.CHOSEN_LOCATION.textContent = locationWeatherInfo.name;
    UI.WEATHER_ICON.src = getWeatherIconSrcPath(locationWeatherInfo.weather[0].icon);

    UI.TEMPERATURE.textContent = roundAndAddTemperatureSign(locationWeatherInfo.main.temp);
    UI.FEELS_LIKE.textContent = roundAndAddTemperatureSign(locationWeatherInfo.main.feels_like);

    UI.TIME.textContent = getConvenientTime(locationWeatherInfo.timezone, Date.now() / 1000);
    UI.SUNRISE.textContent = getConvenientTime(locationWeatherInfo.timezone, locationWeatherInfo.sys.sunrise);
    UI.SUNSET.textContent = getConvenientTime(locationWeatherInfo.timezone, locationWeatherInfo.sys.sunset);
}

function updateForecastInfo(locationForecastInfo) {
    clearForecastContainer();
    const forecastIntervalsAmount = 5;
    for (let index = 0; index < forecastIntervalsAmount; index++) {
        const forecastElement = locationForecastInfo.list[index];

        const time = getConvenientTime(locationForecastInfo.city.timezone, forecastElement.dt);
        const temperature = roundAndAddTemperatureSign(forecastElement.main.temp);
        const feelsLike = roundAndAddTemperatureSign(forecastElement.main.feels_like);

        createForecastUIElement(time, temperature, feelsLike);
    }
}

function clearForecastContainer() {
    UI.FORECAST_ELEMENTS_CONTAINER.textContent = '';
}

function getWeatherIconSrcPath(iconFromWeatherInfo) {
    return `./icons/weatherIcons/${iconFromWeatherInfo}.svg`;
}

function roundAndAddTemperatureSign(temperature) {
    return Math.round(temperature) + '°' + temperatureSystem.temperatureSign;
}

function getSearchInputValue() {
    return UI.SEARCH_INPUT.value;
}

export function getCurrentLocationInfo() {
    getCurrentLocation()
        .then(currentUserLocation => updateWeatherAndForecastInfo(currentUserLocation))
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
    temperatureElement.textContent = 'Температура: ' + temperature;
    feelsLikeElement.textContent = 'Ощущается: ' + feelsLike;

    divContainer.append(timeElement, temperatureElement, feelsLikeElement);
    UI.FORECAST_ELEMENTS_CONTAINER.append(divContainer);
}

function getConvenientTime(timezone, timestamp) {
    const time = new Date(timestamp * 1000 + timezone * 1000);
    return getConvenientTimeInCurrentZone(time);
}

function getConvenientTimeInCurrentZone(date) {
    const currentHours = date.getUTCHours();
    const currentMinutes = date.getMinutes();

    const humanHours = currentHours < 10 ? '0' + currentHours : currentHours;
    const humanMinutes = currentMinutes < 10 ? '0' + currentMinutes : currentMinutes;

    const currentTime = `${humanHours}:${humanMinutes}`;
    return currentTime;
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
    updateWeatherAndForecastInfo(locationWeatherInfo.name);
}
