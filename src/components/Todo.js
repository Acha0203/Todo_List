import { TodoList } from "../model/index";
import TodoItem from "./TodoItem";

const Todo = ({ taskArray, setTaskArray }) => {
  const handleCheck = clicked => {
    const newTask = taskArray.map(task => {
      if (task.id === clicked.id) {
        task.doneFlag = !task.doneFlag;
      }
      return task;
    });
    setTaskArray(newTask);
  };
  const handleDelete = clicked => {
    taskArray.map(task => {
      if (task.id === clicked.id) {
        TodoList.deleteTask(task.id);
      }
      return task;
    });
    setTaskArray(TodoList.createTaskArray);
  };

  return (
    <>
      {taskArray.map(task =>
        <TodoItem key={task.id} onCheck={handleCheck} task={task} onDelete={handleDelete} />
      )}
    </>
  );
};

export default Todo;