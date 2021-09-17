import * as api from '../api';
import { AUTHENTICATING, LOGGED_IN, LOGIN_FAILED } from './actionTypes.js';

export const login = (formData,history) => async(dispatch)=>{
    dispatch({
        type: AUTHENTICATING
    });
    try{
        const response = await api.login(formData);
        if(response.token){
            dispatch({
                type:LOGGED_IN,
                payload:{
                    token:response.token,
                    _id:response.result._id
                }
            })
        }
        else{
            dispatch({
                type: LOGIN_FAILED
            })
        }
    }catch(error){
        dispatch({
            type:LOGIN_FAILED
        })
    }
}