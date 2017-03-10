import { combineReducers } from 'redux';
import mobile from './mobile';
import fetch from './fetch';

const rootReducer = combineReducers({
  mobile,
  fetch
});

export default rootReducer;