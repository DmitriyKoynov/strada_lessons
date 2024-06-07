// Константы для статусов
const TODO = 'To do';
const IN_PROGRESS = 'In progress';
const DONE = 'Done';

// Константы для текстов ошибок
const ERROR_INVALID_TASK_TYPE = `Ошибка. Задача может быть только строкой.`;
const ERROR_INVALID_STATUS = `Ошибка. Указан неверный статус. Задача может иметь статусы ${TODO}, ${IN_PROGRESS}, ${DONE}.`;
const ERROR_TASK_EXISTS = `Ошибка. Такая задача уже есть в списке.`;
const ERROR_TASK_NOT_FOUND = 'Ошибка. Задача не найдена в списке.';

const list = {
    addTask(task, status = TODO) {
        if (!this.checkTaskType(task)) {
            console.log(ERROR_INVALID_TASK_TYPE);
            return;
        }
        if (!this.checkStatus(status)) {
            console.log(ERROR_INVALID_STATUS);
            return;
        }
        if (this.checkTaskExists(task)) {
            console.log(ERROR_TASK_EXISTS);
            return;
        }
        this[task] = status;
        return this;
    },
    changeStatus(task, status) {
        if (!this.checkTaskType(task)) {
            console.log(ERROR_INVALID_TASK_TYPE);
            return;
        }
        if (!this.checkStatus(status)) {
            console.log(ERROR_INVALID_STATUS);
            return;
        }
        if (!this.checkTaskExists(task)) {
            console.log(ERROR_TASK_NOT_FOUND);
            return;
        }
        this[task] = status;
        return this;
    },
    deleteTask(task) {
        if (!this.checkTaskType(task)) {
            console.log(ERROR_INVALID_TASK_TYPE);
            return;
        }
        if (!this.checkTaskExists(task)) {
            console.log(ERROR_TASK_NOT_FOUND);
            return;
        }
        delete this[task];
        return this;
    },
    showList() {
        console.log('--------');
        this.showTasksWithSpecificStatus(TODO);
        this.showTasksWithSpecificStatus(IN_PROGRESS);
        this.showTasksWithSpecificStatus(DONE);
        console.log('--------');
    },

    // Вспомогательные внутренние методы
    checkTaskType(task) {
        return typeof task === 'string';
    },
    checkStatus(status) {
        return status === TODO || status === IN_PROGRESS || status === DONE;
    },
    checkTaskExists(task) {
        return task in this;
    },
    showTasksWithSpecificStatus(status) {
        let isEmpty = true;
        console.log(`${status}:`);
        for (const task in this) {
            if (this[task] === status) {
                console.log(`\t"${task}"`);
                isEmpty = false;
            }
        }
        if (isEmpty) {
            console.log(`\t—`);
        }
    }
};

///////////////////////////////////////////////////////// Тесты
// Наполняем список задачами
list.addTask('Погулять с собакой', TODO);
list.addTask('Выпить винишка', IN_PROGRESS);
list.addTask('Поспать', DONE);

//Проверяем метод list.addTask()
list.addTask('Помыть полы'); // Вернет объект, в который добавим задачу «Помыть полы» со статусом «To do»
list.addTask(123); // Вернет ошибку
list.addTask('Украсть кота', 'In my dreams'); // Вернет ошибку
list.addTask('Погулять с собакой'); // Вернет ошибку

//Проверяем метод list.changeStatus()
list.changeStatus('Помыть полы', IN_PROGRESS); // Вернет объект, в которым изменит статус задачи «Помыть полы»
list.changeStatus(123, TODO); // Вернет ошибку
list.changeStatus('Стать счастливым', 'Только в сказках'); // Вернет ошибку
list.changeStatus('Уничтожить снеговика', TODO); // Вернет ошибку

//Проверяем метод list.deleteTask()
list.deleteTask('Поспать'); // Вернёт объект, из которого удалит задачу «Поспать»
list.deleteTask(123); // Вернет ошибку
list.deleteTask('Захватить мир'); // Вернет ошибку

//Проверяем метод list.showList()
list.showList(); // Покажет задачи со статусами (методы показывать не будет)
