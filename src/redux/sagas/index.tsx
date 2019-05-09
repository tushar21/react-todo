import { put, takeLatest, all } from 'redux-saga/effects'
import UserSagas from './user'
// import CommonSagas from './common'

export default function* rootSaga() {
    yield all([
        UserSagas()
    ]);
 }
 