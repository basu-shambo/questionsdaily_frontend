import React  from 'react'
import {Button} from 'semantic-ui-react'
import { useSelector } from 'react-redux'
const QuestionsButtonGroup = ({currentQuestion,markedForReview,num,setCurrentQuestion}) => {
    const answered = useSelector(state=>state.answers)
    // console.log(answered)
    const handleClick=(e)=>{
        setCurrentQuestion(parseInt(e.target.id));
    }
    const buttons = [];
    for(let i=1;i<=num;i++){
        if(currentQuestion === i){
            buttons.push(<Button id ={i} key={i} color="red" onClick={handleClick}>{i}</Button>)
        }
        else{
            if(!answered[i-1] && !markedForReview[i-1]){
                buttons.push(<Button id ={i} key={i} color="grey" onClick={handleClick}>{i}</Button>)
            }
            else if(!answered[i-1] && markedForReview[i-1]){
                buttons.push(<Button id ={i} key={i} color="blue" onClick={handleClick}>{i}</Button>)
            }
            else if(answered[i-1] && !markedForReview[i-1]){
                buttons.push(<Button id ={i} key={i} color="green" onClick={handleClick}>{i}</Button>)
            }
            else{
                buttons.push(<Button id ={i} key={i} color="purple" onClick={handleClick}>{i}</Button>)
            }
        }
    }
    return (
        <div>
            <Button.Group widths={num}>
                {
                    buttons.map((button)=>{
                        return button;
                    })
                }
            </Button.Group>
        </div>
    )
}

export default QuestionsButtonGroup
