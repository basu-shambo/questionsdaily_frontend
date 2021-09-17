import { AUTHENTICATING , LOGGED_IN, LOGIN_FAILED } from "../Actions/actionTypes";
const initState = {
    authData:{},
    loading:false,
    error:null
}; 
const auth = (state=initState,action)=>{
    switch(action.type){
        case AUTHENTICATING:
            return {
                ...state,
                loading:true,
                error : null
            }
        case LOGGED_IN:
            return {
                ...state,
                authData:action.payload,
                loading:false,
                error:null
            }
        case LOGIN_FAILED:
            return {
                ...state,
                loading:false,
                error:true
            }

        default:
            return state;
    }
}

export default auth;