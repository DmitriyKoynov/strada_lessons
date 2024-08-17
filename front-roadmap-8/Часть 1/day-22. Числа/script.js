// В JS встроен ОБЪЕКТ! Math, методы которого умеют возвращать результат всяких математических операций:
console.log(Math.random()); // Вернёт случайное чилос от 0 до 1
console.log(Math.min(1, 2, 0, 5)); // Вернёт минимальное число из указанных в скобках
console.log(Math.max(1, 2, 0, 5)); // Смотри выше)
console.log(Math.pow(2, 3)); // Возведёт 2 в степень 3

// Округление в меньшую сторону
console.log(Math.floor(2.3)); // 2
console.log(Math.floor(2.7)); // 2

// Округление в большую сторону
console.log(Math.ceil(2.3)); // 3
console.log(Math.ceil(2.7)); // 3

// Округление до ближайшего
console.log(Math.round(2.4)); // 2
console.log(Math.round(2.5)); // 3

// Отбросить дробную часть
console.log(Math.trunc(2.4)); // 2
console.log(Math.trunc(2.5)); // 3

// JavaScript не подходит до точных вычислений. Иногда, он округляет, иногда получает странные значения
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(9999999999999999); // 10000000000000000

// Метод toFixed вызывается на числах и округляет также как метод Math.round с указанием количества знаков после запятой.
// Обрати внимание, что он возвращает строку!
console.log((534.552).toFixed(1)); // '534.6'
console.log((534.552).toFixed(5)); // '534.55200'

// Если ты забыл самый простой способ преобразования в число — это '+'
console.log(+(534.552).toFixed(5)); // 534.552

// Функции isNaN и isFinite нужны для проверки значений.
// isNaN нужен прям сильно, потому что NaN строго не равен (===) даже самому себе console.log( NaN === NaN ); // false
console.log(isNaN(NaN)); // true
console.log(isNaN()); // true
console.log(isNaN('dasd')); // true
console.log(isNaN(+'32')); // false
console.log(isNaN('')); // false (потому что пустая строка интерпретируется как число 0)

// isFinite включает себя проверку !(isNaN) и еще проверяет, что значение !== +Infinity / -Infinity
console.log(isFinite('15')); // true
console.log(isFinite('str')); // false, потому что специальное значение: NaN
console.log(isFinite(Infinity)); // false, потому что специальное значение: Infinity

// Number.isNaN() и Number.isFinite() — более строигие проверки, чем isNaN и isFinite. Потому что они сперва проверят, является ли значение числом, а не будут пытаться его преобразовать (из строки в число, например)
console.log(Number.isNaN('str')); // false, так как "str" является строкой, а не числом
console.log(isNaN('str')); // true, так как isNaN сначала преобразует строку "str" в число и в результате преобразования получает NaN
console.log(Number.isFinite('123')); // false, так как "123" является строкой, а не числом
console.log(isFinite('123')); // true, так как isFinite сначала преобразует строку "123" в число 123

// Функции parseFloat и parseInt попытаются вернуть число из строки. А если у них не получилось — вернут число, которое распарсили до ошибки
// Если строка начинается не с числа, то вернутся NaN
console.log(+'100px'); // NaN
console.log(parseInt('100px')); // 100
console.log(parseFloat('1.2.3')); // 1.2
console.log(parseFloat('a1.2.3')); // NaN

// А еще в js есть укороченный формат записи для длинных чисел с помощью 'e'
console.log(2e2); // 200 — т.е. 'e' указывает на какое количество десяток умножить число до 'e'. Т.е. 2e2 === 2*10*10
console.log(1e2); // 100
console.log(0e2); // 0
console.log(72e-2); // 0.72 — т.е. 'e-' указывает на какое количество 0.1 умножить число до 'e'. Т.е. 72e2 === 72*0.1*0.1

// .toString используется, чтобы превратить что угодно в строку. Например, объект)
console.log((255 + 7).toString()); // '262'
