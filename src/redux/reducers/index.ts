import { combineReducers } from 'redux';
import todos from './todos';
import users from './user';
export default combineReducers({todos,users});