import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {

    const activeStyle = {
        color: 'green',
        fontSize: '2rem'
    };

    return(
        <div>
            <ul>
                <li>
                    <NavLink exact to="/" activeStyle={activeStyle}>
                        홈
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/about" activeStyle={activeStyle}>
                        어바웃
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/about/foo" activeStyle={activeStyle}>
                        어바웃 푸
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Menu;
