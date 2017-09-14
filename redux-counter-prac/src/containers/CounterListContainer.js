import CounterList from '../components/CounterList';
import { connect } from 'react-redux';
import { getRandomColor } from '../utils';

// store 안의 state 값을 props 로 연결해줍니다.
const mapStateToProps = (state) => ({
    counters: state.counters
});

const mapDispatchProps = (dispatch) => ({
    onIncrement: (index) => dispatch({type: 'increment', index}),
    onDecrement: (index) => dispatch({type: 'decrement'}),
    onSetColor: (index) => dispatch({type: 'set_color', color: getRandomColor(), index})
});

const CounterListContainer = connect(
    mapStateToProps,
    mapDispatchProps
)(CounterList);

export default CounterListContainer;

