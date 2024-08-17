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
    ERROR_INVALID_TASK_NAME: `Задача может быть только непустой строкой.`,
    ERROR_INVALID_STATUS: `Указан неверный статус. Задача может иметь статусы только из объекта permittedStatuses.`,
    ERROR_INVALID_PRIORITY: `Указан неверный приоритет. Задача может иметь приоритеты только из объекта permittedPriorities.`,
    ERROR_TASK_EXISTS: `Такая задача уже есть в списке.`,
    ERROR_TASK_NOT_FOUND: 'Задача не найдена в списке.'
};

export const taskList = [
    { name: 'create a post', status: permittedStatuses.IN_PROGRESS, priority: permittedPriorities.LOW },
    { name: 'find a car', status: permittedStatuses.TODO, priority: permittedPriorities.LOW },
    { name: 'go to bed', status: permittedStatuses.TODO, priority: permittedPriorities.HIGH },
    { name: 'test', status: permittedStatuses.DONE, priority: permittedPriorities.HIGH },
    { name: 'go to Everest', status: permittedStatuses.DONE, priority: permittedPriorities.HIGH }
];

// Функции-проверки
const checkTaskName = name => {
    if (typeof name === 'string' && name.trim()) {
        return;
    }
    throw new Error(errorMessages.ERROR_INVALID_TASK_NAME);
};

const checkStatus = status => {
    if (Object.values(permittedStatuses).includes(status)) {
        return;
    }
    throw new Error(errorMessages.ERROR_INVALID_STATUS);
};

const checkPriority = priority => {
    if (Object.values(permittedPriorities).includes(priority)) {
        return;
    }
    throw new Error(errorMessages.ERROR_INVALID_PRIORITY);
};
const checkTaskExists = name => {
    if (taskList.some(task => task.name === name)) {
        return;
    }
    throw new Error(errorMessages.ERROR_TASK_NOT_FOUND);
};

const checkTaskNotExists = name => {
    if (taskList.some(task => task.name === name)) {
        throw new Error(errorMessages.ERROR_TASK_EXISTS);
    }
};

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
    checkTaskName(name);
    checkStatus(status);
    checkPriority(priority);
    checkTaskNotExists(name);
    let newTask = { name, status, priority };
    taskList.push(newTask);
    console.log(`Добавлена новая задача '${name}'`);
};

export const changeTaskStatus = (name, newStatus) => {
    checkTaskName(name);
    checkStatus(newStatus);
    checkTaskExists(name);
    let taskIndex = getTaskIndex(name);
    taskList[taskIndex].status = newStatus;
    console.log(`Статус задачи '${name}' изменён на '${newStatus}'`);
};

const changeTaskPriority = (name, newPriority) => {
    checkTaskName(name);
    checkPriority(newPriority);
    checkTaskExists(name);
    let taskIndex = getTaskIndex(name);
    taskList[taskIndex].priority = newPriority;
    console.log(`Приоритет задачи '${name}' изменён на '${newPriority[name]}'`);
};

export const deleteTask = name => {
    checkTaskName(name);
    checkTaskExists(name);
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
