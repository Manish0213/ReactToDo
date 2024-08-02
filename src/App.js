import logo from './logo.svg';
import './App.css';
import AddToDo from './components/AddToDo';
import ToDoList from './components/ToDoList';
import { useState } from 'react';

function App() {
  const [todos, setToDos] = useState([{
    title: "learn react",
    desc: "With supporting text below as a natural lead-in to additional content with Me."
  },
  {
    title: "learn MERN",
    desc: "With supporting text below as a natural lead-in to additional content with Vishal."
  }]);
  
  return (
    <>
    <AddToDo/>
    <ToDoList todos={todos} />
    </>
  );
}

export default App;
