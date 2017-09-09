import * as types from './ActionTypes';

export const increment = () => {
    return {
        type: types.INCREMENT
    }
};

export const decrement = () => {
    return {
        type: types.DECREMENT
    }
}

export const setColor = (color) => {
    return {
        type: types.SET_COLOR,
        color
    }
}
