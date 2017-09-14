// store (redux)
// state, action (dispatch)
const initialState = {
    number: 0,
    color: 'black'
}

function count(state = initialState, action) {
    switch (action.type) {
        case 'increment': 
            return {
                ...state,
                number: state.number + 1
            };
        case 'decrement':
            return {
                ...state,
                number: state.number - 1
            }
        case 'set_color':
            return {
                ...state,
                color: action.color
            }
        default:
            return state;
    }
};

export default count;