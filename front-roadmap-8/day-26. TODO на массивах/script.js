// Константы для статусов
const taskStatus = {
    TODO: 'To do',
    IN_PROGRESS: 'In progress',
    DONE: 'Done'
};

// Константы для приоритета
const taskPriority = {
    LOW: 'Low',
    MEDIUM: 'Medium',
    HIGH: 'High'
};

const priorityValue = {
    Low: 3,
    Medium: 2,
    High: 1
};

// Константы для ошибок
const errorMessages = {
    ERROR_INVALID_TASK_TYPE: `Ошибка. Задача может быть только строкой.`,
    ERROR_INVALID_STATUS: `Ошибка. Указан неверный статус. Задача может иметь статусы ${taskStatus.TODO}, ${taskStatus.IN_PROGRESS}, ${taskStatus.DONE}.`,
    ERROR_INVALID_PRIORITY: `Ошибка. Указан неверный приоритет. Задача может иметь приоритеты ${taskPriority.LOW}, ${taskPriority.MEDIUM}, ${taskPriority.HIGH}.`,
    ERROR_TASK_EXISTS: `Ошибка. Такая задача уже есть в списке.`,
    ERROR_TASK_NOT_FOUND: 'Ошибка. Задача не найдена в списке.'
};

const taskList = [
    { name: 'create a post', status: taskStatus.IN_PROGRESS, priority: taskPriority.LOW }, // каждый элемент массива объект
    { name: 'find a car', status: taskStatus.TODO, priority: taskPriority.MEDIUM }, // каждый элемент массива объект
    { name: 'go to bed', status: taskStatus.TODO, priority: taskPriority.HIGH }, // каждый элемент массива объект
    { name: 'test', status: taskStatus.DONE, priority: taskPriority.HIGH } // в объекте есть все данные о задаче
];

const addTask = (name, status, priority) => {
    let newTask = { name, status, priority };
    taskList.push(newTask);
    console.log(`Добавлена новая задача '${name}'`);
};
addTask('Помыть кота', taskStatus.TODO, taskPriority.HIGH);

const changeTaskStatus = (name, newStatus) => {
    let taskIndex = getTaskIndex(name);
    taskList[taskIndex].status = newStatus;
    console.log(`Статус задачи '${name}' изменён на '${newStatus}'`);
};
changeTaskStatus('Помыть кота', taskStatus.IN_PROGRESS);

const changeTaskPriority = (name, newPriority) => {
    let taskIndex = getTaskIndex(name);
    taskList[taskIndex].priority = newPriority;
    console.log(`Приоритет задачи '${name}' изменён на '${newPriority}'`);
};
changeTaskPriority('Помыть кота', taskPriority.MEDIUM);

const deleteTask = name => {
    let taskIndex = getTaskIndex(name);
    taskList.splice(taskIndex, 1);
    console.log(`Удалена задача '${name}'`);
};
deleteTask('test');

const showList = () => {
    let todoArray = taskList.filter(task => task.status === taskStatus.TODO);
    let inProgressArray = taskList.filter(task => task.status === taskStatus.IN_PROGRESS);
    let doneArray = taskList.filter(task => task.status === taskStatus.DONE);

    sortByPriority(todoArray);
    sortByPriority(inProgressArray);
    sortByPriority(doneArray);

    showArray(todoArray, taskStatus.TODO);
    showArray(inProgressArray, taskStatus.IN_PROGRESS);
    showArray(doneArray, taskStatus.DONE);
};
showList();
console.log();

function showArray(array, status) {
    console.log(`${status}:`);
    if (array.length === 0) {
        console.log(`\t—`);
    }
    for (task of array) {
        console.log(`\tЗадача: "${task.name}", приоритет: "${task.priority}"`);
    }
}

function sortByPriority(array) {
    array.sort((a, b) => priorityValue[a.priority] - priorityValue[b.priority]);
}

