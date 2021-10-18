import React ,{useState,useEffect, Component}from 'react'
import { Container ,Segment,Form ,Button,Input,Message} from 'semantic-ui-react';
import {verifySignUp} from './validation';
import './Auth.css'
import { signup } from '../../api';
//*****************************************************************************
/**
 * @component
 * @param {history} history history obejct of the react-routerDOM
 * @returns {Component} Auth Component
 */
//*****************************************************************************
const Auth = ({history}) => {
    const [isSignin,setSignin] = useState(false); //false means signup, true means sign in

    //*****************************************************************************
    /**
     * @param {Object} 
     */
    //*****************************************************************************
    const initState = {
        firstName:"",
        lastName:"",
        emailId:"",
        password:"",
        cpassword:""
    };

    /******************************************************************************
     * States
     ******************************************************************************/
    const [formData,setFormData] = useState(initState); //state for storing the form data
    const [passwordMatch,setPasswordMatch] = useState(false); //false means password donot match
    const [error,setError] = useState([]); //{origin:"",details:{message:"",type:""}} to be used for any error arising from the form data validation and signup request
    const loginClick = () =>  !isSignin && setSignin(true);
    const signupClick = () =>  isSignin && setSignin(false);


    //*****************************************************************************
    /**
     * Sets the formData state 
     * @function handleFormChange
     * @param {event} e The javascript event genrated by editing the form values
     */
    //*****************************************************************************
    const handleFormChange = (e) =>{
        setFormData(formdata=>{
            const data = {...formdata}
            data[e.target.name] = e.target.value;
            return data;
        });
    }

    //*****************************************************************************
    /**
     * To reset the Password feild in the form after every submit action
     * @function resetPassword
     */
    //*****************************************************************************
    const resetPassword = () =>{
        setFormData(formdata=>{
            const data = {...formdata};
            data.password = "";
            data.cpassword = "";
            return data;
        })
    }
    
    //*****************************************************************************
    /**
     * Submits the form data to the backend server through the API
     * @function submit 
     * @param {*} e 
     */
    //*****************************************************************************
    const submit = async(e) =>{
        e.preventDefault();
        //setting the current errors as empty
        setError([]);
        //1. Check if all the form values are correct
        const response = verifySignUp(formData);
        const isFormError = processJoiError(response);
        if(isFormError) return;
        //2. try and send it to the backend 
        try{
            //try to send the form to the backend and then get the response from the frontend

            //if 
        }
        //3. catch the errors
        catch{

        }
        
        resetPassword();
    }
    //*****************************************************************************
    /**
     * Proccesses the response from joi and sets the error state accordingly
     * @function processJoiError
     * @param {object} res The joi response of the formData
     */
    //*****************************************************************************
    const processJoiError = (res) =>{
        const {error:err} = res;
        //state error shape - {origin:"",details:{message:"",type:""}}
        if(err){
            //map over the error.details and set each and every part of the error state 
            err.details.map((detail)=>{
                setError((e)=>{
                    e.push({origin:detail.path[0],details:{message:detail.message,type:detail.type}});
                    return e;
                })
            })
            return true;
        }
        return false;
    }
    //*****************************************************************************
    /**
     * Shows the error message on the screen if any
     * @function showError
     * @param {object} error 
     * @returns A JSX component with the message or undefined if error doesn't exist
     */
    //*****************************************************************************
    const showError = (error) =>{
        if(error.length){
            return(
                <Message negative>
                    <Message.List>
                        {error.map((err,index)=> <Message.Item key={index}>{err.details.message}</Message.Item>)}
                    </Message.List>
                </Message>
            )
        }
        return undefined;
    }
    useEffect(()=>{
        const {password,cpassword} = formData;
        if(password && cpassword && password === cpassword) setPasswordMatch(true);
    },[formData,passwordMatch])
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
                        {showError(error)}
                    </Segment>
                    
                </Segment.Group>
                
            </Container>

        </div>
    )
}

export default Auth;