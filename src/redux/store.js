import {createStore} from "redux"
import reducer from "./reducer"
import {applyMiddleware} from "redux"
import createSagaMiddleware from "redux-saga"
import rootSaga from "./sagas"

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;