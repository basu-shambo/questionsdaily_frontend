const initState = {
    loading:false,
    result:[],
    error:null

}

const result = (state=initState,action)=>{
    switch(action.type){
        case 'RESULT_PROCESSING':
            return{
                ...state,
                loading:true,
                error:null
            }
        case 'RESULT_RECIEVED':
            return{
                result:action.payload,
                loading:false,
                error:null
            }
        case 'RESULT_ERROR':
            return{
                ...state,
                loading:false,
                error:action.error
            }
        default:
            return state
    }
}

export default result