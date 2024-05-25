// Основная функция
function calc(operation, a = 0, b = 0) {
    switch (typeof operation) {
        case 'function': {
            if (!checkOperation(operation)) return 'Error. Неизвестная операция';
            if (!checkOperands(a, b)) return 'Error. Операнды не являются числами';
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

function checkOperation(operation) {
    return operation.name === 'add' || operation.name === 'multi' || operation.name === 'subtract';
}

function checkOperands(a, b) {
    return typeof a === 'number' && typeof b === 'number';
}

// Тесты
console.log(calc(add, 2, 3));
console.log(calc(multi, -2, 3));
console.log(calc(subtract, 2, 3));

console.log(calc(console.log(), 2, 3));
console.log(calc(checkOperands, 2, 3));
console.log(calc(add, '2', 3));
