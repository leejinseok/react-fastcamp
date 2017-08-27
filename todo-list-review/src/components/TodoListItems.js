import React, { Component } from 'react';
import PropTyeps from 'prop-types';

class TodoListItems extends Component {

  handleDoubleClick = (id) => {
    this.props.onRemove(id);
  }

  handleClick = (id) => {
    this.props.onToggle(id);
  }

  render() {
    const {
      id,
      title,
      finished,
      onRemove,
      onToggle
    } = this.props;

    const {
      handleDoubleClick,
      handleClick
    } = this;

    const style = {
      textDecoration: finished ? 'line-through' : 'none'
    }

    return(
      <li
        onDoubleClick={()=>handleDoubleClick(id)}
        onClick={()=>handleClick(id)}
        >
        <p style={style}>
          { title }
        </p>
      </li>
    )
  }
}

export default TodoListItems;
