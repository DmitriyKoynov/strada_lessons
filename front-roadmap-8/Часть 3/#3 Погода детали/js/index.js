import { UI } from './UI.js';
import {
    setupInitialLocations,
    likeOrUnlikeLocation,
    showRemoveButtonOnRows,
    showFavoriteLocationInfo,
    removeFavoriteLocationByRemoveButton
} from './favoriteLocations.js';
import { convertTemperatureValue, getCurrentLocationInfo, getLocationInfoBySearch } from './getWeatherInfo.js';

UI.SUBMIT_BUTTON.addEventListener('click', getLocationInfoBySearch);
UI.SEARCH_FORM.addEventListener('submit', getLocationInfoBySearch);

UI.FAVORITE_LOCATIONS.addEventListener('mouseover', showRemoveButtonOnRows);
UI.FAVORITE_LOCATIONS.addEventListener('click', showFavoriteLocationInfo);
UI.FAVORITE_LOCATIONS.addEventListener('click', removeFavoriteLocationByRemoveButton);

UI.LIKE_BUTTON.addEventListener('click', likeOrUnlikeLocation);

UI.TEMPERATURE.addEventListener('click', convertTemperatureValue);

UI.USER_CURRENT_LOCATION_ICON.addEventListener('click', getCurrentLocationInfo);

setupInitialLocations();
getCurrentLocationInfo();
