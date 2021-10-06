import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

const DrinkCard = (props) => {

    const { drink } = props;

    console.log(drink);
    return(
        <div>
            <h3>Todays drink is: {drink.strDrink}</h3>
            
        </div>
    )
}

const mapStatetoProps = (state) => {
    return {
        drink: state.drink,
    }
}


export default connect(mapStatetoProps)(DrinkCard);