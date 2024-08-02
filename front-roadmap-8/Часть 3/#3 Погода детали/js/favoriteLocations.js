const ERRORS_MESSAGES = {
    limitReachedError: 'Мы можем хранить не больше 5 любимых локаций',
    pointAlreadyInFavoritesError: 'Это место уже находится в Избранных'
};

const MAX_FAVORITE_LOCATIONS = 5;

export function addToFavorites() {
    const newFavoriteLocation = uiElementsCollection.chosenLocation.textContent;
    const isFavoriteLocation = favoriteLocations.some(element => element === newFavoriteLocation);
    if (isFavoriteLocation) {
        const locationToRemoveIndex = favoriteLocations.findIndex(element => element === newFavoriteLocation);
        favoriteLocations.splice(locationToRemoveIndex, 1);
        updateFavoriteLocationsListFromArray();
        uiElementsCollection.likeButton.classList.remove('like-button--liked');
        return;
    }
    const hasReachedMaxFavorites = favoriteLocations.length >= MAX_FAVORITE_LOCATIONS;
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
