import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoInsert extends Component {
  static propTypes = {
    onInsert: PropTypes.func
  };

  static defaultProp = {
    onInsert: () => console.warn('onInsert is not found')
  };

  state = {
    input: ''
  };

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleClick = () => {
    const { input } = this.state;
    this.props.onInsert(input);
    this.setState({
      input: ''
    });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  }

  render() {
    const { input } = this.state;
    const {
      handleChange,
      handleClick,
      handleKeyPress
    } = this;

    return(
      <div>
        <input
          type="text"
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          value={input}/>
          <button onClick={handleClick}>
            등록
          </button>
      </div>
    )
  }
}

export default TodoInsert;
