export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';


export function fetchRequest() {
  return {
    type: FETCH_REQUEST
  };
}

export function fetchSuccess(data) {
  return {
    type: FETCH_SUCCESS,
    payload:data
  };
}

export function fetchError() {
  return {
    type: FETCH_ERROR
  };
}



export function GetDataAsync(url) {
    return (dispatch) => {
    dispatch(fetchRequest());
    return fetchGets(url).then(([response, json]) =>{
        if(response.status === 200){
        dispatch(fetchSuccess(json.result))
      }
      else{
        dispatch(fetchError())
      }
    })
  }
}

function fetchGets(url) {
  return fetch(url, { method: 'GET'})
     .then( response => Promise.all([response, response.json()]));
}