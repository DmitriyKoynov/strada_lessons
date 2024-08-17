// // Вот ведь, а... в HTML есть аттрибуты и свойства.
// // Аттрибуты задаются прямо в HTML разметке и предоставляют изначальные значения для элементов
// // Значения атрибутов доступны до того, как страница загружена и выполнен JavaScript.
// // Доступ к аттрибутам можно получить только через методы getAttribute() и setAttribute()
// <input type="text" value="Hello"></input>;

// // Свойства определены в DOM: Свойства являются частью объекта DOM, представляющего элемент.
// // Свойства содержат текущее значение элемента, которое может изменяться динамически. Они могут изменяться во время работы страницы, не затрагивая HTML-код.
// // Они представляют собой свойства объекта DOM
// // К свойства можно получить доступ напрямую через точечную (element.property) или скобочную нотацию (element['property']).

// const input = document.querySelector('input');
// console.log(input.value); // Чтение свойства
// input.value = 'World'; // Изменение свойства

// // Различия:
// // 1. Инициализация: Атрибуты задаются в HTML, свойства – в JavaScript.
// // 2. Изменяемость: Свойства могут динамически изменяться через JavaScript и обновляться в реальном времени.
// // 3. Предназначение: Атрибуты обычно содержат информацию, необходимую для начальной настройки элементов (например, начальные значения). Свойства представляют текущее состояние элементов, которое может изменяться в процессе выполнения скриптов.
// // 4. После загрузки страницы изменения атрибутов не обязательно отражаются на свойствах, и наоборот.
// // 5. Атрибуты всегда представляют собой строки. Свойства могут быть разных типов: строки, числа, объекты, функции и т.д.

// <input id="myInput" type="text" value="Hello"></input>;
// const input = document.getElementById('myInput');
// console.log(input.getAttribute('value')); // Выводит "Hello"

// input.value = 'New value';
// console.log(input.value); // Выводит "New value"
// console.log(input.getAttribute('value')); // Все еще выводит "Hello"

// // Еще один пример
// <input id="example" type="text" value="initial value"></input>;
// //////////////////////////////////////////////////////////////
// const input = document.getElementById('example');

// // Получение атрибута
// console.log(input.getAttribute('value')); // "initial value"

// // Получение свойства
// console.log(input.value); // "initial value"

// // Изменение свойства
// input.value = 'new value';

// // Проверка изменения свойства
// console.log(input.value); // "new value"

// // Проверка изменения атрибута
// console.log(input.getAttribute('value')); // "initial value"

// // Изменение атрибута
// input.setAttribute('value', 'another value');

// // Проверка изменения атрибута
// console.log(input.getAttribute('value')); // "another value"

// // Проверка изменения свойства
// console.log(input.value); // "new value"

// Ваша задача:
// Напишите функцию, которая
// Изменяет фон страницы на заданный цвет по клику на кнопку "Изменить фон"
// Должна получать цвет из атрибута data-color кнопки
// Присваивать его в качестве свойства background-color элементу body на странице.
const button = document.getElementById('change-bg');
const newColor = button.getAttribute('data-color');
button.addEventListener('click', () => {
    document.body.style['background-color'] = '#000000';
    // Функция getComputedStyle(element) вернёт объект, содержащий все css-свойства element. Обратиться к ним можно как к свойству любого объекта
    console.log(getComputedStyle(button).border);
});

// Создать функцию, которая будет менять цвет фона страницы каждые 2 секунды на случайный цвет из заранее определенного списка
const setRandomBackground = () => {
    const colors = ['red', 'blue', 'green', 'orange'];
    const body = document.body;
    setInterval(() => {
        body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    }, 2000);
};

setRandomBackground();

// className — свойство, которое возвращает или задает классы элементу. Оно возвращает все классы в виде единой строки, где имена классов разделены пробелом. Ну а если присваиваем, то перезаписываем все классы
const control = document.body.querySelector('.control');
let classNameArray = control.className.split(' ');
console.log(classNameArray[0]);

// classList — это свойство-объект, которое позволяет удобно работать с классами с помощью разных методов.
// Например add, remove, toggle и contains. Передавать нужно строку) Дальше вроде итак понятно
console.log(control.classList.contains('control')); // true
console.log(control.classList.remove('control')); // undefined
console.log(control.classList.contains('control')); // false
