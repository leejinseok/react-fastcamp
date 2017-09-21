import React from 'react';

const Counter = ({
    number,
    CounterActions
}) => {
    return (
        <div>
            {number}
            <button onClick={CounterActions.increment}>+</button>
            <button onClick={CounterActions.decrement}>-</button>
        </div>
    )
}

export default Counter;