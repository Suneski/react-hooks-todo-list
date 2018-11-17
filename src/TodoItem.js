import React from 'react';

function TodoItem({
  index,
  markAsComplete,
  removeItem,
  todoItem
}) {

  const todoStatus = todoItem.isCompleted ? "line-through" : "none";
  const markAsCompleteButtonText = todoItem.isCompleted ? "Mark As Incomplete" : "Mark As Complete";

  return (
    <div style={{ textDecoration: todoStatus }}>
      {todoItem.text}
      <button onClick={() => markAsComplete(index)}>
        {markAsCompleteButtonText}
      </button>
      <button onClick={() => removeItem(index)}>
        Remove
      </button>
    </div>
  )
}

export default TodoItem;
