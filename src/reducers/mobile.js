import {
  SEARCH_MOBILENUMBER,
  HIDE_INPUTHIT,
  SHOW_INPUTHIT,
  CHANGE_NUMBER
} from "../actions/mobile";
import {Map} from 'immutable';

const initialState = Map({
  text: "1860167560",
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

  console.log(action.type);
  switch (action.type) {
    case SEARCH_MOBILENUMBER:
      state = state.set('isShowMobileContent',true);
      return state;
    case HIDE_INPUTHIT:
      return state.set('isShowHit',false);
    case SHOW_INPUTHIT:
      return state.set('isShowHit',true);
    case CHANGE_NUMBER:
      console.log(state.get('text'));
      return state.set('text', action.number);
      //return state;
    default:
      return state;
  }
}
