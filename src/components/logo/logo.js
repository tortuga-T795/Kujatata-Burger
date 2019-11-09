import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import './logo.css';

const logo = (props) => (
    <div className='logo' style={{height: props.height}}>
        <img src={burgerLogo} alt="MyBurger" />
    </div>
);

export default logo;