// Константы для статусов
export const permittedStatuses = {
    TODO: 'To do',
    IN_PROGRESS: 'In progress',
    DONE: 'Done'
};

// Константы для приоритета
export const permittedPriorities = {
    LOW: { name: 'Low', value: 3 },
    MEDIUM: { name: 'Medium', value: 2 },
    HIGH: { name: 'High', value: 1 }
};

// Константы для ошибок
const errorMessages = {
    ERROR_INVALID_TASK_NAME: `Ошибка. Задача может быть только строкой.`,
    ERROR_INVALID_STATUS: `Ошибка. Указан неверный статус. Задача может иметь статусы только из объекта permittedStatuses.`,
    ERROR_INVALID_PRIORITY: `Ошибка. Указан неверный приоритет. Задача может иметь приоритеты только из объекта permittedPriorities.`,
    ERROR_TASK_EXISTS: `Ошибка. Такая задача уже есть в списке.`,
    ERROR_TASK_NOT_FOUND: 'Ошибка. Задача не найдена в списке.'
};

export const taskList = [
    { name: 'create a post', status: permittedStatuses.IN_PROGRESS, priority: permittedPriorities.LOW },
    { name: 'find a car', status: permittedStatuses.TODO, priority: permittedPriorities.MEDIUM },
    { name: 'go to bed', status: permittedStatuses.TODO, priority: permittedPriorities.HIGH },
    { name: 'test', status: permittedStatuses.DONE, priority: permittedPriorities.HIGH }
];

// Функции-проверки
const checkTaskName = name => typeof name === 'string' && name.trim();
const checkStatus = status => Object.values(permittedStatuses).includes(status);
const checkPriority = priority => Object.values(permittedPriorities).includes(priority);
const checkTaskExists = name => taskList.some(task => task.name === name);

function showArray(array, status) {
    console.log(`${status}:`);
    if (array.length === 0) {
        console.log(`\t—`);
    }
    for (task of array) {
        console.log(`\tЗадача: "${task.name}", приоритет: "${task.priority.name}"`);
    }
}

function sortByPriority(array) {
    array.sort((a, b) => a.priority.value - b.priority.value);
}

function getTaskIndex(name) {
    return taskList.findIndex(task => task.name === name);
}

export const addTask = (name, status = permittedStatuses.TODO, priority = permittedPriorities.MEDIUM) => {
    if (!checkTaskName(name)) {
        console.error(errorMessages.ERROR_INVALID_TASK_NAME);
        return;
    }
    if (!checkStatus(status)) {
        console.error(errorMessages.ERROR_INVALID_STATUS);
        return;
    }
    if (!checkPriority(priority)) {
        console.error(errorMessages.ERROR_INVALID_PRIORITY);
        return;
    }
    if (checkTaskExists(name)) {
        console.error(errorMessages.ERROR_TASK_EXISTS);
        return;
    }
    let newTask = { name, status, priority };
    taskList.push(newTask);
    console.log(`Добавлена новая задача '${name}'`);
};

export const changeTaskStatus = (name, newStatus) => {
    if (!checkTaskName(name)) {
        console.error(errorMessages.ERROR_INVALID_TASK_NAME);
        return;
    }
    if (!checkStatus(newStatus)) {
        console.error(errorMessages.ERROR_INVALID_STATUS);
        return;
    }
    if (!checkTaskExists(name)) {
        console.error(errorMessages.ERROR_TASK_NOT_FOUND);
        return;
    }
    let taskIndex = getTaskIndex(name);
    taskList[taskIndex].status = newStatus;
    console.log(`Статус задачи '${name}' изменён на '${newStatus}'`);
};

const changeTaskPriority = (name, newPriority) => {
    if (!checkTaskName(name)) {
        console.error(errorMessages.ERROR_INVALID_TASK_NAME);
        return;
    }
    if (!checkPriority(newPriority)) {
        console.error(errorMessages.ERROR_INVALID_PRIORITY);
        return;
    }
    if (!checkTaskExists(name)) {
        console.error(errorMessages.ERROR_TASK_NOT_FOUND);
        return;
    }
    let taskIndex = getTaskIndex(name);
    taskList[taskIndex].priority = newPriority;
    console.log(`Приоритет задачи '${name}' изменён на '${newPriority[name]}'`);
};

export const deleteTask = name => {
    if (!checkTaskName(name)) {
        console.error(errorMessages.ERROR_INVALID_TASK_NAME);
        return;
    }
    if (!checkTaskExists(name)) {
        console.error(errorMessages.ERROR_TASK_NOT_FOUND);
        return;
    }
    let taskIndex = getTaskIndex(name);
    taskList.splice(taskIndex, 1);
    console.log(`Удалена задача '${name}'`);
};

const showTaskList = () => {
    let todoArray = taskList.filter(task => task.status === permittedStatuses.TODO);
    let inProgressArray = taskList.filter(task => task.status === permittedStatuses.IN_PROGRESS);
    let doneArray = taskList.filter(task => task.status === permittedStatuses.DONE);

    sortByPriority(todoArray);
    sortByPriority(inProgressArray);
    sortByPriority(doneArray);

    console.log('--------');
    showArray(todoArray, permittedStatuses.TODO);
    showArray(inProgressArray, permittedStatuses.IN_PROGRESS);
    showArray(doneArray, permittedStatuses.DONE);
    console.log('--------');
};
