import { UI } from './UI.js';
import { updateInfo, convertTemperatureValue, getCurrentLocationWeatherInfo } from './getWeatherInfo.js';
import { addToFavorites } from './favoriteLocations.js';

UI.SUBMIT_BUTTON.addEventListener('click', updateInfo);
UI.SEARCH_FORM.addEventListener('submit', updateInfo);
UI.LIKE_BUTTON.addEventListener('click', addToFavorites);
UI.TEMPERATURE.addEventListener('click', convertTemperatureValue);
UI.WEATHER_ICON.addEventListener('click', getCurrentLocationWeatherInfo);
