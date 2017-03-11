import { combineReducers } from 'redux';
import mobile from './mobile';
import fetch from './fetch';
import accountCard from './accountCard';

const rootReducer = combineReducers({
  mobile,
  fetch,
  accountCard
});

export default rootReducer;