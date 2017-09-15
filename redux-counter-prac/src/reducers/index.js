// store (redux)
// state, action (dispatch)
const initialState = {
    counters: [
        {
            number: 0,
            color: 'black'
        }
    ]
}

function count(state = initialState, action) {
    const { counters } = state;
    switch (action.type) {
        case 'create': 
            return {
                counters: [
                    ...counters,
                    {
                        color: action.color,
                        number: 0
                    }
                ]
            }
        case 'remove':
            return {
                counters: counters.slice(0, counters.length - 1)
            }
        case 'increment': 
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        number: counters[action.index].number + 1
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            }
        case 'decrement': 
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        number: counters[action.index].number - 1
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            }
        case 'set_color':
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        color: action.color,
                        number: counters[action.index].number
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            }
        default:
            return state;
    }
};

export default count;