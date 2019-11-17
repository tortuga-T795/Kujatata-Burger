import React from 'react';
import { NavLink } from 'react-router-dom';

import './navigation-item.css';

const navigationItem = ( props ) => (
    <li className='navigation-item'>
        <NavLink 
            to={props.link}
            exact={props.exact}
            activeClassName='active'>{props.children}</NavLink>
    </li>
);

export default navigationItem;