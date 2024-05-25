// Switch даёт возможность сделать выполнение кода по условиям соответствия более наглядным.
// Внутри switch запрятано строгое сравнение ('==='), поэтому тут будет проверка типов.

// А еще в switch в js очень важно не забывать ставить 'break' в каждом кейсе. Цитатка из нейросетки:
// В JavaScript оператор switch работает таким образом, что когда он находит совпадение (match) в одном из case, он начинает выполнять все последующие инструкции до конца блока switch, не останавливаясь на других case. Это поведение называется "fall-through" (прохождение сквозь).

//Например, следующий код выведет 'a===5' и a===6. Потом наткнется на 'break;' в 'case 6:' и выйдет из switch.
let a = 5;
switch (a) {
    case 4:
        console.log('a===4');
    case 5:
        console.log('a===5');
    case 6:
        console.log('a===6');
        break;
    case 7:
        console.log('a===7');
}

// ЗАДАНИЕ
// - Перевести калькулятор на switch-case.

function add(a, b) {
    return a + b;
}
function multi(a, b) {
    return a * b;
}
function subtract(a, b) {
    return a - b;
}

// Калькулятор на if:
let result;
function ifCalc(operation = 'add', a = 0, b = 0) {
    if (operation == 'add') return add(a, b);
    if (operation == 'multi') return multi(a, b);
    if (operation == 'subtract') return subtract(a, b);
}
result = ifCalc('add', 2, 5);
console.log(result);

// Калькулятор на switch-case:
function switchCalc(operation = 'add', a = 0, b = 0) {
    switch (operation) {
        case 'add':
            return add(a, b);
        case 'multi':
            return multi(a, b);
        case 'subtract':
            return subtract(a, b);
    }
}
result = switchCalc('subtract', 6, 8);
console.log(result);
