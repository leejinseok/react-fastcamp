import React, {PropTypes} from 'react';
import CounterContainer from './CounterContainer';

export default class App extends React.Component {
  render() {
    return (
        <div>
            <CounterContainer />
        </div>
    );
  }
}
