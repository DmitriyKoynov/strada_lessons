const locationServerInfo = {
    url: `https://geocode-maps.yandex.ru/1.x/`,
    apiKey: 'bf121326-49a5-4e18-9287-5492dfb03425'
};

const ERRORS_MESSAGES = {
    NOT_SUPPORTED: 'Определение геолокации не поддерживается этим браузером'
};

export function getCurrentLocation() {
    return getCurrentCoordinates().then(coordinates => getLocation(coordinates));
}

function getCurrentCoordinates() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const coordinates = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    };
                    resolve(coordinates);
                },
                error => {
                    reject(error);
                }
            );
        } else {
            reject(new Error(ERRORS_MESSAGES.NOT_SUPPORTED));
        }
    });
}

function getLocation(coordinates) {
    const locationApiUrl = getLocationApiUrl(coordinates);
    return fetch(locationApiUrl)
        .then(response => response.json())
        .then(locationInfo => getLocationFromResponse(locationInfo));

    function getLocationFromResponse(locationInfo) {
        return locationInfo.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.Address.Components.find(
            component => component.kind === 'locality'
        ).name;
    }
}
function getLocationApiUrl(coordinates) {
    return `${locationServerInfo.url}?apikey=${locationServerInfo.apiKey}&geocode=${coordinates.longitude},${coordinates.latitude}&format=json`;
}
