const highPriorityTasksWrapper = document.querySelector('.high-priority-tasks');
const lowPriorityTasksWrapper = document.querySelector('.low-priority-tasks');

const highPriorityTasksForm = highPriorityTasksWrapper.querySelector('.tasks-form');
const lowPriorityTasksForm = lowPriorityTasksWrapper.querySelector('.tasks-form');

const highTaskAddButton = highPriorityTasksForm.querySelector('.add-button');
const lowTaskAddButton = lowPriorityTasksForm.querySelector('.add-button');

highPriorityTasksForm.addEventListener('submit', addTask(highPriorityTasksWrapper));
highTaskAddButton.addEventListener('click', addTask(highPriorityTasksWrapper));
lowPriorityTasksForm.addEventListener('submit', addTask(lowPriorityTasksWrapper));
lowTaskAddButton.addEventListener('click', addTask(lowPriorityTasksWrapper));

// очень хочется вынести такой способ создания функции в FigJam.
// Ведь тут мы и аргумент можем передать и event не просрать
function addTask(tasksWrapper) {
    return event => {
        event.preventDefault();
        let taskInput = tasksWrapper.querySelector('.create-task-input');
        createTask(tasksWrapper, taskInput.value);
        taskInput.value = '';
    };
}

function createTask(tasksWrapper, text) {
    let tasksList = tasksWrapper.querySelector('.tasks-list');
    if (!text) {
        console.error('Задача не может быть пустой!');
        return;
    }
    let id = generateUniqueId();
    tasksList.insertAdjacentHTML(
        'beforeend',
        `<div class="control task task${id}">
                    <input class="radio task-radio" name="radio${id}" id="radio${id}" type="radio" />
                    <p class="task-text radio${id}-text">
                        ${text}
                    </p>
                    <button class="delete-button" type="button"></button>
                </div>`
    );
}

function generateUniqueId() {
    return '_' + Math.random().toString(36).slice(2, 11);
}
