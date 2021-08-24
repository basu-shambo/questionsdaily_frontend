const initState = {
    firstName:"",
    lastName:"",
    emailid:"",
    password:""
};
const auth = (state=initState,action)=>{
    switch(action.type){
        case 'SIGNUP':
            return state;
        default:
            return state;
    }
}

export default auth;