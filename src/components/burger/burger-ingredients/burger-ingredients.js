import React from 'react';
import './burger-ingredients.css';

const burgerIngredients = ({type}) => {
  switch (type) {
      case ( 'bread-bottom' ):
          return <div className="breadBottom"/>;
      case ( 'bread-top' ):
          return (
              <div className='breadTop'>
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
          return null;
  }  
};

export default burgerIngredients;