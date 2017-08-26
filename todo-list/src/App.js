import React, { Component } from 'react';
import shortId from 'shortid'
import TodoInsert from './components/TodoInsert';
import TodoItemList from './components/TodoItemList';

function createItem (name) {
   return {
        id: shortId.generate(),
        name,
        finished: false
    }
}

// 기본 Todo 목록 설정
const defaultTodos = [
    '리액트 시작하기',
    '컴포넌트 이해하기',
    'props/state 사용하기',
    'LifeCycle API'
].map(createItem); // 각 원소들을 createItem 함수를 실행해서 변환해준다

class App extends Component {
  state = {
    todoItems: defaultTodos
  }

  constructor (props) {
    super(props);
    const todos = localStorage.getItem('todos');
    if (todos) {
      this.state = {
        todoItems: JSON.parse(todos)
      }
    }
  }

  componentDidUpdate (prevProps, prevState) {
    localStorage.setItem('todos', JSON.stringify(this.state.todoItems));
  }

  handleInsert = (name) => {
    this.setState({
      todoItems: [
        ...this.state.todoItems, createItem(name)
      ]
    });
  }

  handleToggle = (id) => {
    const { todoItems } = this.state;
    const index = todoItems.findIndex((item) => item.id === id);
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
    })
  }

  handleRemove = (id) => {
    const { todoItems } = this.state;
    const index = todoItems.findIndex((item) => item.id === id);

    this.setState({
      todoItems: [
        ...todoItems.slice(0, index),
        ...todoItems.slice(index + 1, todoItems.length)
      ]
    })
  }

  handleReset = () => {
    this.setState({
      todoItems: defaultTodos
    })
  }

  render() {
    const {
      handleInsert,
      handleToggle,
      handleRemove,
      handleReset
    } = this;

    const { todoItems } = this.state;
    return (
      <div className="App">
        <h1>TODO LIST</h1>
        <TodoInsert onInsert={handleInsert}/>
        <TodoItemList
          items={todoItems}
          onToggle={handleToggle}
          onRemove={handleRemove}/>
      </div>
    );
  }
}

export default App;
