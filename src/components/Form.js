import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Form = ({ taskString, setTaskString, createNewTask }) => {
  return (
    <div className="input-task-con">
      <form onSubmit={createNewTask}>
        <button type="submit" className="input-task">
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <input type="text" name="task"
          onChange={e => setTaskString(e.target.value)} value={taskString} placeholder="Write a new task..." className="input-task" />
      </form>
    </div>
  );
};

export default Form;