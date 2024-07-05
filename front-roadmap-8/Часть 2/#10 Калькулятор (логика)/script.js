const equalsButton = document.body.querySelector('.equals-button');
const firstNumberInput = document.body.querySelector('.first-number-input');
const secondNumberInput = document.body.querySelector('.second-number-input');
const resultInput = document.body.querySelector('.result-input');
const operationSelect = document.body.querySelector('.operation-select');

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
    resultInput.value = calc(operations[operationSign], a, b);
    console.log(operationSign);
    console.log(a);
    console.log(b);
    console.log(calc(operations[operationSign], a, b));
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

// Вспомогательные функции
function add(a, b) {
    return a + b;
}
function multi(a, b) {
    return a * b;
}
function subtract(a, b) {
    return a - b;
}
function div(a, b) {
    return a / b;
}

function checkOperation(operation) {
    return (
        operation.name === 'add' ||
        operation.name === 'multi' ||
        operation.name === 'subtract' ||
        operation.name === 'div'
    );
}

function checkOperands(a, b) {
    return typeof a === 'number' && typeof b === 'number';
}
