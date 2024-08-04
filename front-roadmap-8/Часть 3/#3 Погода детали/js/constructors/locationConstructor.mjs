import { TEMPERATURE_MEASUREMENT_SYSTEMS } from '../temperatureSystems.mjs';

function Location(
    weather = {},
    forecast = [],
    temperatureSystem = TEMPERATURE_MEASUREMENT_SYSTEMS.metric,
    isFavorite = false
) {
    this.weather = weather;
    this.setWeather = function (weather) {
        this.weather = weather ? weather : {};
    };

    this.forecast = forecast;
    this.setForecast = function (forecast) {
        this.forecast = forecast ? forecast : [];
    };

    this.temperatureSystem = temperatureSystem;
    this.setTemperatureSystem = function (temperatureSystem) {
        if (!Object.values(TEMPERATURE_MEASUREMENT_SYSTEMS).includes(temperatureSystem)) {
            console.error('Указана неверная температурная система');
            return;
        }
        this.temperatureSystem = temperatureSystem;
    };

    this.isFavorite = isFavorite;
    this.makeFavorite = function () {
        this.isFavorite = true;
    };
    this.makeUnfavorite = function () {
        this.isFavorite = false;
    };
}

const location = new Location();
console.log(location.temperatureSystem);

location.setTemperatureSystem('asd');
console.log(location.temperatureSystem);
