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

  const removeTodo = (index) => {
    const newTodo = [...todoItems];
    newTodo.splice(index, 1);
    setTodoItem(newTodo);
  };

  const markAsComplete = (index) => {
    const newTodos = [...todoItems];
    todoItems[index].isCompleted = !todoItems[index].isCompleted;
    setTodoItem(newTodos);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      {todoItems.map((todoItem, index) => (
        <TodoItem
          index={index}
          key={index}
          markAsComplete={markAsComplete}
          removeItem={removeTodo}
          todoItem={todoItem}
        />
      ))}
      <TodoInput addTodo={addTodo}/>
    </div>
  )
}

export default App;
