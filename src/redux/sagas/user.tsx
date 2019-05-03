import { put, takeLatest, all } from 'redux-saga/effects';
import User from '../../types/user'
import {Signup, Login} from '../../services/user';
import { push } from 'connected-react-router'
import {ACTIONS, CONFIGS} from '../../helpers/constants';

interface ActionType{
    type: string,
    payload: User
}

function* userSignup(action: ActionType) {
    const json = yield Signup(action.payload);
    alert('Signup success');
    yield put({ type: ACTIONS.USER_SIGNUP_SUCCESS, payload: json.data })    
}

export default function* ActionWatchers() {
    yield takeLatest(ACTIONS.USER_SIGNUP, userSignup)
    yield takeLatest(ACTIONS.USER_LOGIN, userLogin)
}


function* userLogin(action: any) {
    const json = yield Login(action.payload);
    localStorage.setItem(ACTIONS.LOGGED_IN_USER, JSON.stringify(json.data))
    yield put({ type:  ACTIONS.USER_LOGIN_SUCCESS, payload: json.data })
    alert('Login success')
    yield put(push(CONFIGS.DEFAULT_APP_PATH))
}
