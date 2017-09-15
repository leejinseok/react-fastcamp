import React, { Component } from 'react';
import { connect } from 'react-redux';

import Buttons from '../components/Buttons';
import CounterListContainer from '../containers/CounterListContainer';
import { getRandomColor } from '../utils';
import './App.css';

class App extends Component {
  render() {
    const { onCreate, onRemove } = this.props;
    return (
      <div className="App">
          <Buttons
                    onCreate={onCreate}
                    onRemove={onRemove}
                />
        <CounterListContainer />
      </div>
    );
  }
}

// 액션함수 준비
const mapToDispatch = (dispatch) => ({
  onCreate: () => dispatch({type: 'create', color: getRandomColor()}),
  onRemove: () => dispatch({type: 'remove'})
});


export default connect(null, mapToDispatch)(App);
