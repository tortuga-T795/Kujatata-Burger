import React from 'react';

import './burger-ingredient.css';

const burgerIngredient = ({type}) => {
    switch ( type ) {
        case ( 'bread-bottom' ):
            return <div className='bread-bottom'/>;
        case ( 'bread-top' ):
            return (
                <div className='bread-top'>
                    <div className='seeds1'/>
                    <div className='seeds2'/>
                </div>
            );
        case ( 'meat' ):
            return <div className='meat'/>;
        case ( 'cheese' ):
            return <div className='cheese'/>;
        case ( 'bacon' ):
            return <div className='bacon'/>;
        case ( 'salad' ):
            return <div className='salad'/>;
        default:
            return  null;
    }
};

export default burgerIngredient;