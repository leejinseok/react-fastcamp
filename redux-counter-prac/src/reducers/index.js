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
        default:
            return state;
    }
};

export default count;