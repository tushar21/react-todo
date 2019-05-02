import { put, takeLatest, all } from 'redux-saga/effects';
import User from '../../types/user'
import {Signup, Login} from '../../services/user';

interface ActionType{
    type: string,
    payload: User
}

function* userSignup(action: ActionType) {
    const json = yield Signup(action.payload);
    yield put({ type: 'USER_SIGNUP_SUCCESS', payload: json.data })
    alert('Signup success');
}

export function* signupActionWatcher() {
    yield takeLatest('USER_SIGNUP', userSignup)
}


function* userLogin(action: any) {
    const json = yield Login(action.payload);
    yield put({ type: 'USER_LOGIN_SUCCESS', payload: json.data })
    alert('Login success');
}

export function* loginActionWatcher() {
    yield takeLatest('USER_LOGIN', userLogin)
}
