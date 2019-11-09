import React from 'react';

import './build-controls.css';
import BuildControl from '../build-control';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

const buildControls = ({ingredientAdded, ingredientRemoved, disabled, purchasable, price, order}) => (
    <div className='build-controls'>
        <p>Current price: <strong>{price.toFixed(2)}</strong></p>
        {controls.map( ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={()=>ingredientAdded(ctrl.type)}
                removed={()=>ingredientRemoved(ctrl.type)}
                disabled={disabled[ctrl.type]}/>
        ))}
        <button className='order-button' onClick={order} disabled={!purchasable}>ORDER NOW</button>
    </div>
);

export default buildControls;