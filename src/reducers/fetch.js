import {
    FETCH_REQUEST,
    FETCH_SUCCESS,
    FETCH_ERROR
} from '../actions/fetch'


export default function fetch(state = {}, action) {
    switch(action.type)
    {
        case FETCH_REQUEST:
        return state;
        case FETCH_SUCCESS:
        return {...state,data:action.payload};
        case FETCH_ERROR:
        return state;
        default:
        return state;
    }
}