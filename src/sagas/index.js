import { takeEvery } from 'redux-saga/effects';

function* workerSaga() {
    console.log('From Worker');
}

//watcher saga
function* rootSaga() {
    yield takeEvery('HELLO', workerSaga);
}
export default rootSaga;
