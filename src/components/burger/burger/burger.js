import React from 'react';

import './burger.css'
import BurgerIngredient from '../burger-ingredient/burger-ingredient';

const burger = ( {ingredients} ) => {
    let transformedIngredients = Object.keys(ingredients).some(name => ingredients[name] > 0) ?
        Object.keys(ingredients).map(ing => {
            return [...Array(ingredients[ing])].map((_,i) => {
                return <BurgerIngredient key={ing + i} type={ing}/>;
            })
        }) : <>fill the yummy :3</>;
    return (
        <div className='burger'>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;