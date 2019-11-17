import React from 'react';

import './toolbar.css';
import Logo from '../../logo/logo';
import NavigationItems from '../navigation-items/navigation-items/navigation-items';
import DrawerToggle from '../side-drawer/drawer-toggle/drawer-toggle';

const toolbar = ( props ) => (
    <header className='toolbar'>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className='Logo'>
            <Logo />
        </div>
        <nav className='DesktopOnly'>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;