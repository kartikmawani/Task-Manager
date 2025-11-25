import TaskGenerator  from '../models/component.model.js'

export const createTask=async(req,res)=>{
    
   try{
      const  { username, description, Type,Status } = req.body; 
      if(!username||!description||!Type||!Status){
         return res.status(400).json({
            message:"Please fill all the field"
         })
      } 
       
      const Task=new TaskGenerator({
         username,
         description,
         Type,
         Status,
      })
      const TaskManager=await Task.save()
       return res.status(200).json({
         message:"User created successfully",
         task:TaskManager
      })

      
   }
    catch(error){
      console.error(error)
         res.status(500).json("Server is incapable")
      }
}