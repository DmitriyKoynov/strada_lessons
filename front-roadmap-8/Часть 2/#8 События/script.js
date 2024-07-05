// Чтобы взаимодействовать с кнопкой, нам нужно навесить на неё слушатель событий.
// Слушатель событий — это метод элемента DOM, который мы можем получить по getElementById, например.
const button = document.getElementById('form-button');
function showAlert() {
    alert('Вы нажали кнопку!');
}
// После этого мы используем метод addEventListener и указываем событие и имя функции (не результат!)
button.addEventListener('click', showAlert);

// При работе addEventListener он пытается передать в функцию событие, целевой элемент и координаты мыши.
// Это можно использовать! Например, отменить действие по умолчанию и вывести текст, который содержится в контроле
const myLink = document.getElementById('myLink');
function linkClickHandler(event) {
    // Отменяем действие по умолчанию
    event.preventDefault();
    // Передаем текст внутри контрола
    alert('Вы нажали на ' + event.target.innerText);
}
myLink.addEventListener('click', linkClickHandler);

// События могут «всплывать» — это процесс, при котором событие, происходящее на элементе, "всплывает" или распространяется от этого элемента к его родительским элементам по иерархии DOM. Например, если у вас есть кнопка внутри div, и вы установите обработчики событий для обеих этих элементов, то сначала сработает обработчик кнопки, а затем обработчик div, даже если событие произошло непосредственно на кнопке. Это поведение называется всплытием событий.
let outerDiv = document.getElementById('outerDiv');
let innerDiv = document.getElementById('innerDiv');
let innerButton = document.getElementById('innerButton');

function outerDivHandler(event) {
    alert('Outer Div handler!');
    event.stopPropagation();
}
function innerDivHandler(event) {
    alert('Inner Div handler!');
    event.stopPropagation();
}
function buttonHandler(event) {
    alert('Button handler!');
    event.stopPropagation();
}

outerDiv.addEventListener('click', outerDivHandler);
innerDiv.addEventListener('click', innerDivHandler);
innerButton.addEventListener('click', buttonHandler);

// Делегирование событий
// Это техника, которая позволяет навешать обработчик событий на родительский элемент и этот обработчик будет реагировать на события в дочерних элементах. Например, мы можем слушать клики на определенные пункты списка:

// Находим список
const myList = document.getElementById('myList');
// Делаем функцию, которая обрабатывает события по клику и выводит название target
function listItemHandler(event) {
    alert(`Вы выбрали элемент ${event.target.innerText}`);
}
// Навешиваем обработчик не на каждый элемент списка, а на весь список. При этом он будет выдавать текст из конкретных пунктов, если мы кликнули на них. А если попали в «родителя», то отобразит весь список.
myList.addEventListener('click', listItemHandler);

// По старообрядческим понятиям (легаси) обработчики событий могли навешивать прямо в html
// <input type="button" onclick="countRoadmaps()" value="Считать марафоны!"></input>
{
    /* <script>
  function countRoadmaps() {
    for(let i=1; i<=5; i++) {
      alert("Роадмап номер " + i);
    }
  }
</script> */
}

// Можно навешивать легаси обработчки и чисто в js.
// Проблема лишь в том, что onclick — это свойство myList и оно может быть только одно. Мы не можем записать несколько событий (только внутрь функции). А addEventListener позволяет нам это сделать
myList.onclick = event => {
    alert(`Вы Выбрали элемент ${event.target.innerText}`);
};

// Ваша задача
// На странице есть две кнопки “Старт/Пауза” и “Стоп”.
// При нажатии на кнопку “Старт/Пауза” необходимо запускать “секундомер” и каждую секунду выводить в консоль прошедшее время (в секундах).
// Также, необходимо предусмотреть возможность паузы/возобновления при нажатии на кнопку “Старт/Пауза” еще раз.
// Нажатие на кнопку “Стоп” обнуляет и полностью останавливает секундомер.
// Для решения этой задачи вам понадобится использовать функции setInterval и clearInterval - их вы уже знаете
const startPauseButton = document.getElementById('start-pauseButton');
const stopButton = document.getElementById('stopButton');
const timerShower = document.getElementById('timerShower');
const timerField = document.getElementById('timerShower');
startPauseButton.addEventListener('click', startPauseTimer);
stopButton.addEventListener('click', stopTimer);

let timerId = null;
let count = 0.0;

function startPauseTimer() {
    if (timerId) {
        pauseTimer();
    } else {
        timerId = startTimer();
    }
}

function pauseTimer() {
    clearInterval(timerId);
    timerId = null;
}

function stopTimer() {
    pauseTimer();
    count = 0.0;
    // console.log(count);
    timerField.innerText = count;
}

function startTimer() {
    return setInterval(() => {
        // console.log(count);
        timerField.innerText = count;
        count = Math.round((count + 0.1) * 10) / 10;
    }, 100);
}
