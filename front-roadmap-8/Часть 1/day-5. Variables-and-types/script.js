// Тут объявлены переменные

// ИМЕНА ПЕРЕМЕННЫХ
// Не могут начинаться с цифр
// Должны содержать только буквы, цифры, '_' и '$'

// Создаем с помощью CamelCase (userName)
// Без уточнения типа данных (userName, а не userNameString)
// Соблюдаем регистр (user и USER — это разные переменные)

// Должно быть читаемым (не uname, а userName)
// Отражать суть, но без подробностей (не namePlusSurName, а fullName)
// Быть недвусмысленным (не summ, а itemsCount)

// Не называем переменные:
// Случайными символами (123, abc, gege23e2)
// Очевидными словами (name, variable)
// В других стилях (kebab-case, snake_case)
// Не латиницей (имяПользователя)

let userName = 'Dmitriy';
let username = 'Oleg';
let userAge = 30 + 1;
let undfnd;
let nll = null;

console.log(`${userName} и ${username} пошли играть в прятки`);

// Тестируем вывод. Интересно, что сложение двух значений будет расценено, как отдельные символы '1+8', а не сумма.
// Эту штуку лечат скобки (2+3). А вот деление сработает адекватно и без скобок 3/2 (еще и дробью будет)
console.log(
    userName +
        ' уже ' +
        userAge +
        ' год ' +
        (2 + 3) +
        ' дней ' +
        1 +
        8 +
        ' минут и ' +
        3 / 2 +
        ' секунд живёт на этой планете'
);

// Еще немного тестируем вывод. Тут неожиданностью стало null + число.
// А также, что все значения переменных превращаются в строку, если к ним прибавить строку (даже undefined)
// Причем, если записано 1+1+'3'+4, то получится '234'. Т.е. мы сперва сложим числа, а при прибавлении строки превратим все данные в строку и дальше будем работать со строчной переменной
console.log('----------------------------');
console.log(5 - 'a');
console.log(0 - 'a');
console.log('0' - 'a');
console.log(0 + 'a');
console.log(+Infinity - 'a');
console.log(+Infinity + 'a');
console.log(+Infinity + 3);
console.log(NaN + 3);

console.log('----------------------------');
console.log(undfnd + 3);
console.log(undfnd + '3');
console.log(undfnd);

console.log('----------------------------');
console.log(nll + 3);
console.log(nll + '3');
console.log(nll);
console.log(3 / 0);

console.log('----------------------------');
console.log(`2 + 2 = ${2 + 2}`);
console.log(`5+7` + '5');
// Не знал про обратные скобки. Они как обычные, но знак доллара и фигурные скобки творят чудеса
console.log(`${userAge} + $ + {}` + '5');
userName = 8;
console.log(userName + 1);

// КОНСТАНТЫ
// Задаем, когда есть строго определенное значение, которое никогда не должно меняться
// Это может быть, например, кодировка цвета

const my_birthday = '04.11.1992';
const COLOR_MAIN = '#F00';
console.log(COLOR_MAIN);

// Именуем константы с большой буквы, если их значения известны до выполнения программы.
// Именуем константы с маленькой, если определим их значения в процессе.

console.log(Number(0.1) + Number(0.2));
console.log('b' + 'a' + +'a' + 'a');
console.log(typeof typeof 123);
console.log([] + false - null + true);
console.log(+[] + false - null + true);

console.log('baNaNa'.toLowerCase);
