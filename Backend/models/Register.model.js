import mongoose from 'mongoose'

const RegisterSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    Email:{
         type:String,
        required:true,
    },
      password:{
         type:Number,
        required:true,
    },
})

const User=mongoose.model('User',RegisterSchema)

export default User;