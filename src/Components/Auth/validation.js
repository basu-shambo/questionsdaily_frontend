import joi from 'joi';
//*****************************************************************************
/**
 * verifies if the signup form data is correct using Joi
 * @function verifySignUp 
 * @param {object} data The input form data
 * @returns {object} joi error object
 */
//*****************************************************************************
export const verifySignUp = (data) =>{
    const signupSchema = joi.object({
        firstName:joi.string().alphanum().required().min(3).max(30),
        lastName: joi.string().alphanum(),
        emailId: joi.string().email({tlds:{allow:false}}).required(),
        password:joi.string().required().min(8),
        cpassword:joi.ref('password')
    })
    return signupSchema.validate(data,{abortEarly:false});

}