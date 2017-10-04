import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return(
        <div>
            <ul>
                <li><Link to="/">홈</Link></li>
                <li><Link to="/about">어바웃</Link></li>
                <li><Link to="/about/foo">어바웃 푸</Link></li>
            </ul>
        </div>
    )
}

export default Menu;
