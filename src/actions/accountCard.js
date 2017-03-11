export const SEARCH_ID_NUMBER = "SEARCH_ID_NUMBER";
export const CHANGE_ID_NUMBER = "CHANGE_ID_NUMBER";

export function search() {
  return {
    type: SEARCH_ID_NUMBER,
  };
}

export function changeText(text) {
  return {
    type: CHANGE_ID_NUMBER,
    number: text
  };
}

export function textInputChange(obj) {
  return dispatch => {
    dispatch(changeText(obj.text));
  };
}

export function getData(data) {
  return dispatch => {
    dispatch(search());
  };
}
