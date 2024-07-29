import { uiElementsCollection } from './uiElementsCollection.js';
import { getWeatherApiUrl, getIconUrl } from './weatherApiInfo.js';

uiElementsCollection.submitButton.addEventListener('click', updateWeatherInfo);
uiElementsCollection.searchForm.addEventListener('submit', updateWeatherInfo);
uiElementsCollection.likeButton.addEventListener('click', addToFavorites);

function updateWeatherInfo(event) {
    event.preventDefault();
    const location = getLocationValue();
    getWeatherInfo(location);
}

function getLocationValue() {
    return uiElementsCollection.searchInput.value;
}

function getWeatherInfo(location) {
    const weatherApiUrl = getWeatherApiUrl(location);
    fetch(weatherApiUrl)
        .then(response => response.json())
        .then(weatherInfo => {
            checkJsonResponseCode(weatherInfo);
            console.log(weatherInfo);
            uiElementsCollection.chosenLocation.textContent = weatherInfo.name;
            uiElementsCollection.temperature.textContent = Math.round(weatherInfo.main.temp) + '°';
            uiElementsCollection.weatherIcon.src = `./icons/weatherIcons/${weatherInfo.weather[0].icon}.svg`;
        })
        .catch(error => console.error(error.message));
}

function checkJsonResponseCode(responseJson) {
    if (responseJson.cod[0] === '4') {
        alert(responseJson.message);
        throw new Error(responseJson.message);
    }
}

let favoriteLocations = ['Екатеринбург', 'Москва', 'Челябинск', 'Бостон'];
updateFavoriteLocationsListFromArray();

function addToFavorites() {
    if (favoriteLocations.length >= 5) {
        alert('Мы можем хранить не больше 5 любимых локаций');
        return;
    }
    const newFavoriteLocation = uiElementsCollection.chosenLocation.textContent;
    favoriteLocations.push(newFavoriteLocation);
    updateFavoriteLocationsListFromArray();
}

function removeFromFavorites(event) {
    const elementNameToRemove = event.target.previousSibling.textContent;
    event.target.removeEventListener('click', removeFromFavorites);
    const locationToRemoveIndex = favoriteLocations.findIndex(element => element === elementNameToRemove);
    favoriteLocations.splice(locationToRemoveIndex, 1);
    updateFavoriteLocationsListFromArray();
}

function clearFavoriteLocationsList() {
    uiElementsCollection.locationList.textContent = '';
    const removeButtons = document.body.querySelectorAll('.removeButton');
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
        removeButton.classList.add('removeButton');
        removeButton.type = 'button';

        p.textContent = element;
        removeButton.textContent = 'Удалить';

        removeButton.addEventListener('click', removeFromFavorites);
        p.addEventListener('click', () => getWeatherInfo(p.textContent));

        li.appendChild(p);
        li.appendChild(removeButton);
        uiElementsCollection.locationList.appendChild(li);
    });
}
