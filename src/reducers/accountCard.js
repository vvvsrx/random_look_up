import {SEARCH_ID_NUMBER,CHANGE_ID_NUMBER} from '../actions/accountCard'
import {Map} from 'immutable';

const initialState = Map({
  text: "",
  isShowContent: false
});

export default function accountCard(state = initialState,action)
{
    switch (action.type) {
        case SEARCH_ID_NUMBER:
            state = state.set('isShowContent',true);
            return state;
        case CHANGE_ID_NUMBER:
            return state.set('text',action.number);
        default:
            return state;
    }
}