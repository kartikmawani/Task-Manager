 import {body,validationResult} from 'express-validator';

const ValidateRegistration=[
    body('Email').isEmail().withMessage('Email or Username already exist'),
     
    body('password').isLength(6).withMessage('Password length  should be atleast 6 '),
    (req,res,next)=>{
        const error=validationResult(req)
        if(!error.isEmpty()){
            return res.status(400).json(error.array())
        }
        next()
    }
]

export default ValidateRegistration;