const WeatherServerInfo = {
    serverUrl: 'http://api.openweathermap.org/data/2.5',
    apiKey: 'f660a2fb1e4bad108d6160b7f58c555f'
};

export const REQUEST_TYPE = {
    WEATHER: 'weather',
    FORECAST: 'forecast'
};

export function getWeatherInfo(location, temperatureSystem, requestType) {
    const weatherApiUrl = getWeatherApiUrl(requestType, location, temperatureSystem);
    return fetch(weatherApiUrl).then(response => response.json());
}

function getWeatherApiUrl(requestType, location, temperatureSystem) {
    return `${WeatherServerInfo.serverUrl}/${requestType}?q=${location}&units=${temperatureSystem.units}&appid=${WeatherServerInfo.apiKey}&lang=ru`;
}

export function getIconUrl(iconCode) {
    return `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
}
