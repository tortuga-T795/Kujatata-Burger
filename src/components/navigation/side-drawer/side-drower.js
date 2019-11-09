import React from 'react';
import './side-drawer.css';
import NavigationItems from "../navigation-items/navigation-items";
import Logo from "../../logo";
import Backdrop from "../../ui/backdrop";
import Aux from "../../../hoc";


const sideDrawer = ( props ) => {
    const attachedClasses = (props.show) ? "side-drawer open" : "side-drawer close";
    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.closed}/>
            <div className={attachedClasses}>
                <div className='side-logo'>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;