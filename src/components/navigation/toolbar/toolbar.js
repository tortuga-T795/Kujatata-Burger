import React from 'react';
import './toolbar.css';
import Logo from '../../logo'
import NavigationItems from "../navigation-items/navigation-items/navigation-items";
import DrawerToggle from "../drower-toggle";


const toolbar = ( {drawToggleClicked} ) => (
    <header className='toolbar'>
        <DrawerToggle clicked={drawToggleClicked}/>
        <div className='tool-logo'>
            <Logo/>
        </div>
        <nav className='desktop-only'>
            <NavigationItems/>
        </nav>
    </header>
);

export default toolbar;