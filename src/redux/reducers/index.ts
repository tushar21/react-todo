import { combineReducers } from 'redux';
import todos from './todos';
import users from './user';
import common from './common'
import { connectRouter } from 'connected-react-router'


export default (history:any) => combineReducers({router: connectRouter(history), todos,users,common});