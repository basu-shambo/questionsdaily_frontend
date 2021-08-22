import React from 'react'
import { Grid, Segment,Header,Container,Label} from 'semantic-ui-react'
import OptionButton from '../TestWindow/Question/OptionButton'
import {useSelector} from 'react-redux'

const SingleQuestion = ({questionNumber,question,selected}) => {
    //for using the letter as options
    const optionNames=["A","B","C","D","E"]

    //getting result from the store
    const {result} = useSelector(state=>state.result);
    return (
        <Container className="question">
            {/* The question will appear tertiary green if it has been asnwered */}
            <Segment color={selected[questionNumber-1]?"brown":undefined} inverted={selected[questionNumber-1]?true:undefined} tertiary={selected[questionNumber-1]?"green":undefined} padded="very" raised >
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
                            if(result.correctAnswers[questionNumber-1]===index+1){
                                return <OptionButton key={index+1} {...{ index, optionNames, option }} color="green"/>
                            }
                            if(selected[questionNumber-1]===index+1 ){
                                return <OptionButton key={index+1} {...{ index, optionNames, option }} color="yellow"/> 
                            }    
                            else{
                                return <OptionButton key={index+1} {...{ index, optionNames, option }} color="black"/>  
                            }
                            
                        })
                    }
                    <div style={{height:"10px"}}/>
                    <Label attached="bottom right">{question.topic}</Label>
                </Grid>
                
            </Segment>
            <div style={{height:"10px"}}/>
            
        </Container>
    )
}

export default SingleQuestion
