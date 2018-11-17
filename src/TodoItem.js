import React from "react";

function TodoItem({
  index,
  markAsComplete,
  removeItem,
  todoListItem
}) {

  const todoStatus = todoListItem.isCompleted ? "line-through" : "none";
  const markAsCompleteButtonText = todoListItem.isCompleted ? "Mark As Incomplete" : "Mark As Complete";

  return (
    <div style={{ textDecoration: todoStatus }}>
      {todoListItem.text}
      <button onClick={() => markAsComplete(index)}>
        {markAsCompleteButtonText}
      </button>
      <button onClick={() => removeItem(index)}>
        Remove
      </button>
    </div>
  );
}

export default TodoItem;
