function FavoriteLocationsList(locations = []) {
    this.locations = locations;
    this.add = function (location) {
        this.locations.push(location);
        console.log(ERRORS_MESSAGES.addSuccess(location));
    };
    this.remove = function (location) {
        const locationToRemoveIndex = this.locations.findIndex(element => element === location);
        this.locations.splice(locationToRemoveIndex, 1);
        console.log(ERRORS_MESSAGES.removeSuccess(location));
    };
    this.clear = function () {
        this.locations = [];
    };
}

const ERRORS_MESSAGES = {
    addSuccess: location => `Локация '${location}' добавлена в список избранных`,
    removeSuccess: location => `Локация '${location}' удалена из списка избранных`
};
