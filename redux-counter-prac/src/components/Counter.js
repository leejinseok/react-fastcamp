import React from 'react';
import './Counter.css';

const Counter = ({
    number,
    color,
    onIncrement,
    onDecrement,
    onSetColor
}) => {
    return(
        <div 
            className="Counter"
            style={{backgroundColor: color}}
            onClick={onIncrement}
            onDoubleClick={onSetColor}
            onContextMenu={
                (e) => {
                    e.preventDefault();
                    onDecrement();
                }
            }
        >
            {number}
        </div>
    )
}

export default Counter;