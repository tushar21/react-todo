import { put, takeLatest, all } from 'redux-saga/effects'
import {signupActionWatcher, loginActionWatcher} from './user'

export default function* rootSaga() {
    yield all([
        signupActionWatcher(),
        loginActionWatcher()
    ]);
 }
 