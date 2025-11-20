import React from 'react'
import {useState,useContext} from 'react';
import axios from 'axios';
import {MyContext} from '../Context/userContext.jsx'


function HomeBar() {
  const {data,taskData}=useContext(MyContext)
    const [clicked,setClicked]=useState(false)
    const [formData,setFormData]=useState({
        username:'',
        description:'',
        Type:'Personal task',
        Status:'Pending',
    })
     const  handleChange=(e)=>{
      const value=e.target.value
       const name=e.target.name
            setFormData((prevFormData)=>({
                ...prevFormData,
                [name]:value,
            })
            )
        }
        const handleClick=(e)=>{
          e.stopPropagation();
            setClicked(!clicked);
        }
         const handleSubmit=async(e)=>{
        e.preventDefault();
        e.stopPropagation();
        try{
            const response =await axios.post('http://localhost:4000/api/Task',formData)
            console.log('Task created Successfully',response.data.task)
            const newTask=response.data.task;
            const updatedTask=[...taskData,newTask]
           data(updatedTask)
           if(data!==null){
           console.log("task created sucessfully",updatedTask)
           }   
            setFormData({
                username:'',
                description:'',
                Type:'Personal task',
                Status:'Pending',
            })
            setClicked(false)
        }
        
        catch(error){
            console.error("unable to create task")
        }
       
    }  
  return (
    <div className="bg-blue-500 h-[25vh] w-[70vw] absolute top-0 left-[15vw] ">
         <div> 
         <div   onClick={handleClick}>Create new Task</div>
          {clicked && (
            <div>
            <form    onSubmit={handleSubmit}>
                <input  
                  name="username"
                  value={formData.username}
                  placeholder="username" 
                  type="text"
                  onChange={handleChange}
                  required/>
                <input 
                name="description"
                value={formData.description}  
                 
                 placeholder="description"
                 onChange={handleChange}
                  type="text"/>
                 <select 
                 id="type"
                 name="Type"
                 value={formData.Type}
                 onChange={handleChange}

                 >
                    <option value="Personal task">Personal Task</option>
                      <option value="Company task">Company Task</option>
                        <option value="Friend task">Friend Task</option>
                    </select>
                     <select 
                 id="status"
                 name="Status"
                 value={formData.Status}
                 onChange={handleChange}

                 >
                    <option value="Pending">Pending</option>
                      <option value="Complete">Complete</option>
                    </select>
                 
                  <button type="submit">submit</button>   
                    
            </form>
            </div>
         )}
          </div>
      
    </div>
  )
}

export default HomeBar
