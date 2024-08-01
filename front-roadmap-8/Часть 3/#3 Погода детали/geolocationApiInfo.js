const locationServerInfo = {
    url: `https://geocode-maps.yandex.ru/1.x/`,
    apiKey: 'bf121326-49a5-4e18-9287-5492dfb03425'
};

export function getCurrentLocation() {
    return getCurrentCoordinates().then(coordinates => showPosition(coordinates));
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
            reject(new Error('Geolocation is not supported by this browser.'));
        }
    });
}

function showPosition(coordinates) {
    const apiRequestUrl = `${locationServerInfo.url}?apikey=${locationServerInfo.apiKey}&geocode=${coordinates.longitude},${coordinates.latitude}&format=json`;
    return fetch(apiRequestUrl)
        .then(response => response.json())
        .then(locationInfo => {
            const locality =
                locationInfo.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.Address.Components.find(
                    component => component.kind === 'locality'
                );
            console.log(locality.name);
            return locality.name;
        });
}
