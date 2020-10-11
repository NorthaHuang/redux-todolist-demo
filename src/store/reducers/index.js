import { combineReducers } from 'redux';
import * as reducers from './reducers';

/** Root Reducer */
const rootReducer = combineReducers(reducers);

export default rootReducer;
