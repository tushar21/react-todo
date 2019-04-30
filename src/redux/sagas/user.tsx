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

export default function* signupActionWatcher() {
    yield takeLatest('USER_SIGNUP', userSignup)
}
