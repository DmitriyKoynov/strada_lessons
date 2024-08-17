// С помощью форм мы собираем информацию от пользователя
// Данные можно провалидиировать, обработать или отправить на сервер
/*
<form class="form">
  <label for="task">Новая задача:</label>
  <input type="text" id="task" name="task" required>
  <button type="submit">Добавить</button>
</form>
*/

// Если находясь в поле формы нажать Enter или нажать кнопку «Добавить» — произойдет событие 'submit'.
// Мы можем сделать обработчик для этого события
const form = document.querySelector('.form');
form.addEventListener('submit', function (event) {});

// Если в JS нет обработчика для события submit от этой формы - браузер попробует отправить данные на сервер, а так как атрибут action и метод отправки данных на сервер в атрибуте method у формы отсутствуют, то она отправит запрос к тому серверу с которого открыта страница file:///Users/tema/Desktop/test.html?task=123

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Вот так мы останавливаем отправку формы на сервер
});

// Если мы просто хотим отправить форму, то можно использовать метод formElement.submit()
// Этот метод не вызывает событие 'submit'
