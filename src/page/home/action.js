import createAction from "../../redux/createAction"
import {ADD, ADD_ASYNC, REDUCE} from "./actontype"
const addNum = (data) => {return createAction(ADD,data)}
const addAsyncNum = (data) => {return createAction(ADD_ASYNC, data)}
const reduceNum = (data) => {return createAction(REDUCE,data)}

export {addNum, addAsyncNum, reduceNum}