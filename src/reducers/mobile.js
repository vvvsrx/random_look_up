import {
  SEARCH_MOBILENUMBER,
  HIDE_INPUTHIT,
  SHOW_INPUTHIT,
  CHANGE_NUMBER
} from "../actions/mobile";
import {Map} from 'immutable';

const initialState = Map({
  text: "",
  isShowHit: true,
  isShowMobileContent: false,
  mobileData: {
    // province: "",
    // city: "",
    // areacode: "",
    // zip: "",
    // company: "",
    // card: ""
  }
});

export default function mobile(state = initialState, action) {
  switch (action.type) {
    case SEARCH_MOBILENUMBER:
      state = state.set('isShowMobileContent',true);
      return state;
    case HIDE_INPUTHIT:
      return state.set('isShowHit',false);
    case SHOW_INPUTHIT:
      return state.set('isShowHit',true);
    case CHANGE_NUMBER:
      return state.set('text', action.number);
    default:
      return state;
  }
}
