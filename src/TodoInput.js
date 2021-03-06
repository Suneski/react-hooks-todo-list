import React, { useState } from "react";

function TodoInput({
  addTodo,
  clearAll,
  completeAll,
  incompleteCount,
  listLength
}) {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  const handleInput = (e) => {
    setInputValue(e.target.value);
    setError(false);
  }

  const handleSubmit = (e) => {
    if (!inputValue.trim().length) {
      setInputValue(inputValue.trim());
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1000);
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
      {listLength > 0 &&
        <button onClick={() => clearAll()}>
          Empty Out List
        </button>
      }
      {incompleteCount > 0 &&
        <button onClick={() => completeAll()}>
          Mark All Complete
        </button>
      }
      {error &&
        <div style={{ color: "red" }}>ERROR: To-do item must be at least 1 character long</div>
      }
    </div>
  );
}

export default TodoInput
