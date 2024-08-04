const WeatherServerInfo = {
    serverUrl: 'http://api.openweathermap.org/data/2.5',
    apiKey: 'f660a2fb1e4bad108d6160b7f58c555f'
};

export const REQUEST_TYPE = {
    WEATHER: 'weather',
    FORECAST: 'forecast'
};

export function getWeatherInfo(location, temperatureSystem, requestType) {
    const weatherApiUrl = `${WeatherServerInfo.serverUrl}/${requestType}?q=${location}&units=${temperatureSystem.units}&appid=${WeatherServerInfo.apiKey}&lang=ru`;
    return fetch(weatherApiUrl).then(response => response.json());
}

export function getIconUrl(iconCode) {
    return `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
}
