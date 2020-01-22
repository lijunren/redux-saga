import {call, put, takeEvery} from "redux-saga/effects"
import {ADD_ASYNC} from "./actontype"
import {addNum} from "./action"

function* addAsyncNum() {
    const res = yield call(delay, 1000)
    console.log("res", res);
    yield put(addNum())
}

export default function* watchIncrementAsync() {
    yield takeEvery(ADD_ASYNC, addAsyncNum)
}

function delay(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1)
        }, time)
    })
}