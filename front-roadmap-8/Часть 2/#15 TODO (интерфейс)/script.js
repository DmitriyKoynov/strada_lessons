import { add, subtract, multi, div, checkOperands, checkOperation } from './operations.js';
const equalsButton = document.body.querySelector('.equals-button');
const firstNumberInput = document.body.querySelector('.first-number-input');
const secondNumberInput = document.body.querySelector('.second-number-input');
const resultInput = document.body.querySelector('.result-input');
const operationSelect = document.body.querySelector('.operation-select');
const previousResults = document.querySelector('.previous-results');
const clearButton = document.querySelector('.clear-button');

const operations = {
    '+': add,
    '-': subtract,
    '*': multi,
    '/': div
};

equalsButton.addEventListener('click', event => {
    let operationSign = operationSelect.value;
    let a = +firstNumberInput.value;
    let b = +secondNumberInput.value;
    let operationResult = calc(operations[operationSign], a, b);
    resultInput.value = operationResult;
    previousResults.insertAdjacentElement('afterbegin', createElement(operationResult));
});

previousResults.addEventListener('click', event => {
    if (event.target !== previousResults) {
        event.target.remove();
    }
});

clearButton.addEventListener('click', event => {
    previousResults.textContent = '';
});

// Основная функция
function calc(operation, a = 0, b = 0) {
    switch (typeof operation) {
        case 'function': {
            if (!checkOperation(operation)) return 'Error. Неизвестная операция';
            if (!checkOperands(a, b)) return 'Error. Операнды не являются числами';
            if (operation === div && b === 0) return 'Error. Нельзя делить на 0';
            return operation(a, b);
        }

        default:
            return 'Error. В качестве операции должна быть передана функция';
    }
}

function createElement(textContent) {
    let newElement = document.createElement('div');
    newElement.textContent = textContent;
    return newElement;
}
