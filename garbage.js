function showMovie(age) {
    if (!checkAge(20)) {
        return;
    }
    console.log("Вам показывается кино");
}

showMovie(21);
showMovie(12);
