import React , {useState,useEffect}from 'react'
import QuestionsButtonGroup from './QuestionButtons/QuestionsButtonGroup'
import Legend from './Legend/Legend';
import Question from './Question/Question';
import UpperBar from './UpperBar/UpperBar';
import { useDispatch ,useSelector} from 'react-redux';
import { getTest,evaluate} from '../../Actions/test';
import { Container,Button} from 'semantic-ui-react';
const TestWindow = ({history}) => {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getTest())
    },[dispatch])
    const {questions,error,loading} = useSelector(state=>state.test)
    const num = useSelector(state=>state.num)
    const initialQuestion = 1;
    const result = useSelector(state=>state.result)
    
    const initialReviewed = Array(num).fill(false);
    const [currentQuestion,setCurrentQuestion] = useState(initialQuestion);
    const [reviewed,setReviewed] = useState(initialReviewed);
    const handleSubmit = ()=>{
        dispatch(evaluate(history));

    }
    return (
        
        <div className="testWindow" style={{width:"100%",height:"100%"}} >
            <QuestionsButtonGroup currentQuestion={currentQuestion} markedForReview={reviewed} num={num} setCurrentQuestion={setCurrentQuestion}/>
            <UpperBar {...{setCurrentQuestion}} questionNumber={currentQuestion}/>
            
            {
                (questions.length>1)?<Question 
                                        {...{num,setReviewed,reviewed}}
                                        questionNumber={currentQuestion} 
                                        question={questions[currentQuestion-1]}
                                    />:<p>error</p>
            }
            <Container><Button onClick={handleSubmit} fluid color="teal" size="huge"> Submit</Button></Container>
            <Legend/>
        </div>
    )
}

export default TestWindow
