import { put, takeLatest, all } from 'redux-saga/effects'
import actionWatcher from './user'

export default function* rootSaga() {
    yield all([
    actionWatcher(),
    ]);
 }
 