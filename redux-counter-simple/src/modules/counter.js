import { createAction, handleActions} from 'redux-actions';
import { Map } from 'immutable';

const initialState = Map({
    number: 1
})

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

export const incrementAsync = () => dispatch => {
    setTimeout(
        () => { dispatch(increment()) },
        1000
    );
}

export const decrementAsync = () => dispatch => {
    setTimeout(
        () => { dispatch(decrement()); },
        1000
    )
}

export default handleActions({
    [INCREMENT]: (state, action) => {
        return state.set('number', state.get('number') + 1);
    },
    [DECREMENT]: (state, action) => {
        return state.set('number', state.get('number') - 1);
    }
}, initialState);