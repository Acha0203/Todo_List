import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const TodoItem = ({ todo, onCheck }) => {
  const handleClick = () => {
    onCheck(todo);
  };

  return (
    <div className="display-todo">
      <div>
        <button onClick={handleClick} className="btn btn-gray">
          {todo.doneFlag ? <FontAwesomeIcon icon={faCheckCircle} /> : <FontAwesomeIcon icon={farCheckCircle} />}
        </button>
      </div>
      <div className="todo-text">
        <h2>TODO {todo.id} : {todo.task}</h2>
      </div>
      <div>
        <button className="btn btn-gray">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;