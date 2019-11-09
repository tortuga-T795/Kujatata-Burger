import React from 'react';

import './navigation-items.css';
import NavigationItem from '../navigation-item';

const navigationItems = () => (
    <ul className='navigation-items'>
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default navigationItems;