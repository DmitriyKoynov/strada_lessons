const STATUSES = {
  TODO: "To do",
  IN_PROGRESS: "In progress",
  DONE: "Done",
};

const ERRORS = {
  STATUS_NOT_VALID:
    "Данный статус некорректен, используйте пожалуйста корректный",
  TASK_NOT_FOUND: `Задача не найдена`,
};

//const { TODO, IN_PROGRESS, DONE } = STATUSES; - вариант с деструктуризацией.
//Вариант без деструктуризации, которую еще не изучали.
const TODO = STATUSES.TODO;
const IN_PROGRESS = STATUSES.IN_PROGRESS;
const DONE = STATUSES.DONE;

const taskList = {
  0: {
    title: "сделать зарядку",
    status: TODO,
  },
  1: {
    title: "помыть посуду",
    status: DONE,
  },
  2: {
    title: "задача из страды",
    status: IN_PROGRESS,
  },
  3: {
    title: "прочитать 'Грокаем алгоритмы'",
    status: IN_PROGRESS,
  },
  4: {
    title: "изучить React",
    status: TODO,
  },
};

const findLastId = () => {
  let lastId = 0;
  if (isObjNotEmpty(taskList)) {
    for (let id in taskList) {
      if (Number(id) > lastId) {
        lastId = Number(id);
      }
    }
  }
  return lastId;
};

function isObjNotEmpty(obj) {
  for (key in obj) {
    return true;
  }
  return false;
}

function rightStatus(status) {
  return status === TODO || status === IN_PROGRESS || status === DONE;
}

function addTask(title, status) {
  if (rightStatus(status)) {
    let lastId = findLastId();
    lastId++;
    taskList[lastId] = { title, status };
  } else {
    console.log(ERRORS.STATUS_NOT_VALID);
  }
}

function deleteTask(id) {
  if (id in taskList) {
    delete taskList[id];
    console.log(`Задача #${id} удалена`);
  } else {
    console.log(ERRORS.TASK_NOT_FOUND);
  }
}

function changeStatus(id, status) {
  if (id in taskList && rightStatus(status)) {
    taskList[id].status = status;
  } else {
    console.log(
      id in taskList ? ERRORS.STATUS_NOT_VALID : ERRORS.TASK_NOT_FOUND
    );
  }
}

function showAll() {
  for (id in taskList) {
    console.log(
      `Задача #${id} ${taskList[id].title} в статусе ${taskList[id].status}`
    );
  }
}

function getTasksByStatus(status) {
  const statusList = {};
  for (id in taskList) {
    if (taskList[id].status === status) {
      statusList[id] = taskList[id];
    }
  }
  return statusList;
}
function showOneByStatus(status) {
  const statusList = getTasksByStatus(status);
  console.log(`${status}: `);
  if (isObjNotEmpty(statusList)) {
    for (id in statusList) {
      console.log(` ${statusList[id].title}`);
    }
  } else {
    console.log(" -");
  }
}

function showAllByStatus() {
  for (status in STATUSES) {
    showOneByStatus(STATUSES[status]);
  }
}

addTask("убраться на столе", "todo");
addTask("пробежка", "upcoming");
showAll();
changeStatus(2, TODO);
deleteTask(1);
deleteTask(1);
showAllByStatus();
