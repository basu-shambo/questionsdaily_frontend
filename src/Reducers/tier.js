import { FREE, PREMIUM } from "../Actions/actionTypes"
const tier = (state=10,action)=>{
    switch(action.type){
        case FREE:
            return {
                ...state,
                num:10
            }
        case PREMIUM:
            return{
                ...state,
                num:20
            }
        default:
            return state
    }
}

export default tier;