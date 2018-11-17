import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import './App.css';

function App() {
  const [todoItems, setTodoItem] = useState([]);

  const addTodo = (text) => {
    const newTodo = [...todoItems, { text, isCompleted: false }];
    setTodoItem(newTodo);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      {todoItems.map((todoItem, index) => (
        <TodoItem todoItem={todoItem} />
      ))}
      <TodoInput addTodo={addTodo}/>
    </div>
  )
}

export default App;
