export class Task {
  constructor(id, task, doneFlag) {
    this.id = id;
    this.task = task;
    this.doneFlag = doneFlag;
    this.next = null;
  }
}

export class TodoList {
  static head = new Task(0, "dammy", false);

  static createTask(task) {
    TodoList.getLastTask().next = new Task(TodoList.getLastTask().id + 1, task, false);
  }

  static getLastTask() {
    let iterator = TodoList.head;

    while (iterator.next !== null) {
      iterator = iterator.next;
    }

    return iterator;
  }

  static deleteTask(id) {
    let iterator = TodoList.head;
    let preTrask = null;

    while (iterator.id !== id) {
      preTrask = iterator;
      iterator = iterator.next;
    }

    preTrask.next = iterator.next;
  }

  static createTaskArray() {
    let taskArray = [];
    let iterator = TodoList.head.next;

    while (iterator !== null) {
      taskArray.push(iterator);
      iterator = iterator.next;
    }

    return taskArray;
  }

  static toggleFlag(id) {
    let iterator = TodoList.head;

    while (iterator.id !== id) {
      iterator = iterator.next;
    }

    iterator.doneFlag = iterator.doneFlag ? false : true;
  }
}
