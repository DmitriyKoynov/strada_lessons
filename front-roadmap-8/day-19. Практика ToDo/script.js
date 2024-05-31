const DONE = 'Done';
const IN_PROGRESS = 'In progress';
const TODO = 'To do';

const list = {
    // Основные методы
    addTask(task, state = TODO) {
        if (!(task in this)) {
            this[task] = state;
            return this;
        } else {
            return `Ошибка. Такая задача уже есть. Её текущий статус — ${this[task]}`;
        }
    },
    changeStatus(task, state) {
        if (task in this) {
            this[task] = state;
            return this;
        } else {
            return 'Ошибка. Такой задачи не существует';
        }
    },
    deleteTask(task) {
        if (task in this) {
            delete this[task];
            return this;
        } else {
            return 'Ошибка. Такой задачи не существует';
        }
    },
    showList() {
        for (const task in this) {
            console.log(`${task} : ${this[task]}`);
        }
    },

    // Вспомогательные внутренние методы
    checkTask(task) {
        return task in this;
    },
    checkState(state) {
        return state === DONE || state === IN_PROGRESS || state === TODO;
    }
};

list.addTask('Погулять с собакой');
list.addTask('Выпить винишка', IN_PROGRESS);
list.addTask('Поспать', DONE);
console.log(list);

list.deleteTask('Погулять с собакой');
list.changeStatus('Выпить винишка', DONE);
let error = list.addTask('Поспать', 'Kek');

console.log(list);
console.log();
