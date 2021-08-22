import React ,{useState}from 'react'
import { Container ,Segment, Input ,Form ,Button} from 'semantic-ui-react';
import './Auth.css'
const Auth = () => {
    const [isSignin,setSignin] = useState(true);
    return (
        <div className ="auth">
            <Container text>
                <Segment raised padded="very">
                    <Form>
                        {
                            !isSignin &&
                            <Form.Group>
                                <Form.Field>
                                    <label> Fisrt Name</label>
                                    <input placeholder="First Name"/>
                                </Form.Field>
                                <Form.Field>
                                    <label> Last Name</label>
                                    <input placeholder="Last Name"/>
                                </Form.Field>
                            </Form.Group>
                        }
                        <Form.Field>
                            <label> Email Id or Username</label>
                            <input placeholder="Email Id or Username"/>
                        </Form.Field>
                        <Form.Field>
                            <label> Password</label>
                            <input type="password" placeholder="Password"/>
                        </Form.Field>
                        {
                            !isSignin&&
                            <Form.Field>
                                <label>Confirm Password</label>
                                <input type="password" placeholder="Confirm Password"/>
                            </Form.Field>
                        }
                        <Button primary type="submit">{isSignin?"Login":"Sign Up"} </Button>
                    </Form>
                </Segment>
            </Container>
            
        </div>
    )
}

export default Auth;