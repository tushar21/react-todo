import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();
import rootSaga from './sagas';
import { routerMiddleware } from 'connected-react-router'

import { createBrowserHistory } from 'history'
export const history = createBrowserHistory()


// import TodoReducer from './reducers/todos'
const store = createStore(
    reducers(history),
    applyMiddleware(
        routerMiddleware(history),
        sagaMiddleware
    )
);
sagaMiddleware.run(rootSaga);
export default store;


