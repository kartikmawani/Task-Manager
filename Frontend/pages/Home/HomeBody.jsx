import React from 'react'
import {useState,useContext} from 'react'
import {MyContext} from '../Context/userContext.jsx'
import axios from 'axios'
function HomeBody() {
    const {taskData}=useContext(MyContext)
    const {data:setTaskData}=useContext(MyContext)
    const [editFormData,setEditFormData]=useState({
        username:'',
        description:'',
        Type:''
    })
    const [editingTaskId,setEditingTaskId]=useState(null)

    const handleEditChange=(e)=>{
        const {name,value}=e.target;
        setEditFormData((preveditFormData)=>({...preveditFormData,
            [name]:value,
        }))  
    }

    const handleDelete=async(taskId)=>{
    try{
        await axios.delete(`http://localhost:4000/api/Delete/${taskId}`)
        setTaskData(prevTasks=>prevTasks.filter(task=>task._id!==taskId))
    }
    catch{
        console.log("Failed to delete Task")
    }}

    const handleEditClick=(e,taskId)=>{
       e.stopPropagation();
       setEditingTaskId(taskId)
        const taskToEdit=taskData.find(task=>task._id==taskId)
        if(taskToEdit){ 
        setEditFormData({
            username:taskToEdit.username,
            description:taskToEdit.description,
            Type:taskToEdit.Type     
        })}
    }

    const handleEditSubmit=async(e,taskId)=>{
        e.preventDefault();
        e.stopPropagation();
        try{
        const EditedResponse= await axios.put(`http://localhost:4000/api/Edit/${taskId}`,editFormData)
        const EditedTask=EditedResponse.data;
        setTaskData(prevTaskData =>
            prevTaskData.map(task =>
                task._id === taskId ? EditedTask : task
            )
        );
        
        setEditingTaskId(null)
        }
        catch(error){
            console.error(error)
            console.log("task editing failed")
        }
    }
    
    
  return (
  <> 
    <div className="h-[75vh] w-[70vw] absolute top-1/4 left-[15vw] bg-red-500">
    <h2>hello</h2>
    <div className="h-[15vh] w-[20vw] bg-green-500"> 
        <ul>
        {taskData.map((task) => (
        <li key={task._id}>
            {editingTaskId === task._id ? (
                 
                <form onSubmit={(e) => handleEditSubmit(e,task._id)}>
                    <input
                        type="text"
                        name="username"
                        value={editFormData.username}
                        onChange={handleEditChange}
                    />
                      <input
                        type="text"
                        name="description"
                        value={editFormData.description}
                        onChange={handleEditChange}
                    />  
                    <select
                        name="Type"
                        value={editFormData.Type}
                        onChange={handleEditChange}
                    >
                        <option value="Personal Task">Personal Task</option>
                        <option value="Company task">Company task</option>
                        <option value="Friend Task">Friend Task</option>
                    </select>
                    <button type="submit">Update</button>
                    <button type="button" onClick={() => setEditingTaskId(null)}>Cancel</button>
                </form>
            ) : (
               
                <div className="task-content">
                    <div className="CreatedElement">
                        <div>{task.username}</div>
                        <div>{task.description}</div>
                        <div>{task.Type}</div>
                    </div>
                    <div className="Operation">
                        <div onClick={() => handleDelete(task._id)}>Delete</div>
                        <div onClick={(e) => handleEditClick(e,task._id)}>Edit</div>
                    </div>
                </div>
            )}
        </li>
    ))}
    </ul>
    </div>
    </div>     
    </>     
    )

}


export default HomeBody;