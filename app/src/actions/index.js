// www.thecocktaildb.com/api/json/v1/1/random.php API 
import axios from 'axios';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const fetchDrink = () => {
    return (dispatch => {
        dispatch(fetchStart());
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
            .then(resp => {
                dispatch(fetchSuccess(resp.data.drinks[0]));
            })
            .catch(err => {
                dispatch(fetchFail(err));
            });
    });
}

export const fetchStart = () => {
    return({type: FETCH_START});
}

export const fetchSuccess = (drink) => {
    return({type: FETCH_SUCCESS, payload: drink});
}

export const fetchFail = (error) => {
    return({type: FETCH_FAIL, payload: error});
}