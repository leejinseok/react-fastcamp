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
                <li><NavLink to="/posts" activeStyle={activeStyle}>Posts</NavLink></li>
            </ul>
            <button onClick={
                () => {
                    history.push('/');
                }
            }>
                Click Me!
            </button>
        </div>
    )
}

export default withRouter(Menu);