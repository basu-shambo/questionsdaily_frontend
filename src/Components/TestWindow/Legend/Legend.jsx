import React from 'react'
import { Segment ,Grid,Header} from 'semantic-ui-react'
const Legend = () => {
    const content =[
        {color:"grey",text:"Unanswered"},
        {color:"green",text:"Answered"},
        {color:"red",text:"Current Question"},
        {color:"blue",text:"Unanswered and Marked for Review"},
        {color:"purple",text:"Answered and Marked for Review"},
    ]
    return (
        <Grid verticalAlign="bottom" padded centered className="lengendWrapper">
            <Grid size="large" textAlign="center" className="legendGrid" columns={5}>
                {
                    content.map(({color,text},id)=>{
                        return(
                            <Grid.Column key={id}>
                                <Segment  className="legendSegment" inverted color={color}>
                                    <Header size="small" >{text}</Header>
                                </Segment>
                            </Grid.Column>
                        )
                        
                    })
                }
            </Grid>
        </Grid>
    )
}

export default Legend