function getTaskIndex(name) {
    return taskList.findIndex(task => task.name === name);
}
// // const list = {
//     // addTask(task, status = taskStatus.TODO) {
//     //     if (!this.checkTaskType(task)) {
//     //         console.error(errorMessages.ERROR_INVALID_TASK_TYPE);
//     //         return;
//     //     }
//     //     if (!this.checkStatus(status)) {
//     //         console.error(errorMessages.ERROR_INVALID_STATUS);
//     //         return;
//     //     }
//     //     if (this.checkTaskExists(task)) {
//     //         console.error(errorMessages.ERROR_TASK_EXISTS);
//     //         return;
//     //     }
//     //     this[task] = status;
//     //     return this;
//     // },

//     changeStatus(task, status) {
//         if (!this.checkTaskType(task)) {
//             console.error(errorMessages.ERROR_INVALID_TASK_TYPE);
//             return;
//         }
//         if (!this.checkStatus(status)) {
//             console.error(errorMessages.ERROR_INVALID_STATUS);
//             return;
//         }
//         if (!this.checkTaskExists(task)) {
//             console.error(errorMessages.ERROR_TASK_NOT_FOUND);
//             return;
//         }
//         this[task] = status;
//         return this;
//     },
//     deleteTask(task) {
//         if (!this.checkTaskType(task)) {
//             console.error(errorMessages.ERROR_INVALID_TASK_TYPE);
//             return;
//         }
//         if (!this.checkTaskExists(task)) {
//             console.error(errorMessages.ERROR_TASK_NOT_FOUND);
//             return;
//         }
//         delete this[task];
//         return this;
//     },
//     showList() {
//         console.log('--------');
//         this.showTasksWithSpecificStatus(taskStatus.TODO);
//         this.showTasksWithSpecificStatus(taskStatus.IN_PROGRESS);
//         this.showTasksWithSpecificStatus(taskStatus.DONE);
//         console.log('--------');
//     },

//     // Вспомогательные внутренние методы
//     checkTaskType(task) {
//         return typeof task === 'string';
//     },
//     checkStatus(status) {
//         return status === taskStatus.TODO || status === taskStatus.IN_PROGRESS || status === taskStatus.DONE;
//     },
//     checkTaskExists(task) {
//         return task in this;
//     },
//     showTasksWithSpecificStatus(status) {
//         let isEmpty = true;
//         console.log(`${status}:`);
//         for (const task in this) {
//             if (this[task] === status) {
//                 console.log(`\t"${task}"`);
//                 isEmpty = false;
//             }
//         }
//         if (isEmpty) {
//             console.log(`\t—`);
//         }
//     }
// };

// ///////////////////////////////////////////////////////// Тесты
// // Наполняем список задачами
// list.addTask('Погулять с собакой', taskStatus.TODO);
// list.addTask('Выпить винишка', taskStatus.IN_PROGRESS);
// list.addTask('Поспать', taskStatus.DONE);

// //Проверяем метод list.addTask()
// list.addTask('Помыть полы'); // Вернет объект, в который добавим задачу «Помыть полы» со статусом «To do»
// list.addTask(123); // Вернет ошибку
// list.addTask('Украсть кота', 'In my dreams'); // Вернет ошибку
// list.addTask('Погулять с собакой'); // Вернет ошибку

// //Проверяем метод list.changeStatus()
// list.changeStatus('Помыть полы', taskStatus.IN_PROGRESS); // Вернет объект, в которым изменит статус задачи «Помыть полы»
// list.changeStatus(123, taskStatus.TODO); // Вернет ошибку
// list.changeStatus('Стать счастливым', 'Только в сказках'); // Вернет ошибку
// list.changeStatus('Уничтожить снеговика', taskStatus.TODO); // Вернет ошибку

// //Проверяем метод list.deleteTask()
// list.deleteTask('Поспать'); // Вернёт объект, из которого удалит задачу «Поспать»
// list.deleteTask(123); // Вернет ошибку
// list.deleteTask('Захватить мир'); // Вернет ошибку

// //Проверяем метод list.showList()
// list.showList(); // Покажет задачи со статусами (методы показывать не будет)
