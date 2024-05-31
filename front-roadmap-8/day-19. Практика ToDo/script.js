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
    addTask(task, state = TODO) {
        if (!this.checkTaskType(task)) {
            return ERROR_INVALID_TASK_TYPE;
        }
        if (!this.checkState(state)) {
            return ERROR_INVALID_STATUS;
        }
        if (this.checkTaskExists(task)) {
            return ERROR_TASK_EXISTS;
        }
        this[task] = state;
        return this;
    },
    changeStatus(task, state) {
        if (!this.checkTaskType(task)) {
            return ERROR_INVALID_TASK_TYPE;
        }
        if (!this.checkState(state)) {
            return ERROR_INVALID_STATUS;
        }
        if (!this.checkTaskExists(task)) {
            return ERROR_TASK_NOT_FOUND;
        }
        this[task] = state;
        return this;
    },
    deleteTask(task) {
        if (!this.checkTaskType(task)) {
            return ERROR_INVALID_TASK_TYPE;
        }
        if (!this.checkTaskExists(task)) {
            return ERROR_TASK_NOT_FOUND;
        }
        delete this[task];
        return this;
    },
    showList() {
        console.log('--------');
        for (const task in this) {
            if (typeof this[task] === 'string') {
                console.log(`"${task}": ${this[task]}`);
            }
        }
        console.log('--------');
    },

    // Вспомогательные внутренние методы
    checkTaskType(task) {
        return typeof task === 'string';
    },
    checkState(state) {
        return state === TODO || state === IN_PROGRESS || state === DONE;
    },
    checkTaskExists(task) {
        return task in this;
    }
};

//////////////////// Тесты

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
