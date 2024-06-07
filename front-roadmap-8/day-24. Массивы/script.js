// Массивы используются в js, чтобы хранить коллекции из данных. Любых данных, даже разнотипных
// Массивы можно создать 3 способами
let array = ['sdfs', 2, true]; // Квадратные скобки
array = Array.of('111', false, { fdg: 23 }, 63); // Метод .of() в объекте Array
array = new Array(1, 2, 3); // С помощью конструктора new Array()
console.log(array);

// array.length — свойство, которое возвращает количество элементов массива
array = [1, 2, 3];
console.log(array.length); // 3

// Для доступа к элементу массива используем квадратные скобки.
// Индекс начинается с [0], а заканчивается [array.length-1]
array = ['a', 'b', 'c'];
array[2] = 'f';
console.log(array[array.length - 1]); // 'f'

// Методы для удаления и добавления элементов массива:
// — array.pop() удалит последний элемент массива и вернёт удалённый элемент
// — array.shift() удалит первый элемент массива и вернёт удалённый элемент
// — array.push('a') добавит 'a' в конец массива и вернёт новую длину массива
// — array.unshift() добавит 'a' в начало массива и вернёт новую длину массива
array = ['a', 'b', 'c'];
array.pop(); // 'c'
array.shift(); // 'a'
console.log(array); // ['b']
array.push('d'); // 2
array.unshift('e'); // 3
console.log(array); // ['e', 'b', 'd']

// Метод array.slice(start, end) возвращает новый массив, вытащив из старого элементы от start до end (не включая end)
// При этом изначальный массив не меняется, как при методах выше
array = ['a', 'b', 'c', 'd'];
arraySliced = array.slice(1, 3);
console.log(array); // ['a', 'b', 'c', 'd']
console.log(arraySliced); // ['b', 'c']

// Метод array.splice(start, deleteCount, item1, item2,...,itemX) — позволяет, удалять, заменять и добавлять элементы массива
// Он также влияет на исходный массив.
// Удаление
let fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
console.log(fruits.splice(2, 1)); // ['Lemon'] — удаляем один элемент, начиная с индекса 2
console.log(fruits); // ['Banana', 'Orange', 'Apple', 'Mango']
console.log(fruits.splice(2)); // ['Apple', 'Mango']
console.log(fruits); // ['Banana', 'Orange'] — удалили все элементы, начиная со второго

// Добавление
let vegetables = ['Carrot', 'Tomato', 'Pepper'];
vegetables.splice(1, 0, 'Broccoli'); // Вставляем 'Broccoli' на позицию 1
console.log(vegetables); // ['Carrot', 'Broccoli', 'Tomato', 'Pepper']

// Замена
let spices = ['Cinnamon', 'Paprika', 'Turmeric'];
spices.splice(1, 1, 'Coriander'); // Заменяем 'Paprika' на 'Coriander'
console.log(spices); // ['Cinnamon', 'Coriander', 'Turmeric']

// Перебор элементов массива происходит с помощью for...of
fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
console.log('--------------');
for (const fruit of fruits) {
    console.log(fruit);
}

// Ваша задача:
// - Создать массив, в котором будут храниться задачи
// - Использовать методы массива чтобы добавлять и удалять задач
// - Используйте методы массива чтобы вывести все задачи
let tasks = ['task1', 'task2', 'task3', 'task4'];
tasks.pop();
tasks.push('task5');
tasks.shift();
tasks.unshift('task6');

let slicedTasks = tasks.slice(1, 3);
tasks.splice(1, 1, 'taskX');
console.log(tasks);
console.log(slicedTasks);
const showTasks = tasks => {
    console.log('-----------');
    for (const task of tasks) {
        console.log(task);
    }
};

showTasks(slicedTasks);
