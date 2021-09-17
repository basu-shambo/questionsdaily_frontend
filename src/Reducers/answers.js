import { SET_ANSWERS } from "../Actions/actionTypes"
const initState = Array(10).fill(0)

const answers = (state=initState,action)=>{
    switch(action.type){
        case SET_ANSWERS:
            return(action.payload)
        default:
            return state
    }
}
export default answers;