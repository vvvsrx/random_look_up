export const SEARCH_MOBILENUMBER = "SEARCH_MOBILENUMBER";
export const HIDE_INPUTHIT = "HIDE_INPUTHIT";
export const SHOW_INPUTHIT = "SHOW_INPUTHIT";
export const CHANGE_NUMBER = "CHANGE_NUMBER";

export function search(data) {
  return {
    type: SEARCH_MOBILENUMBER,
    responseData:data
  };
}

export function hideInputHit() {
  return {
    type: HIDE_INPUTHIT
  };
}

export function showInputHit() {
  return {
    type: SHOW_INPUTHIT
  };
}

export function changeText(text) {
  return {
    type: CHANGE_NUMBER,
    number: text
  };
}

export function textInputChange(obj) {
  return dispatch => {
    if (obj.text === "") {
      dispatch(showInputHit());
    } else {
      dispatch(hideInputHit());
    }
    dispatch(changeText(obj.text));
  };
}

export function getData(data) {
  return dispatch => {
    dispatch(search(data));
  };
}
