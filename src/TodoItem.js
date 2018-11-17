import React from 'react';

function TodoItem({
  index,
  todoItem
}) {
  return (
    <div>
      {todoItem.text}
    </div>
  )
}

export default TodoItem;
