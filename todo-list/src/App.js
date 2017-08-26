import React, { Component } from 'react';
import shortId from 'shortid';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoItemList from './components/TodoItemList';

function createItem (name) {
  return {
    id: shortId.generate(),
    name,
    finished: false
  }
}

const defaultTodos = [
  '사업자 등록',
  'You don\'t know JS'
].map(createItem);

class App extends Component {
  state = {
    todoItems: defaultTodos
  };

  handleInsert = (name) => {
    this.setState({
      todoItems: [
        ...this.state.todoItems, createItem(name)
      ]
    });
  };

  handleToggle = (id) => {
    const { todoItems } = this.state;
    const index = todoItems.findIndex(item => (item.id === id));
    const item = todoItems[index];
    this.setState({
      todoItems: [
        ...todoItems.slice(0, index),
        {
          ...item,
          finished: !item.finished
        },
        ...todoItems.slice(index + 1, todoItems.length)
      ]
    });
  };

  handleRemove = (id) => {
    const { todoItems } = this.state;
    const index = todoItems.findIndex(item => (item.id === id));
    this.setState({
      todoItems: [
        ...todoItems.slice(0, index),
        ...todoItems.slice(index + 1, todoItems.length)
      ]
    });
  }

  handleReset = () => {
    this.setState({
      todoItems: []
    })
  };

  render() {
    const { todoItems } = this.state;
    const {
      handleInsert,
      handleToggle,
      handleRemove,
      handleReset
    } = this;

    return (
      <div className="App">
        <h2>내가 할 일</h2>
        <TodoInsert onInsert={handleInsert}/>
        <TodoItemList
          items={todoItems}
          onToggle={handleToggle}
          onRemove={handleRemove}
          />
      </div>
    );
  }
}

export default App;
