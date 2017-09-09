import React, {PropTypes} from 'react';
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
            className='Counter'
            onClick={onIncrement}
            onDoubleClick={onSetColor}
            onContextMenu={
                (e) => {
                    e.preventDefault();
                    onDecrement();
                }
            } 
            style={{
                backgroundColor: color
            }}
        >
            {number}
        </div>
    )
}

Counter.PropTypes = {
    number: PropTypes.number,
    color: PropTypes.string,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func
};

Counter.defaultProps = {
    number: 0,
    color: 'black',
    onIncrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
    onSetColor: () => console.warn('onSetColor not defined')
};

export default Counter;
