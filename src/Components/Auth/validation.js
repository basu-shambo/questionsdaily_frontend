import joi from 'joi';

export const verifySignUp = (data) =>{
    const signupSchema = joi.object({
        firstName:joi.string().alphanum().required().min(3).max(30),
        lastName: joi.string().alphanum(),
        emailId: joi.string().email({tlds:{allow:false}}).required(),
        password:joi.string().required().min(8),
        cpassword:joi.ref('password')
    })
    const {error:{details} = {}} =  signupSchema.validate(data,{abortEarly:false});
    // console.log(details)
    return details.map((err)=>{
        return {
            orgin:err.path[0],
            details:{
                message:err.message,
                type:err.type
            }
        }
    })

}