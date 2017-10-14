import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';


const Menu = ({history}) => {
    const activeStyle = {
        color: 'green',
        fontSize: '2rem'
    };
    
    return (
        <div>
            <ul>
                <li><NavLink exact to="/" activeStyle={activeStyle}>홈</NavLink></li>
                <li><NavLink exact to="/about" activeStyle={activeStyle}>소개</NavLink></li>
                <li><NavLink to="/about/foo" activeStyle={activeStyle}>About foo</NavLink></li>
                
                <button onClick={() => {
                    history.push('/');
                }}>
                    ClickMe
                </button>
            </ul>
        </div>
    )
}

export default withRouter(Menu);