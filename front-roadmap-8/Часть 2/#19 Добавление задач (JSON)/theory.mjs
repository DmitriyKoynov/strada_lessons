import initialTasksJson from "./initialTasks.json" with {type: "json"};

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
