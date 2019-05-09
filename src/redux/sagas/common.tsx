import { put, takeLatest } from 'redux-saga/effects';
import User from '../../types/user'
import { ACTIONS } from '../../helpers/constants';

interface ActionType {
    type: string,
    payload: User
}
// Not imported anywhere for now
function* handleAppLoader(action: ActionType){
    yield put({ type: ACTIONS.APP_LOADER, payload: action.payload})
}

export default function* ActionWatchers() {
    yield takeLatest(ACTIONS.APP_LOADER, handleAppLoader);
}
