import React, { Component } from 'react';
import shortId from 'shortid';
import './App.css';
import TodoList from './components/TodoList';

function createItem (title) {
  return {
    id: shortId.generate(),
    title,
    finished: false
  };
}

class App extends Component {

  state = {
    input: '',
    todoItems:[]
  }

  constructor(props) {
    super(props);
    const todos = localStorage.getItem('todos');
    if(todos) {
      this.state = {
        todoItems: JSON.parse(todos)
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem('todos', JSON.stringify(this.state.todoItems));
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleSubmit = () => {
    const { input } = this.state;
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        createItem(input)
      ],
      input: ''
    });
  }

  handleRemove = (id) => {
    const { todoItems } = this.state;
    const index = todoItems.findIndex((item) => (item.id === id));
    this.setState({
      todoItems: [
        ...todoItems.slice(0, index),
        ...todoItems.slice(index + 1, todoItems.length)
      ]
    })
  }

  handleToggle = (id) => {
    const { todoItems } = this.state;
    const index = todoItems.findIndex((item) => (item.id === id));
    const item = todoItems[index];
    this.setState({
      todoItems:[
        ...todoItems.slice(0, index),
        {
          ...item,
          finished: !item.finished
        },
        ...todoItems.slice(index + 1, todoItems.length)
      ]
    })
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') {
      this.handleSubmit();
    }
  }

  render() {
    const { input, todoItems } = this.state;
    const {
      handleChange,
      handleSubmit,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;
    return (
      <div className="App">
        <h2>내가 해야 할일</h2>

        <input
          value={input}
          onChange={handleChange}
          onKeyPress={handleKeyPress}/>
        <button
          onClick={handleSubmit}>
          등록
        </button>
        <TodoList
          items={todoItems}
          onRemove={handleRemove}
          onToggle={handleToggle}
          />
      </div>
    );
  }
}

export default App;
