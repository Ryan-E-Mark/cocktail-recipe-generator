import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from "../actions";


const initialState = {
    drink: {

    },
    fetching: false,
    error: ''
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return {
                ...state,
                drink: {},
                fetching: true,
                error: ''
            }
        case FETCH_SUCCESS:
            return (
                console.log('yup')
            )
        case FETCH_FAIL:
            return {

            }
        default:
            return state;
    }
}

export default reducer;