// import { TodoList } from '../model/index';
import TodoItem from "./TodoItem";

const Todo = ({ taskArray, setTaskArray }) => {
  const handleClick = clicked => {
    const newTodo = taskArray.map(todo => {
      if (todo.id === clicked.id) {
        todo.doneFlag = !todo.doneFlag;
      }
      return todo;
    });
    setTaskArray(newTodo);
  };

  return (
    <>
      {taskArray.map(todo =>
        <TodoItem key={todo.id} onCheck={handleClick} todo={todo} />
      )}
    </>
  );
};

export default Todo;