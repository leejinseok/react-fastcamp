import { Map, List } from 'immutable';

// store (redux)
// state, action (dispatch)
const initialState = Map({
    counters: List([
        Map({
            number: 0,
            color: 'black'
        })
    ])
})

function count(state = initialState, action) {
    const counters = state.get('counters');
    switch (action.type) {
        case 'create': 
            return state.set('counters', counters.push(Map({
                color: action.color,
                number: 0
            })));
        case 'remove':
            return state.set('counters', counters.pop());
        case 'increment': 
            return state.set('counters', counters.update(
                action.index,
                (counter) => counter.set('number', counter.get('number') + 1)
            ));
        case 'decrement': 
            return state.set('counters', counters.update(
                action.index,
                (counter) => counter.set('number', counter.get('number') + 1)
            ));
        case 'set_color':
            return state.set('counters', counters.update(
                action.index,
                (counter) => counter.set('color', action.color)
            ));
        default:
            return state;
    }
};

export default count;