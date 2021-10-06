// www.thecocktaildb.com/api/json/v1/1/random.php API 
import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const getDrink = () => {
    return (dispatch => {
        dispatch()
    })
}

export const fetchStart = () => {
    return({type: FETCH_START});
}