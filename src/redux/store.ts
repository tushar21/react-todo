import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();
import rootSaga from './sagas';



// import TodoReducer from './reducers/todos'
const store = createStore(reducers,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;


