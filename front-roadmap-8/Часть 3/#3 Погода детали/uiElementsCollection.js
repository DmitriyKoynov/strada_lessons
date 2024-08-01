export const uiElementsCollection = {
    searchForm: document.body.querySelector('.search-form'),
    searchInput: document.body.querySelector('.search-input'),
    submitButton: document.body.querySelector('.submit-button'),

    currentTemperature: document.body.querySelector('.current-temperature'),
    currentTime: document.body.querySelector('.current-time'),
    weatherIcon: document.body.querySelector('.weather-icon'),
    chosenLocation: document.body.querySelector('.chosen-location'),
    likeButton: document.body.querySelector('.like-button'),
    currentFeelsLike: document.body.querySelector('.current-feels-like'),
    sunrise: document.body.querySelector('.sunrise'),
    sunset: document.body.querySelector('.sunset'),
    featureWeatherElementsContainer: document.body.querySelector('.feature-weather-elements-container'),

    userCurrentLocationIcon: document.body.querySelector('.user-location-icon'),
    locationList: document.body.querySelector('.location-list'),

    findAllRemoveButtons: function () {
        return document.body.querySelectorAll('.removeButton');
    }
};
