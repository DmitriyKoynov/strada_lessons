import DateFns from 'date-fns';

const UI = {
    form: document.body.querySelector('.form'),
    inputDate: document.body.querySelector('#date'),
    timeRemainingField: document.body.querySelector('.time-remaining_value'),
};

UI.form.addEventListener('submit', calculateDifference);

function calculateDifference(event) {
    event.preventDefault();
    const date = getDateValueFromForm();
    const difference = calculateDifferenceBetweenDateAndNow(date);
    setTimeValue(difference);
}

function getDateValueFromForm() {
    const dateFromInput = new Date(UI.inputDate.value.split('-'));
    return new Date(dateFromInput);
}

function calculateDifferenceBetweenDateAndNow(date) {
    const interval = DateFns.intervalToDuration({
        start: new Date(),
        end: date,
    });
    return createDifferenceString(interval);
}

function setTimeValue(value) {
    UI.timeRemainingField.textContent = value;
}

function createDifferenceString(interval) {
    return (
        formatValue(interval.years, ['год', 'года', 'лет']) +
        formatValue(interval.months, ['месяц', 'месяца', 'месяцев']) +
        formatValue(interval.days, ['день', 'дня', 'дней']) +
        formatValue(interval.hours, ['час', 'часа', 'часов']) +
        formatValue(interval.minutes, ['минута', 'минуты', 'минут'])
    );
}

function formatValue(number, words_arr) {
    if (number === 0 || !number) return '';
    number = Math.abs(number);
    if (Number.isInteger(number)) {
        const options = [2, 0, 1, 1, 1, 2];
        return (
            number +
            ' ' +
            words_arr[number % 100 > 4 && number % 100 < 20 ? 2 : options[number % 10 < 5 ? number % 10 : 5]] +
            ' '
        );
    }
    return number + words_arr[1];
}
