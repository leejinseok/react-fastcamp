import React from 'react';
import TodoListItems from './TodoListItems';

const TodoList = ({items, onRemove, onToggle}) => {
  const list = items.map(
    (item, index) => {
      return (
        <TodoListItems
          key={item.id}
          id={item.id}
          title={item.title}
          finished={item.finished}
          onRemove={onRemove}
          onToggle={onToggle}
          />
      )
    }
  )

  return (
    <ul>
      {list}
    </ul>
  )
}

export default TodoList;
