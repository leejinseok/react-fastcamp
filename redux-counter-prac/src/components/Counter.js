import React from 'react';
import './Counter.css';

const Counter = ({
    number,
    color,
    index,
    onIncrement,
    onDecrement,
    onSetColor
}) => {
    return(
        <div 
            className="Counter" 
            onClick={() => onIncrement(index)} 
            onContextMenu={
                (e) => { 
                    e.preventDefault(); 
                    onDecrement(index);
                }
            } 
            onDoubleClick={() => onSetColor(index)}
            style={{backgroundColor: color}}>
                {number}
        </div>
    )
}

export default Counter;