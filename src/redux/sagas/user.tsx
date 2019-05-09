import { put, takeLatest, all, call, delay } from 'redux-saga/effects';
import User from '../../types/user'
import { Signup, Login } from '../../services/user';
import { push } from 'connected-react-router'
import { ACTIONS, CONFIGS } from '../../helpers/constants';

interface ActionType {
    type: string,
    payload: User
}

function* userSignup(action: ActionType) {
    const json = yield Signup(action.payload);
    yield put({ type: ACTIONS.SHOW_NOTIFICATION, payload: {message: 'Signup Success !! You can login now', type: 'success'} })
    yield put({ type: ACTIONS.USER_SIGNUP_SUCCESS, payload: json.data })
}

export default function* ActionWatchers() {
    yield takeLatest(ACTIONS.USER_SIGNUP, userSignup)
    yield takeLatest(ACTIONS.USER_LOGIN, userLogin)
}


function* userLogin(action: any) {
    yield put({ type: ACTIONS.APP_LOADER, payload: true })
    try {
        const json = yield Login(action.payload);
        localStorage.setItem(ACTIONS.LOGGED_IN_USER, JSON.stringify(json.data))
        yield put({ type: ACTIONS.USER_LOGIN_SUCCESS, payload: json.data })
        yield put({ type: ACTIONS.APP_LOADER, payload: false })
        yield put({ type: ACTIONS.SHOW_NOTIFICATION, payload: {message: 'Login success!! Redirecting  to dashboard', type: 'success'} })
        yield delay(2000);
        yield put({ type: ACTIONS.HIDE_NOTIFICATION})
        yield put(push(CONFIGS.DEFAULT_APP_PATH))
    } catch (error) {
        const err = error.response.data.error.message;
        yield put({ type: ACTIONS.SHOW_NOTIFICATION, payload: {message: err, type: 'error'} })
        yield put({ type: ACTIONS.APP_LOADER, payload: false })
    }
    
}
