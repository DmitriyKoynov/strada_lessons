export const localStorageManager = {
    getFavoritesData: function () {
        const storedData = localStorage.getItem('favoritesData');
        if (!storedData) return [];
        return JSON.parse(storedData);
    },

    setFavoritesData: function (favoritesData) {
        const dataToStore = JSON.stringify(favoritesData);
        localStorage.setItem('favoritesData', dataToStore);
    }
};
