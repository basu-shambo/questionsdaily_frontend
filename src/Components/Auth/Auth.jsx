import React ,{useState,useEffect}from 'react'
import { Container ,Segment,Form ,Button,Input} from 'semantic-ui-react';
import './Auth.css'
const Auth = () => {
    const [isSignin,setSignin] = useState(false); //false means signup, true means sign in

    //initial state of form data
    const initState = {
        firstName:"",
        lastName:"",
        emailid:"",
        password:"",
        cpassword:""
    };
    const [formData,setFormData] = useState(initState); //state for storing the form data
    const [passwordMatch,setPasswordMatch] = useState(false); //false means password donot match
    const loginClick = () =>  !isSignin && setSignin(true);
    const signupClick = () =>  isSignin && setSignin(false);

    const handleFormChange = (e) =>{
        setFormData(formdata=>{
            const data = {...formdata}
            data[e.target.name] = e.target.value;
            return data;
        });
        
    }
    const submit = (e) =>{
        e.preventDefault();
        console.log(formData);
        console.log(passwordMatch);
    }
    useEffect(()=>{
        setPasswordMatch(formData.cpassword === formData.password);
    },[formData])
    return (
        <div className ="auth">
            <Container text>
                <Segment.Group>
                    <Segment.Group horizontal>
                        <Segment inverted color={isSignin?"teal":"grey"} textAlign="center" onClick={loginClick}>Login</Segment>
                        <Segment inverted color={isSignin?"grey":"teal"} textAlign="center" onClick={signupClick}>Sign Up</Segment>
                    </Segment.Group>
                    <Segment raised padded="very">
                        <Form>
                            {
                                !isSignin &&
                                <Form.Group>
                                    <Form.Field>
                                        <label> First Name</label>
                                        <input placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleFormChange}/>
                                    </Form.Field>
                                    <Form.Field>
                                        <label> Last Name</label>
                                        <input placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleFormChange}/>
                                    </Form.Field>
                                </Form.Group>
                            }
                            <Form.Field>
                                <label> Email Id or Username</label>
                                <input placeholder="Email Id or Username" name="emailid" value={formData.emailid} onChange={handleFormChange}/>
                            </Form.Field>
                            <Form.Field>
                                <label> Password</label>
                                <input type="password" placeholder="Password"  name = "password" value={formData.password} onChange={handleFormChange}/>
                            </Form.Field>
                            {
                                !isSignin&&
                                <Form.Field>
                                    <label>Confirm Password</label>
                                    <Input 
                                        type="password" 
                                        placeholder="Confirm Password" 
                                        name="cpassword" 
                                        value={formData.cpassword} 
                                        onChange={handleFormChange} 
                                        icon={formData.cpassword?{name:`${passwordMatch?"check":"close"}`,color:`${passwordMatch?"green":"red"}`}:undefined}/>
                                </Form.Field>
                            }
                            <Button primary type="submit" onClick={submit}>{isSignin?"Login":"Sign Up"} </Button> 
                            
                        </Form>
                    </Segment>
                </Segment.Group>
            </Container>
            
        </div>
    )
}

export default Auth;