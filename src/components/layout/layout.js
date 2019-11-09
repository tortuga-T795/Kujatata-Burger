import React, {Component} from 'react';
import './layout.css';
import Aux from "../../hoc";
import SideDrawer from "../navigation/side-drawer";
import Toolbar from '../navigation/toolbar';


class Layout extends Component {

    state = {
        showSideDrawer: false
    };

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    };

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    };

    render() {
        return (
            <Aux>
                <Toolbar drawToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer
                    show={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                />
                <main className='content'>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;