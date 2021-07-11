import React from 'react'
import { Button,Divider } from 'semantic-ui-react'
const OptionButton = ({index,optionNames,option,handleClick,color}) => {
    return (
        <div className="optiondiv">
            <Button.Group className="optiondiv">
                <Button disabled id={index+1} className="optionname" content={optionNames[index]} size="huge" color={color}/> 
                <Button onClick={handleClick} id={index+1} className="option" content={option} size="huge" color={color==="black"?undefined:color}/> 
            </Button.Group>
            <Divider fitted/>
        </div>
    )
}

export default OptionButton
