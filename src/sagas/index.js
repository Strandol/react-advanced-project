import { call, put, takeEvery } from 'redux-saga/effects';

function mockAuth(user) {
    return new Promise((resolve) => {
        return resolve(user.username === 'dvalian');
    })
}

function* authUser(action) {
    let isSignIn = yield call(mockAuth, action.payload);
    yield put({ type: "AUTH_USER_SUCCESS", isSignIn });
}

export default function* rootSaga() {
    yield takeEvery("AUTH_USER", authUser);
}