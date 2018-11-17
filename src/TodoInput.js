import React, { useState } from 'react';

function TodoInput({ addTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    if (!inputValue.trim().length) {
      setInputValue(inputValue.trim());
      return;
    };
    addTodo(inputValue);
    setInputValue("");
  }

  const handleSubmitOnEnter = (e) => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  }

  return (
    <div>
      <input
        onChange={(e) => handleInput(e)}
        onKeyUp={(e) => handleSubmitOnEnter(e)}
        value={inputValue}
      />
      <button onClick={(e) => handleSubmit(inputValue)}>Submit</button>
    </div>
  )
}

export default TodoInput;
