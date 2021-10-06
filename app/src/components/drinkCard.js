import React from 'react';
import { connect } from 'react-redux';

const DrinkCard = (props) => {

    const { drink } = props;

    return(
            <div className="drink-card">
                <div className="drink-top">
                    <div className="drink-pic">
                        <img src={drink.strDrinkThumb} alt="drink thumbnail"/>
                    </div>
                    <div className="drink-info">
                        <h4>{drink.strDrink}</h4>
                        <p>Category: {drink.strCategory}</p>
                        <p>{drink.strAlcoholic}</p>
                        <p>Recommended serving glass: {drink.strGlass}</p>
                        <div className="ing">
                            <ul><span>Ingredients</span>
                                <li>{drink.strMeasure1} {drink.strIngredient1}</li>
                                <li>{drink.strMeasure2} {drink.strIngredient2}</li>
                                <li>{drink.strMeasure3} {drink.strIngredient3}</li>
                                <li>{drink.strMeasure4} {drink.strIngredient4}</li>
                                <li>{drink.strMeasure5} {drink.strIngredient5}</li>
                                <li>{drink.strMeasure6} {drink.strIngredient6}</li>
                                <li>{drink.strMeasure7} {drink.strIngredient7}</li>
                                <li>{drink.strMeasure8} {drink.strIngredient8}</li>
                                <li>{drink.strMeasure9} {drink.strIngredient9}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="drink-instructions">
                    <p>Instructions: {drink.strInstructions}</p>
                </div>
            </div>
    )
}

const mapStatetoProps = (state) => {
    return {
        drink: state.drink,
    }
}


export default connect(mapStatetoProps)(DrinkCard);