import {all} from "redux-saga/effects"
import helloSaga from "./hellosaga"
import home from "../page/home/saga"

export default function* rootSaga() {
    yield all([
        helloSaga(),
        home()
    ])
}