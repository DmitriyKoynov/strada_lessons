const WeatherServerInfo = {
    serverUrl: 'http://api.openweathermap.org/data/2.5/weather',
    apiKey: 'f660a2fb1e4bad108d6160b7f58c555f'
};

export function getWeatherApiUrl(location) {
    return `${WeatherServerInfo.serverUrl}?q=${location}&units=metric&appid=${WeatherServerInfo.apiKey}&lang=ru`;
}

export function getIconUrl(iconCode) {
    return `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
}
