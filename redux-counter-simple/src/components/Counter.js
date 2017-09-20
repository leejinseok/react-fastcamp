import React from 'react';

const Counter = ({
    number,
    CounterActions
}) => {
    return (
        <div>
            <h2>
                {number}
            </h2>
            <button onClick={CounterActions.increment}>+</button>
            <button onClick={CounterActions.decrement}>-</button>
        </div>
    )
}
export default Counter;