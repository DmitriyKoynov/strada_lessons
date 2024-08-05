import { getLocationInfoFromServer } from './api/weatherApi.js';
import { chosenLocation, favoriteList } from './main.js';
import { parseWeatherInfo } from './parsers/weatherParser.js';
import { parseForecastInfo } from './parsers/forecastParser.js';
import { createPage } from './UI/UIBuilder.js';
import { UI } from './UI/UI.js';
import { TEMPERATURE_MEASUREMENT_SYSTEMS } from './utils.js';
import { getCurrentLocation } from './api/geolocationApi.js';
import { localStorageManager } from './localStorageManager.js';

export function getLocationInfoBySearch(event) {
    event.preventDefault();
    const locationName = getSearchInputValue();
    updateChosenLocationPageInfo(locationName);
}
function getSearchInputValue() {
    return UI.SEARCH_INPUT.value;
}
function updateChosenLocationPageInfo(locationName) {
    getLocationInfoFromServer(locationName, chosenLocation.temperatureSystem).then(
        ([weatherInfoFromServer, forecastInfoFromServer]) => {
            chosenLocation.weather = parseWeatherInfo(weatherInfoFromServer);
            chosenLocation.forecast = parseForecastInfo(forecastInfoFromServer, chosenLocation.forecastElementsAmount);
            createPage(undefined, chosenLocation);
        }
    );
}

export function showRemoveButtonOnRow(event) {
    const hasLocationRowInParent = event.target.closest('.location-list-item');
    if (hasLocationRowInParent) {
        const locationRow = event.target.closest('.location-list-item');
        const removeButton = locationRow.querySelector('.removeButton');
        removeButton.style.display = 'block';
        locationRow.addEventListener('mouseleave', hideRemoveButton);
    }
}
function hideRemoveButton() {
    this.querySelector('.removeButton').style.display = 'none';
    this.removeEventListener('mouseleave', hideRemoveButton);
}

export function chooseFavoriteLocation(event) {
    const hasLocationRowInParent = event.target.closest('.location-list-item');
    const isNotRemoveButton = !event.target.classList.contains('removeButton');

    if (hasLocationRowInParent && isNotRemoveButton) {
        const locationRow = event.target.closest('.location-list-item');
        const locationName = locationRow.querySelector('.location').textContent;
        updateChosenLocationPageInfo(locationName);
    }
}
export function removeFavoriteLocationByRemoveButton(event) {
    const isRemoveButton = event.target.classList.contains('removeButton');
    if (isRemoveButton) {
        event.stopPropagation();
        const locationName = event.target.previousSibling.textContent;
        removeLocationFromFavoriteList(locationName);
        createPage(favoriteList);
    }
}

export function likeOrUnlikeLocation() {
    const locationName = chosenLocation.weather.location;
    const isFavoriteLocation = favoriteList.includes(locationName);
    if (isFavoriteLocation) {
        removeLocationFromFavoriteList(locationName);
        createPage(favoriteList);
        return;
    }
    addLocationToFavoriteList(locationName);
    createPage(favoriteList);
}

function addLocationToFavoriteList(locationName) {
    favoriteList.push(locationName);
    localStorageManager.setFavoritesData(favoriteList);
    updateLikeButton();
    console.log(SUCCESS_MESSAGES.addSuccess(locationName));
}

function removeLocationFromFavoriteList(locationName) {
    const locationToRemoveIndex = favoriteList.findIndex(element => element === locationName);
    favoriteList.splice(locationToRemoveIndex, 1);
    localStorageManager.setFavoritesData(favoriteList);
    updateLikeButton();
    console.log(SUCCESS_MESSAGES.removeSuccess(locationName));
}

const SUCCESS_MESSAGES = {
    addSuccess: location => `Локация '${location}' добавлена в список избранных`,
    removeSuccess: location => `Локация '${location}' удалена из списка избранных`
};

export function convertTemperatureValue() {
    switch (chosenLocation.temperatureSystem) {
        case TEMPERATURE_MEASUREMENT_SYSTEMS.metric:
            chosenLocation.temperatureSystem = TEMPERATURE_MEASUREMENT_SYSTEMS.standard;
            break;
        case TEMPERATURE_MEASUREMENT_SYSTEMS.standard:
            chosenLocation.temperatureSystem = TEMPERATURE_MEASUREMENT_SYSTEMS.imperial;
            break;
        case TEMPERATURE_MEASUREMENT_SYSTEMS.imperial:
            chosenLocation.temperatureSystem = TEMPERATURE_MEASUREMENT_SYSTEMS.metric;
            break;
    }
    updateChosenLocationPageInfo(chosenLocation.weather.location);
}

export function getCurrentLocationInfo() {
    return getCurrentLocation()
        .then(currentUserLocation => updateChosenLocationPageInfo(currentUserLocation))
        .catch(error => console.error(error));
}

export function updateLikeButton() {
    const isCurrentLocationFavorite = favoriteList.includes(chosenLocation.weather.location);
    if (isCurrentLocationFavorite) {
        UI.LIKE_BUTTON.classList.add('like-button--liked');
    }
    if (!isCurrentLocationFavorite) {
        UI.LIKE_BUTTON.classList.remove('like-button--liked');
    }
}
