import React from  'react';
import {createContext,useState} from 'react';

export const MyContext=createContext();
export const Manager=({children})=>{
    const [taskData,setTaskdata]=useState([]);
    const data=(userData)=>{
        setTaskdata(userData);
    }
    return(
        <>
        <MyContext.Provider value={{taskData,data}}>
            {children}
        </MyContext.Provider>
        </>
    )
}