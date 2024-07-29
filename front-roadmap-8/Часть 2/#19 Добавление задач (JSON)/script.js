import * as tasksArray from './todoOnArrays.js';
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
document.body.addEventListener('click', removeTask());
document.body.addEventListener('click', changeTaskStatus());

function clearTaskList() {
    let tasksLists = document.body.querySelectorAll('.tasks-list');
    tasksLists.forEach(element => {
        element.textContent = '';
    });
}

function updateTaskListFromBase() {
    clearTaskList();
    for (const task of tasksArray.taskList) {
        let isTaskPriorityLow = task.priority.name === tasksArray.permittedPriorities['LOW'].name;
        let taskWrapper = isTaskPriorityLow ? lowPriorityTasksWrapper : highPriorityTasksWrapper;
        createTask(taskWrapper, task.name, task.status);
    }
}

function addTask(tasksWrapper) {
    return event => {
        event.preventDefault();
        const isHighPriority = tasksWrapper.classList.contains('high-priority-tasks');
        const taskInput = tasksWrapper.querySelector('.create-task-input');
        let taskPriority = isHighPriority ? tasksArray.permittedPriorities.HIGH : tasksArray.permittedPriorities.LOW;
        try {
            tasksArray.addTask(taskInput.value.trim(), tasksArray.permittedStatuses.TODO, taskPriority);
        } catch (error) {
            showError(error);
        }
        updateTaskListFromBase();
        taskInput.value = '';
    };
}

function removeTask() {
    return event => {
        if (event.target.classList.contains('delete-button')) {
            let taskText = event.target.previousElementSibling.textContent.trim();
            try {
                tasksArray.deleteTask(taskText);
            } catch (error) {
                showError(error);
            }
            updateTaskListFromBase();
        }
    };
}

function changeTaskStatus() {
    return event => {
        let element = event.target;
        if (element.classList.contains('task-checkbox')) {
            const taskText = element.nextElementSibling.textContent.trim();
            const taskNewStatus = element.checked
                ? tasksArray.permittedStatuses.DONE
                : tasksArray.permittedStatuses.TODO;
            try {
                tasksArray.changeTaskStatus(taskText, taskNewStatus);
            } catch (error) {
                showError(error);
            }
            updateTaskListFromBase();
        }
    };
}

function createTask(tasksWrapper, text, taskStatus) {
    let tasksList = tasksWrapper.querySelector('.tasks-list');
    let isTaskDone = taskStatus === tasksArray.permittedStatuses.DONE;
    let checkboxStatus = isTaskDone ? 'checked' : '';
    let controlBackgroundColor = isTaskDone ? 'control--green' : 'control--white';
    if (!text) {
        console.error('Задача не может быть пустой!');
        return;
    }
    let id = generateUniqueId();
    tasksList.insertAdjacentHTML(
        'beforeend',
        `<div class="control task task${id} ${controlBackgroundColor}">
                    <input class="checkbox task-checkbox" name="checkbox${id}" id="checkbox${id}" type="checkbox" ${checkboxStatus}/>
                    <p class="task-text checkbox${id}-text">
                        ${text}
                    </p>
                    <button class="delete-button" type="button"></button>
                </div>`
    );
}

function generateUniqueId() {
    return '_' + Math.random().toString(36).slice(2, 11);
}

function showError(error) {
    console.error(error);
    alert(error);
}

// Делаем начальный update
tasksArray.createInitialTasks();
updateTaskListFromBase();
