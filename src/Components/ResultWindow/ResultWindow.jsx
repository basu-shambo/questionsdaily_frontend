import React from 'react'
import { useSelector } from 'react-redux'
import SingleQuestion from './SingleQuestion'
import { Progress ,Segment,Container,Header} from 'semantic-ui-react'
const ResultWindow = () => {
    //selected is the 
    const selected = useSelector(state=>state.answers);
    const {questions} = useSelector(state=>state.test);
    const {result} = useSelector(state=>state.result);
    const num = useSelector(state=>state.num);

    const correctPercentage = Math.round(result.correct/num*100);
    const wrongPercentage = Math.round(result.wrong/num*100);
    const unansweredPercentage = 100-correctPercentage-wrongPercentage;
    console.log(correctPercentage,wrongPercentage,unansweredPercentage)
    
    return (
        <div className="results">
            <div style={{height:"20px"}}/>
            <Container textAlign="center">
                <Header size="huge" block> Result</Header>
                {/* result summary */}
                <Segment.Group raised horizontal >
                    <Segment>
                        <Header> Correct</Header>
                        <Progress color="green" percent={correctPercentage} progress />
                        <Header>{result.correct}/{num}</Header>
                    </Segment>
                    <Segment>
                        <Header> Wrong</Header>
                        <Progress color="red" percent={wrongPercentage} progress />
                        <Header>{result.wrong}/{num}</Header>
                    </Segment>
                    <Segment>
                        <Header> Unanswered</Header>
                        <Progress color="grey" percent={unansweredPercentage} progress />
                        <Header>{result.unanswered}/{num}</Header>
                    </Segment>
                </Segment.Group>
            </Container>
            
            <div style={{height:"10px"}}/>
            {questions.map((question,index)=>{
                return <SingleQuestion key={index} questionNumber={index+1} question={question} selected = {selected}/>
            })}
        </div>
    )
}

export default ResultWindow
