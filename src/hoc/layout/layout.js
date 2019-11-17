import React, { Component } from 'react';

import Aux from '../hoc-aux/hoc-aux';
import './layout.css'
import Toolbar from '../../components/navigation/toolbar/toolbar';
import SideDrawer from '../../components/navigation/side-drawer/sode-drawer/sode-drawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }

    render () {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main className='Content'>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;