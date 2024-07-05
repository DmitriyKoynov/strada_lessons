// Скрипты подключаются перед закрывающим тегом </body> с помощью
// <script src="сюда вставляем адрес скрипта" type="text/javascript"></script>
// Вот это событие позволяет нам запускать код внутри него только после прогрузки всей страницы
document.addEventListener('DOMContentLoaded', function () {
    document.body.style.background = '#f6f6f6';
    // let a = prompt('Введите своё очко!');
    // alert(a);
});

// С помощью for..of можно обратиться ко всем дочерним узлам body первого уровня
// Если делать это с помощью for..in то мы зацепим всякие доп. свойства
for (const node of document.body.childNodes) {
    console.log(node);
}

// Создадим массив из таких узлов
let nodesArray = Array.from(document.body.childNodes);
console.log(nodesArray);
nodesArray.forEach(element => console.log(element));

let documentBody = document.body;
documentBody.firstElementChild.firstElementChild.style.color = 'red'; // Перешли в body → container → h1

// Через работу с массивом childNodes мы можем обратиться к конкретному элементу
// Помним, что при таком обращении (через child) мы получаем доступ только на чтение. Чтобы что-то поменять, нам нужно обрат
// Но, если нам захочется поменять, например, текст, то мы можем обратиться к свойству textContent
documentBody.firstElementChild.childNodes[5].lastElementChild.style.color = 'Green';
documentBody.firstElementChild.childNodes[5].lastElementChild.textContent = 'Новый текст для последнего абзаца';

// Самое кайфовое — поиск по id. Это специальный метод объекта document
let elementWithId = document.getElementById('mainParagraph');
elementWithId.style.color = 'Blue';

// querySelectorAll — метод, который поможет выбрать все элементы как в CSS
// Он всегда возвращает массив!
let elementsByQS = document.querySelectorAll('.body-text');
console.log(elementsByQS); // вернёт массив элементов
elementsByQS.forEach(element => {
    element.style.background = '#aaaaaa';
});

// querySelector — а этот метод вернёт первый? элемент
let elementByQSId = document.querySelector('#mainParagraph');
elementByQSId.style['text-decoration'] = 'underline';
