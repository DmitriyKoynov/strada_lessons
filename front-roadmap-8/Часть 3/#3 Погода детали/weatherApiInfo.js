const WeatherServerInfo = {
    serverUrl: 'http://api.openweathermap.org/data/2.5/weather',
    apiKey: 'f660a2fb1e4bad108d6160b7f58c555f'
};

export function getWeatherApiUrl(location, system) {
    return `${WeatherServerInfo.serverUrl}?q=${location}&units=${system.units}&appid=${WeatherServerInfo.apiKey}&lang=ru`;
}

export function getIconUrl(iconCode) {
    return `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
}

export function getFutureWeatherJson(location, system) {
    return fetch(
        `https://api.openweathermap.org/data/2.5/forecast/?q=${location}&units=${system.units}&appid=${WeatherServerInfo.apiKey}&lang=ru`
    )
        .then(response => response.json())
        .then(json => json);
}
