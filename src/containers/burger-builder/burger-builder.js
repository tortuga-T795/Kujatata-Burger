import React, { Component } from "react";
import Burger from "../../components/burger/burger";
import BuildControls from "../../components/burger/build-controls/build-controls";
import Layout from "../../components/layout";
import Modal from "../../components/ui/modal";
import OrderSummary from "../../components/burger/order-summary";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false
    };

    updatePurchaseState (ingredients) {
        const sum = Object.keys( ingredients )
            .map( igKey => {
                return ingredients[igKey];
            } )
            .reduce( ( sum, el ) => {
                return sum + el;
            }, 0 );
        this.setState( { purchasable: sum > 0 } );
    };

    addIngredientHandler = ( type ) => {
        const updatedIngredients = {...this.state.ingredients, [type]: this.state.ingredients[type] + 1};
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
        this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
        this.updatePurchaseState(updatedIngredients);
    };

    removeIngredientHandler = ( type ) => {
        if ( this.state.ingredients[type] <= 0 )
            return;
        const updatedIngredients = {...this.state.ingredients, [type]: this.state.ingredients[type] - 1};
        const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
        this.setState( { totalPrice: newPrice, ingredients: updatedIngredients } );
        this.updatePurchaseState(updatedIngredients);
    };

    purchaseHandler = () => {
        this.setState({purchasing: true})
    };

    purchaseCloseHandler = () => {
        this.setState({purchasing: false})
    };

    purchaseContinue = () => {
        alert('Что ты тут хотел увидеть?');
    };

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return(
            <div>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCloseHandler}>
                    <OrderSummary ingredients={this.state.ingredients}
                                  price={this.state.totalPrice}
                                  purchaseCancelled={this.purchaseCloseHandler}
                                  purchaseContinued={this.purchaseContinue}/>
                </Modal>
                <Layout>
                    <Burger {...this.state.ingredients}/>
                    <BuildControls
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        purchasable={this.state.purchasable}
                        order={this.purchaseHandler}
                        price={this.state.totalPrice}
                    />
                </Layout>
            </div>
        )
    }
}

export default BurgerBuilder;