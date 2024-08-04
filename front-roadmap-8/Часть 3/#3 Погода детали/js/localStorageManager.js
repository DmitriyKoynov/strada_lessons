import { favoriteLocations } from './favoriteLocations.js';

export function saveFavoriteLocationsInLocalStorage() {
    localStorage.setItem('favoriteLocations', favoriteLocations);
}

export function getFavoriteLocationsFromLocalStorage() {
    let favoriteLocationsAsString = localStorage.getItem('favoriteLocations');
    if (favoriteLocationsAsString) {
        return favoriteLocationsAsString.split(',');
    }
    return [];
}

export const storage = {
    getCurrentLocationInfo: function () {
        localStorage.getItem('currentLocationInfo');
    },
    setCurrentLocationInfo: function (currentLocationInfo) {
        localStorage.setItem('currentLocationInfo', currentLocationInfo);
    },
    getFavoriteLocationsInfo: function () {
        localStorage.getItem('favoriteLocationsInfo');
    },
    setFavoriteLocationsInfo: function (favoriteLocationsInfo) {
        localStorage.setItem('favoriteLocationsInfo', favoriteLocationsInfo);
    }
};
