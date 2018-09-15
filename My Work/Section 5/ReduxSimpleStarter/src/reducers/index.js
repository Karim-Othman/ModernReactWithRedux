import { combineReducers } from 'redux';
import weatherReducer from './reducer-weather';
const rootReducer = combineReducers({
  weather:weatherReducer
});

export default rootReducer;
