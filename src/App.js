import React, {
  useEffect,
  useState
} from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import './App.css';

function App() {
  const [todoItems, setTodoItem] = useState([]);
  const [incompleteCount, setIncompleteCount] = useState(0);

  const addTodo = (text) => {
    const newTodo = [...todoItems, { text, isCompleted: false }];
    setIncompleteCount(incompleteCount + 1);
    setTodoItem(newTodo);
  };

  const removeTodo = (index) => {
    const newTodo = [...todoItems];
    const setIncompleteCountValue = incompleteCount > 0 ? incompleteCount - 1 : 0;
    newTodo.splice(index, 1);
    if (!todoItems[index].isCompleted) {
      setIncompleteCount(setIncompleteCountValue);
    }
    setTodoItem(newTodo);
  };

  const markAsComplete = (index) => {
    const newTodos = [...todoItems];
    todoItems[index].isCompleted = !todoItems[index].isCompleted;
    if (todoItems[index].isCompleted) {
      setIncompleteCount(incompleteCount - 1);
    } else {
      setIncompleteCount(incompleteCount + 1);
    }
    setTodoItem(newTodos);
  };

  const clearAll = () => {
    setIncompleteCount(0);
    setTodoItem([]);
  }

  const completeAll = () => {
    const newTodos = [...todoItems];
    todoItems.map((todoItem) => {
      return todoItem.isCompleted = true;
    })
    setIncompleteCount(0);
    setTodoItem(newTodos);
  }

  useEffect(() => {
    if (incompleteCount > 0 && incompleteCount % 5 === 0) {
      alert(`Hey, heads up. You have ${incompleteCount} incomplete items. Let's get to work!`)
    }
  }, [incompleteCount]);

  return (
    <div className="App">
      <h1>To-Do List</h1>
      {todoItems.map((todoItem, index) => (
        <TodoItem
          index={index}
          key={index}
          markAsComplete={markAsComplete}
          removeItem={removeTodo}
          todoListItem={todoItem}
        />
      ))}
      <TodoInput
        addTodo={addTodo}
        clearAll={clearAll}
        completeAll={completeAll}
        incompleteCount={incompleteCount}
        listLength={todoItems.length}
      />
    </div>
  );
}

export default App;
