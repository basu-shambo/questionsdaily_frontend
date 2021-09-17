import React ,{useState,useEffect}from 'react'
import { Container ,Segment,Form ,Button,Input,Message} from 'semantic-ui-react';
import {verifySignUp} from './validation';
import './Auth.css'
import { signup } from '../../api';
const Auth = ({history}) => {
    const [isSignin,setSignin] = useState(false); //false means signup, true means sign in

    //initial state of form data
    const initState = {
        firstName:"",
        lastName:"",
        emailId:"",
        password:"",
        cpassword:""
    };
    const [formData,setFormData] = useState(initState); //state for storing the form data
    const [passwordMatch,setPasswordMatch] = useState(false); //false means password donot match
    const [error,setError] = useState({field:"",details:{message:"",type:""}}); // to be used for any error arising from the form data validation and signup request
    const loginClick = () =>  !isSignin && setSignin(true);
    const signupClick = () =>  isSignin && setSignin(false);

    const handleFormChange = (e) =>{
        setFormData(formdata=>{
            const data = {...formdata}
            data[e.target.name] = e.target.value;
            return data;
        });
        
    }
    const resetPassword = () =>{
        setFormData(formdata=>{
            const data = {...formdata};
            data.password = "";
            data.cpassword = "";
            return data;
        })
    }
    const submit = async(e) =>{
        e.preventDefault();
        if(!isSignin){
            try{
                const response = await signup(formData);
                if(!response.error){
                    setSignin(true);
                }
            }catch(error){
                // error at error.response.data
                if(error.response.data.error.details.path){
                    error.response.data.error.details.path === "emailId" && console.log("email already exists");
                }
                else if(!error.response.data.error.details.path){
                    console.log("Sorry Couldn't sign up")
                }
                else{
                    console.log("sorry couldn't sign up")
                }
            }
        }
        resetPassword();
    }
    useEffect(()=>{
        const {password,cpassword} = formData;
        if(password && cpassword && password === cpassword) setPasswordMatch(true);
        
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
                        <Form onSubmit={submit}>
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
                                <input placeholder="Email Id or Username" name="emailId" value={formData.emailId} onChange={handleFormChange}/>
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
                            <Button primary type="submit">{isSignin?"Login":"Sign Up"} </Button> 
                            
                        </Form>
                        {error.field?<Message negative >{error.message}</Message>:undefined}
                    </Segment>
                    
                </Segment.Group>
                
            </Container>

        </div>
    )
}

export default Auth;