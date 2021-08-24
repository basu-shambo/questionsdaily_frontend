import { combineReducers } from "redux";
import test from "./fetchTest";
import num from "./num"
import answers from "./answers";
import result from "./result";
import auth from "./auth";
export default combineReducers({
    test,
    num,
    answers,
    result,
    auth
})