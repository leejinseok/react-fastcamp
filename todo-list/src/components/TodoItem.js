import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  static propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    finished: PropTypes.bool,
    onToggle: PropTypes.func,
    onRemove: PropTypes.func
  };

  static defaultProp = {
    name: '기본항목',
    id: '',
    finished: false,
    onToggle: () => console.warn('onToggle not defined'),
    onRemove: () => console.warn('onRemove not defined')
  };

  render () {
    const {
      name,
      id,
      finished,
      onToggle,
      onRemove
    } = this.props;

    const style = {
      cursor: 'pointer',
      textDecoration: finished ? 'line-through' : 'none'
    };

    return (
      <li
        onClick={() => onToggle(id)}
        onDoubleClick={() => onRemove(id)}
        style={style}>
        {name}
      </li>
    )
  }
}

export default TodoItem;
