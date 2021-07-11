import React ,{useState,useEffect} from 'react';
import { useSelector } from 'react-redux';
import { Container,Button,Icon} from 'semantic-ui-react';
import './UpperBar.css'
const UpperBar=({questionNumber,setCurrentQuestion})=>{
    const num = useSelector(state=>state.num)
    const [time,setTime] = useState(num*3*60*1000) //num*3*60*1000
    const getTime=(time)=>{
        time /=1000
        const seconds = time % 60 ;
        const minutes = Math.floor(time/60)
        const min = minutes>=10?minutes.toString():'0'+minutes.toString()
        const sec = seconds>=10?seconds.toString():'0'+seconds.toString()
        return [min ,sec]
    }
    useEffect(()=>{
        if(time>0){
            setTimeout(() => {
                setTime(time-1000)
            }, 1000);
        }
    },[time])
    const nextQuestion = ()=>{
        questionNumber===10?setCurrentQuestion(1):setCurrentQuestion(questionNumber+1)
    }
    const lastQuestion = ()=>{
        questionNumber===1?setCurrentQuestion(10):setCurrentQuestion(questionNumber-1)
    }
    return(
        <Container className="countdown">
            <Button onClick={lastQuestion} animated color="teal" size ="huge" floated="left">
                <Button.Content visible><Icon name="double angle left"/></Button.Content>
                <Button.Content hidden>Last</Button.Content>
            </Button>
            <Button.Group size ="huge" >
                <Button disabled className ={time<60000?"time alert":"time"} color={time<60000?"red":"black"}>{getTime(time)[0]}</Button>
                <Button disabled className ={time<60000?"time alert":"time"} color={time<60000?"red":"black"}>{getTime(time)[1]}</Button>
            </Button.Group>
            <Button onClick={nextQuestion} animated color="teal" size ="huge" floated="right">
                <Button.Content visible><Icon name="double angle right"/></Button.Content>
                <Button.Content hidden>Next</Button.Content>
            </Button>
        </Container>
    )
}

export default UpperBar