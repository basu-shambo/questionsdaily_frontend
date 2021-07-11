const initState = {
    questions:[],
    loading:false,
    error: null
}
const fetchTest = (state=initState,action)=>{
    switch(action.type){
        case 'FETCH_TEST_LOADING':
            return {
                ...state,
                loading:true,
                error:null
            }
        case 'FETCH_TEST_SUCCESS':
            return{
                questions : action.payload,
                loading:false,
                error:null
            }
        case 'FETCH_TEST_FAILURE':
            return{
                ...state,
                loading:false,
                error:action.error
            }
        default:
            return state
    }
}

export default fetchTest