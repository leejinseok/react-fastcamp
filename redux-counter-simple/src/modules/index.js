import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

const initialState = Map({
    number: 0
});

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

export default handleActions({
    [INCREMENT]: (state, action) => {
        return state.set('number', state.get('number') + 1);
    },
    [DECREMENT]: (state, action) => {
        return state.set('number', state.get('number') - 1);
    }
},initialState)

