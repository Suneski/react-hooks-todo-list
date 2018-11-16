import React from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoInput />
      <TodoItem />
    </div>
  )
}

export default App;
