import { createStore } from 'redux'
import reducers from './reducers'
// import TodoReducer from './reducers/todos'
export default createStore(reducers);