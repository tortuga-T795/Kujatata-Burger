import React from 'react';

import Burger from '../../burger/burger/burger';
import Button from '../../ui/button/button';
import './checkout-summary.css';

const checkoutSummary = (props) => {
    return (
        <div className='checkout-summary'>
            <h1>We hope it tastes well!</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <Button 
                btnType="Danger"
                clicked={props.checkoutCancelled}>CANCEL</Button>
            <Button 
                btnType="Success"
                clicked={props.checkoutContinued}>CONTINUE</Button>
        </div>
    );
}

export default checkoutSummary;