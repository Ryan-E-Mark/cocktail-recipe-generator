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
                        <p><span className='b-font'>Category:</span> {drink.strCategory}</p>
                        <p><span className='b-font'>{drink.strAlcoholic}</span></p>
                        <p><span className='b-font'>Recommended serving glass:</span> {drink.strGlass}</p>
                        <div className="ing">
                            <ul><span className='underline'>Ingredients</span>
                                <li>{drink.strMeasure1} {drink.strIngredient1}</li>
                                <li>{drink.strMeasure2} {drink.strIngredient2}</li>
                                <li>{drink.strMeasure3} {drink.strIngredient3}</li>
                                <li>{drink.strMeasure4} {drink.strIngredient4}</li>
                                <li>{drink.strMeasure5} {drink.strIngredient5}</li>
                                <li>{drink.strMeasure6} {drink.strIngredient6}</li>
                                <li>{drink.strMeasure7} {drink.strIngredient7}</li>
                                <li>{drink.strMeasure8} {drink.strIngredient8}</li>
                                <li>{drink.strMeasure9} {drink.strIngredient9}</li>
                                <li>{drink.strMeasure10} {drink.strIngredient10}</li>
                                <li>{drink.strMeasure11} {drink.strIngredient11}</li>
                                <li>{drink.strMeasure12} {drink.strIngredient12}</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="drink-instructions">
                    <p><span className='underline'>Instructions: </span> {drink.strInstructions}</p>
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
