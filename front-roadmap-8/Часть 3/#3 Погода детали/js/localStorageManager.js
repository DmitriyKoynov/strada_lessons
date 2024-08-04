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
