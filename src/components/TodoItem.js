import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle as farCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const TodoItem = ({ task, onCheck, onDelete }) => {
  const handleCheck = () => {
    onCheck(task);
  };
  const handleDelete = () => {
    onDelete(task);
  }

  return (
    <div className="display-todo">
      <>
        <button onClick={handleCheck} className="btn btn-gray">
          {task.doneFlag ? <FontAwesomeIcon icon={faCheckCircle} /> : <FontAwesomeIcon icon={farCheckCircle} />}
        </button>
      </>
      <div className="todo-text">
        <h2>TODO {task.id} : {task.task}</h2>
      </div>
      <>
        <button onClick={handleDelete} className="btn btn-gray">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </>
    </div>
  );
};

export default TodoItem;