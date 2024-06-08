// Константы для статусов
const permittedStatuses = {
    TODO: 'To do',
    IN_PROGRESS: 'In progress',
    DONE: 'Done'
};

// Константы для приоритета
const permittedPriorities = {
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

const taskList = [
    { name: 'create a post', status: permittedStatuses.IN_PROGRESS, priority: permittedPriorities.LOW },
    { name: 'find a car', status: permittedStatuses.TODO, priority: permittedPriorities.MEDIUM },
    { name: 'go to bed', status: permittedStatuses.TODO, priority: permittedPriorities.HIGH },
    { name: 'test', status: permittedStatuses.DONE, priority: permittedPriorities.HIGH }
];

// Функции-проверки
const checkTaskName = name => typeof name === 'string';
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

const addTask = (name, status = permittedStatuses.TODO, priority = permittedPriorities.MEDIUM) => {
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

const changeTaskStatus = (name, newStatus) => {
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

const deleteTask = name => {
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

// Добавим задачу «Помыть полы» со статусом TODO и приоритетом LOW
addTask('Помыть полы');
// Добавим задачу «Помыть полы» со статусом «To do» и приоритетом «Medium»
addTask('Сходить в магазин', permittedStatuses.TODO, permittedPriorities.LOW);
// Вернет ошибку ERROR_INVALID_TASK_NAME
addTask(123);
// Вернет ошибку ERROR_INVALID_STATUS
addTask('Украсть кота', 'In my dreams');
// Вернет ошибку ERROR_INVALID_PRIORITY
addTask('Украсть кота', permittedStatuses.TODO, 'THE HIGHEST');
// Вернет ошибку ERROR_TASK_EXISTS
addTask('test');

// Изменим статус у задачи «Помыть полы» на IN_PROGRESS
changeTaskStatus('test', permittedStatuses.IN_PROGRESS);
// Вернет ошибку ERROR_INVALID_TASK_NAME
changeTaskStatus(123, permittedStatuses.TODO);
// Вернет ошибку ERROR_INVALID_STATUS
changeTaskStatus('Стать счастливым', 'Только в сказках');
// Вернет ошибку ERROR_TASK_NOT_FOUND
changeTaskStatus('Уничтожить снеговика', permittedStatuses.TODO);

// Изменим приоритет у задачи «Помыть полы» на HIGH
changeTaskPriority('Помыть полы', permittedPriorities.HIGH);
// Вернет ошибку ERROR_INVALID_TASK_NAME
changeTaskPriority(123, permittedPriorities.HIGH);
// Вернет ошибку ERROR_INVALID_PRIORITY
changeTaskPriority('Стать счастливым', 'THE HIGHEST');
// Вернет ошибку ERROR_TASK_NOT_FOUND
changeTaskPriority('Уничтожить снеговика', permittedPriorities.HIGH);

// Удалим задачу «Помыть полы»
deleteTask('Помыть полы');
// Вернет ошибку ERROR_INVALID_TASK_NAME
deleteTask(123);
// Вернет ошибку ERROR_TASK_NOT_FOUND
deleteTask('Захватить мир');

// Выведем все задачи. Отфильтруем их по статусам и отсортируем по приоритетам
showTaskList();
