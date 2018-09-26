import { takeLatest } from 'redux-saga/effects';
import * as constants from '../constant';
import { LoginUser, SignupUser } from '../actions/login';

export function* watcherSaga () {
    yield takeLatest(constants.LOGIN_REQUEST, LoginUser);
}

export default function* rootSaga () {
    yield [
        watcherSaga(),
    ]
}