export const UI = {
    form: document.body.querySelector('.form'),
    inputDate: document.body.querySelector('#date'),
    timeRemainingField: document.body.querySelector('.time-remaining_value'),
};
export function setTimeValue(value) {
    UI.timeRemainingField.textContent = value;
}
export function getDateValueFromForm() {
    const dateFromInput = new Date(UI.inputDate.value.split('-'));
    return new Date(dateFromInput);
}
