const num = (state=10,action)=>{
    switch(action.type){
        case 'FREE':
            return {
                ...state,
                num:10
            }
        case 'PREMIUM':
            return{
                ...state,
                num:20
            }
        default:
            return state
    }
}

export default num;