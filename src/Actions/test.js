import * as api from '../api/index.js'

export const getTest = ()=>async(dispatch)=>{
    dispatch({
        type:'FETCH_TEST_LOADING',
    })
    try{
        const response = await api.fetchTest(10)
        dispatch({
            type:'FETCH_TEST_SUCCESS',
            payload:response.data
        })
    }catch(error){
        dispatch({
            type:'FETCH_TEST_FAILURE',
            error
        })
    }
}

export const evaluate = (history) => async(dispatch,getState) =>{
    dispatch({
        type:'RESULT_PROCESSING'
    })
    try{
        const {num,test,answers} = getState();
        const questionIds = test.questions.map((question)=>question._id)
        const unanswered = answers.reduce((count,answer)=>answer?count:count+1,0)
        const response = await api.evaluate({numberOfQuestions:num,questionIds,answers,unanswered})
        dispatch({
            type:'RESULT_RECIEVED',
            payload:response.data
        })
        history.replace("/result")
    }
    catch(error){
        dispatch({
            type:'RESULT_ERROR',
            error
        })
    }
}

