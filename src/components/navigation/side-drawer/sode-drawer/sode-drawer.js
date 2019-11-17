import React from 'react';

import Logo from '../../../logo/logo';
import './sode-drawer.css';
import Backdrop from '../../../ui/backdrop/backdrop';
import Aux from '../../../../hoc/hoc-aux/hoc-aux';
import NavigationItems from "../../navigation-items/navigation-items/navigation-items";

const sideDrawer = ( props ) => {
    let attachedClasses = 'side-drawer close';
    if (props.open) {
        attachedClasses = 'side-drawer open';
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses}>
                <div className='logo-side'>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;