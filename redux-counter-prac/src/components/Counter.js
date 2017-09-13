import React from 'react';
import './Counter.css';

const Counter = ({
    number,
    color,
    onIncrement
}) => {
    return(
        <div 
            className="Counter"
            style={{backgroundColor: color}}
            onClick={onIncrement}
        >
            {number}
        </div>
    )
}

export default Counter;