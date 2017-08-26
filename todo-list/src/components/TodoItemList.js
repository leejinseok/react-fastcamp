import React, { PropTypes } from 'react';
import TodoItem from './TodoItem';

const TodoItemList = ({items, onToggle, onRemove}) => {
    const itemList = items.map(
        (item, index) => ( // 첫번째 인자는 배열의 원소, 두번째 인자는 순서번호가 전달됩니다.
            <TodoItem
                key={item.id}
                id={item.id}
                name={item.name}
                finished={item.finished}
                onToggle={onToggle}
                onRemove={onRemove}
            />
        )
    )
  return(
    <ul>
      {itemList}
    </ul>
  )
}

export default TodoItemList;
