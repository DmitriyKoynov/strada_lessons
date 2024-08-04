import { UI } from './UI.js';
import { locationWeatherInfo, updateWeatherAndForecastInfo } from './getWeatherInfo.js';
import { saveFavoriteLocationsInLocalStorage, getFavoriteLocationsFromLocalStorage } from './localStorageManager.js';

const MAX_FAVORITE_LOCATIONS = 5;
export let favoriteLocations = [];
const ERRORS_MESSAGES = {
    limitReachedError: `Мы можем хранить не больше ${MAX_FAVORITE_LOCATIONS} любимых локаций`,
    pointAlreadyInFavoritesError: 'Это место уже находится в Избранных'
};

export function setupInitialLocations() {
    favoriteLocations = getFavoriteLocationsFromLocalStorage();
    updateFavoriteLocationsUIList();
}

export function updateFavoriteLocationsUIList(locations = favoriteLocations) {
    clearFavoriteLocationsList();
    if (!locations) return;
    locations.forEach(element => {
        const li = document.createElement('li');
        const p = document.createElement('p');
        const removeButton = document.createElement('button');

        li.classList.add('location-list-item');
        p.classList.add('body-text', 'location');
        removeButton.type = 'button';
        removeButton.classList.add('removeButton');
        removeButton.style.display = 'none';

        p.textContent = element;

        li.append(p, removeButton);
        UI.FAVORITE_LOCATIONS.append(li);
    });
}

export function likeOrUnlikeLocation() {
    const isFavoriteLocation = favoriteLocations.includes(locationWeatherInfo.name);
    if (isFavoriteLocation) {
        removeLocationFromFavorites(locationWeatherInfo.name);
        return;
    }
    addLocationToFavorites(locationWeatherInfo.name);
}

function addLocationToFavorites(location) {
    const hasReachedMaxFavorites = favoriteLocations.length >= MAX_FAVORITE_LOCATIONS;
    if (hasReachedMaxFavorites) {
        alert(ERRORS_MESSAGES.limitReachedError);
        return;
    }

    addLocationToFavoriteLocationsArray(location);
    saveFavoriteLocationsInLocalStorage();
    updateFavoriteLocationsUIList();
    updateLikeButton();
}

function addLocationToFavoriteLocationsArray(location) {
    favoriteLocations.push(location);
}

export function removeFavoriteLocationByRemoveButton(event) {
    const isRemoveButton = event.target.classList.contains('removeButton');
    if (isRemoveButton) {
        event.stopPropagation();
        const location = event.target.previousSibling.textContent;
        removeLocationFromFavorites(location);
    }
}

function removeLocationFromFavorites(location) {
    removeLocationFromFavoriteLocationsArray(location);
    saveFavoriteLocationsInLocalStorage();
    updateFavoriteLocationsUIList();
    updateLikeButton();
}

function removeLocationFromFavoriteLocationsArray(location) {
    const locationToRemoveIndex = favoriteLocations.findIndex(element => element === location);
    favoriteLocations.splice(locationToRemoveIndex, 1);
}

export function showFavoriteLocationInfo(event) {
    const hasLocationRowInParent = event.target.closest('.location-list-item');
    const isNotRemoveButton = !event.target.classList.contains('removeButton');

    if (hasLocationRowInParent && isNotRemoveButton) {
        const locationRow = event.target.closest('.location-list-item');
        const location = locationRow.querySelector('.location').textContent;
        updateWeatherAndForecastInfo(location);
    }
}

export function updateLikeButton() {
    const isCurrentLocationFavorite = favoriteLocations.includes(locationWeatherInfo.name);
    if (isCurrentLocationFavorite) {
        UI.LIKE_BUTTON.classList.add('like-button--liked');
    }
    if (!isCurrentLocationFavorite) {
        UI.LIKE_BUTTON.classList.remove('like-button--liked');
    }
}

function clearFavoriteLocationsList() {
    UI.FAVORITE_LOCATIONS.textContent = '';
}

export function showRemoveButtonOnRows(event) {
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
