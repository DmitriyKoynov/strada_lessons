// array.foreach(function()) — пройдет по всем элементам массива. Каждый раз в function будут передаваться 3 аргумента:
// - element
// - elementIndex
// - array

// Мы можем использовать каждый из них, а можем только element или element и elementIndex.
// В array.foreach можно передать просто функцию, стрелочную функцию или анонимную функцию (function declaration)
let numbers = [1, 2, 3, 4];
numbers.forEach(console.log); // В данном случае мы передадим в console.log все три параметра. Заметьте, что скобки не ставятся. Нам надо передать именно имя функции/метода, а не результат её выполнения (только если результатом не является функция)

const someFunc = () => {
    return console.log;
};
numbers.forEach(someFunc);

// Передаем стрелочную функцию
numbers.forEach((number, index) => {
    console.log(number);
    console.log(index);
});

// Передаём function declaration
numbers = [1, 2, 3, 4];
numbers.forEach(function (element, index, array) {
    console.log('element' + element);
    console.log('index' + index);
    console.log('array' + array);
});

// В метод find также можно передать имя функции, стрелочную функцию или function declaration (анонимную функцию)
// Метод find будет передавать в качестве аргумента для функции последовательно каждый элемент массива (как forEach).
// При этом он остановится как только функция вернёт ему true. После этого метод вернёт элемент массива.
numbers = [1, 2, 3, 4];
console.log(numbers.find(number => number >= 3)); // 3

// Если мы перебрали весь массив и не получили return true, то метод find Вернёт undefined
numbers = [1, 2, 3, 4];
console.log(numbers.find(number => number > 4)); // undefined

// Метод array.findIndex(function) — работает также как и find, но в случае успеха вернёт индекс элемента
numbers = [1, 2, 3, -4];
console.log(numbers.find(number => number < 0)); // -4
console.log(numbers.findIndex(number => number < 0)); // 3

// Метод array.indexOf(element, startPosition) — будет искать конкретный элемент в массиве и вернёт его индекс
// В случае неуспеха вернёт -1
numbers = [1, 2, 3, -4, 3];
console.log(numbers.indexOf(3)); // 2
console.log(numbers.indexOf(3, 3)); // 4
console.log(numbers.indexOf(5)); // -1

// Метод array.includes(element, startPosition) — тоже ищет элемент в массиве и возвращает true или false в зависимости от результата
numbers = [1, 2, 3, -4, 3];
console.log(numbers.includes(-4)); // true
console.log(numbers.includes(-3)); // false

// Задача
// дан массив строк ['cat', 'dog', 'elephant', 'tiger', 'lion'].
// найдите первое слово длиной больше 7 символов и выведите его в консоль
let array = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
console.log(array.find(animal => animal.length > 7));

// Метод array.filter(function) — возвращает массив с элементами, при которых function вернёт true
numbers = [1, -2, 3, -4, 3];
console.log(numbers.filter(number => number < 0)); // [-2, -4]

// Задача. Получить массив пользователей старше 18 лет из массива users
const users = [
    { name: 'Ivan', age: 18 },
    { name: 'Petr', age: 25 },
    { name: 'Anna', age: 20 }
];
console.log(users.filter(user => user.age > 18)); // [ { name: 'Petr', age: 25 }, { name: 'Anna', age: 20 } ]

// Метод array.map(function) вернёт новый массив элементов из тех элементов, которые ему вернёт function
// Типа, если сделать animals.map(animal => 1), то мы просто получим новый массив по длине старого состоящий только из 1
const animals = ['cat', 'dog', 'elephant', 'tiger', 'lion'];
const upperCaseAnimals = animals.map(word => word.toUpperCase());
console.log(upperCaseAnimals); // ['CAT', 'DOG', 'ELEPHANT', 'TIGER', 'LION']

// Задача
// Дан массив чисел [1, 11, -2, 3, -10, 4].
// Создайте новый массив из абсолютных значений элементов и выведите его в консоль.
numbers = [1, 11, -2, 3, -10, 4];
console.log(numbers.map(Math.abs));

// Метод array.sort() сортирует исходный массив. Если в качестве аргумента ничего не передавать, то он будет сортировать элементы так, как если бы они были строками. Т.е. число 10 будет стоять раньше числа 2, потому что 1<2
numbers = [1, 11, -2, 3, -10, 4];
console.log(numbers.sort()); // [-10, -2, 1, 11, 3, 4]

// Для сортировки чисел в качестве аргумента нужно передавать функцию array.sort(function), которая принимает 2 аргумента и возвращает
// - положительное число, если первый аргумент должен идти раньше
// - ноль, если порядок аргументов не важен
// - отрицательное число, если второй аргумент должен идти раньше
// Для сортировки чисел обычно используется функция a-b
numbers = [1, 11, -2, 3, -10, 4];
console.log(numbers.sort((a, b) => a - b)); //[-10, -2, 1, 3, 4, 11]

// Метод array1.concat(array2) принимает в качестве аргумента второй массив и возвращает новый массив, состоящий из элементов array1 и array2
// Сами исходные массивы не меняются
numbers = [1, 11, -2, 3, -10, 4];
let letters = ['a', 'b', 'c', 'd'];
console.log(numbers.concat(letters)); //[1, 11, -2, 3, -10, 4, 'a', 'b', 'c', 'd'];

// Метод string.split('divider') — разбивает строку на элементы массива, используя для разбивки divider
// Метод array.join('divider') — наоборот, соединяет элементы массива в строку. Между элементами воткнёт divider
const string = 'Ворубушки,песенки,0,кек';
numbers = [1, 11, -2, 3, -10, 4];
console.log(string.split(',')); // ['Ворубушки', 'песенки', '0', 'кек']
console.log(numbers.join(', ')); // '1, 11, -2, 3, -10, 4'

// Метод array.reverse() изменяет сам массив, разворачивая его
numbers = [1, 11, -2, 3, -10, 4];
console.log(numbers.reverse()); // [4, -10, 3, -2, 11, 1]
console.log(numbers); // [4, -10, 3, -2, 11, 1]

// Метод Array.isArray(something) — проверяет, является ли something массивов и возвращает true/false
numbers = [1, 11, -2, 3, -10, 4];
let someString = 'Ворубушки,песенки,0,кек';
console.log(Array.isArray(numbers)); // true
console.log(Array.isArray(someString)); // false
