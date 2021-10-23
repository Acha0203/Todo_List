import { useState } from 'react';
import { TodoList } from './model/index';
import Title from './components/Title';
import Form from './components/Form';
import Todo from './components/Todo';
import './assets/css/App.css';
import './assets/css/destyle.css'

function App() {
  const [task, setTask] = useState("");
  const [taskArray, setTaskArray] = useState(TodoList.createTaskArray);
  const createNewTask = (e) => {
    e.preventDefault();
    TodoList.createTask(task);
    getTaskArray();
    setTask("");
  };
  const getTaskArray = () => {
    setTaskArray(TodoList.createTaskArray);
  };

  return (
    <div className="sunset">
      <div className="container">
        <Title />
        <Form setTask={setTask} createNewTask={createNewTask} task={task} />
        <Todo taskArray={taskArray} setTaskArray={setTaskArray} />
      </div>
    </div>
  );
};

export default App;
