import Counter from '../components/Counter';
import { connect } from 'react-redux';

// store 안의 state 값을 props 로 연결해줍니다.
const mapStateToProps = (state) => ({
    color: state.color,
    number: state.number
});

const mapDispatchProps = (dispatch) => ({
    onIncrement: () => dispatch({type: 'increment'})
});

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchProps
)(Counter);

export default CounterContainer;

