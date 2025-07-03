import { useState, useEffect } from 'react'
import './App.css'
import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';

function App() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const response = await fetch("/api/todos");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  }
  return (
    <>
      <InputTodo onAdded={getTodos}/>
      <ListTodos setTodos={setTodos} todos={todos} getTodos={getTodos}/>
    </>
  )
}

export default App
