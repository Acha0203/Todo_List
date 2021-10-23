import { useState } from 'react';
import { TodoList } from './model/index';
import Title from './components/Title';
import Form from './components/Form';
import Todo from './components/Todo';
import './assets/css/App.css';
import './assets/css/destyle.css'

function App() {
  const [taskString, setTaskString] = useState("");
  const [taskArray, setTaskArray] = useState(TodoList.createTaskArray);
  const createNewTask = (e) => {
    e.preventDefault();
    TodoList.createTask(taskString);
    getTaskArray();
    setTaskString("");
  };
  const getTaskArray = () => {
    setTaskArray(TodoList.createTaskArray);
  };

  return (
    <div className="todo-bg">
      <div className="container">
        <Title />
        <Form setTaskString={setTaskString} createNewTask={createNewTask} taskString={taskString} />
        <Todo taskArray={taskArray} setTaskArray={setTaskArray} />
      </div>
    </div>
  );
};

export default App;
