import mongoose from 'mongoose'

const Component=mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    Type:{
        type:String,
        required:true,
        enum:['Personal task','Company task','Friend task'],
    },
    Status:{
       type:Boolean,
       default:false,
       
    },
})

const TaskGenerator=mongoose.model('TaskGenerator',Component);
export default TaskGenerator;