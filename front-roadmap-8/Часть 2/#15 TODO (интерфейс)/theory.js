// Для управления DOM-узлами есть кучка всяких методов:
// Создание элемента
const newDiv = document.createElement('div');
newDiv.textContent = 'Ябба дибби ду!';
newDiv.style.color = 'red';
// parent.appendChild(newElement) вставит дочерний элемент в конец родителя
// если newElement уже куда-то вставлен, то новый элемент заменит его на том месте, которое мы указали в appendChild
document.body.querySelector('.content').appendChild(newDiv);
document.body.querySelector('.content').appendChild(document.createElement('div')).textContent = 'adas';
document.body.querySelector('.content').appendChild(document.createElement('div')).textContent = 'adfgdfgdas';
document.body.querySelector('.calculator-controls').appendChild(newDiv); // Перенесёт элемент в новое место

// Метод insertBefore добавляет элемент перед указанным элементом
const newDiv2 = document.createElement('div');
newDiv2.textContent = 'Вставить элемент перед целевым';
const calculatorControlsDiv = document.body.querySelector('.calculator-controls');
calculatorControlsDiv.insertBefore(newDiv2, document.body.querySelector('.second-number-input')); // Если не указать целевой элемент, то вставка произойдёт в самый конец родительского

// Метод replaceChild заменяет указанный элемент другим элементом
const replaceChildDiv = document.createElement('div');
replaceChildDiv.textContent = 'Заменяющий div';
calculatorControlsDiv.replaceChild(replaceChildDiv, newDiv2);

// Методы
// - insertAdjacentHTML,
// - insertAdjacentText,
// - insertAdjacentElement;
// позволяют вставлять HTML, текст и элементы перед, после, в начало и в конец элемента. В первом аргументе нужно указать позицию вставки, во втором - содержимое.

// position может принимать одно из четырех значений:
// 'beforebegin': перед элементом-родителем.
// 'afterbegin': в самом начале элемента-родителя (перед первым дочерним элементом).
// 'beforeend': в самом конце элемента-родителя (после последнего дочернего элемента).
// 'afterend': после элемента-родителя.

const newDiv3 = document.createElement('div');
newDiv3.textContent = 'Элемент для insertAdjacent';
calculatorControlsDiv.insertAdjacentText('afterbegin', 'ssdfhsdfgshd');
calculatorControlsDiv.insertAdjacentElement('beforeend', newDiv3);

// Удалять ухлы можно из родителя или просто так
const parent = document.querySelector('#parent');
const child = document.querySelector('#child');
parent.removeChild(child);

const element = document.querySelector('#element');
element.remove();

// Узлы можно клонировать
// Метод cloneNode создает копию элемента, включая его атрибуты, дочерние элементы и текстовые узлы. По умолчанию создается поверхностная копия элемента, то есть копируются только атрибуты и структура элемента, но не его содержимое. Метод принимает один булевый аргумент, который указывает, нужно ли клонировать все дочерние элементы.
const originalElement = document.querySelector('#originalElement');
const newElement = originalElement.cloneNode(true); // скопируем всех детей
