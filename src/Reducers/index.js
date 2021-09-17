import { combineReducers } from "redux";
import test from "./fetchTest";
import tier from "./tier"
import answers from "./answers";
import result from "./result";
import auth from "./auth";
export default combineReducers({
    test,
    tier,
    answers,
    result,
    auth
})