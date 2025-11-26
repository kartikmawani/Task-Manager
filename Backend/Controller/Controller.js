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

export const DeleteTask=async(req,res)=>{
   try
   {
   const {id}=req.params;
   const DeletedTask=await TaskGenerator.findByIdAndDelete(id)
   if(!DeletedTask){
      return res.status(400).json({message:"Task not found"})
   }
   res.status(200).json({message:"Task deleted succesfully",
      task:DeletedTask
      })

}
   catch(error){
      console.error(error)
      res.status(500).json({message:"Server error  Unable to delete task"})

   }

}
