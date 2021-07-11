import React, { useEffect } from 'react'
import { Grid, Segment, Button,Header,Container,Label} from 'semantic-ui-react'
import { useDispatch,useSelector } from 'react-redux'
import { setAnswers } from '../../../Actions/answers'
import OptionButton from './OptionButton'
import './Question.css'
const Question = ({question,questionNumber,num,setReviewed,reviewed,}) => {
    const dispatch = useDispatch()
    useEffect(()=>{
        const initialAnswers = Array(num).fill(0);
        dispatch(setAnswers(initialAnswers))
    },[dispatch,num])
    const selected = useSelector(state=>state.answers)
    const optionNames=["A","B","C","D","E"]
    const handleClick=(e)=>{
        const t = selected.slice();
        t[questionNumber-1] = selected[questionNumber-1]===parseInt(e.target.id)?0:parseInt(e.target.id)
        dispatch(setAnswers(t))
    }
    const  changeReview=()=>{
        const t = [...reviewed]
        t[questionNumber-1] = !t[questionNumber-1]
        setReviewed(t)

    }
    return (
        <Container className="question">
            <Segment  padded="very" raised >
                <Grid>
                    <Grid.Row columns={2} >
                        <Grid.Column width={1}>
                            <Header size="huge">{questionNumber}.</Header>
                        </Grid.Column>
                        <Grid.Column width={15}>
                            <Header size="large">{question.question}</Header>
                        </Grid.Column>
                    </Grid.Row>
                    {
                        question.options.map((option,index)=>{
                            return(
                                (selected[questionNumber-1]===index+1)?
                                <OptionButton key={index+1} {...{ index, optionNames, option, handleClick }} color="green"/>:
                                <OptionButton key={index+1} {...{ index, optionNames, option, handleClick }} color="black"/>  
                            )
                        })
                    }
                    <div className="others">
                        <Button onClick={changeReview} color='google plus'>{reviewed[questionNumber-1]?"Unm":"M"}ark for Review</Button>
                    </div>
                    <Label attached="bottom right">{question.topic}</Label>
                </Grid>
                
            </Segment>
            
        </Container>
    )
}

export default Question
