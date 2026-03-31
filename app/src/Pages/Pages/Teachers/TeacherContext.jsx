import React, { createContext, useState, useEffect } from 'react';
import { Children } from 'react';
export  const TeacherContext=createContext()    

export const TeacherProvider=({children})=>{

    const [teacherEmail,setTeacherEmail]=useState(
        localStorage.getItem("teacherEmail")
    )


    useEffect(()=>{

         if(teacherEmail){
        localStorage.setItem("teacherEmail",teacherEmail)
    }
    else{
        localStorage.removeItem("teacherEmail")

    }

    },[teacherEmail])

    return(
        <TeacherContext.Provider value={{teacherEmail,setTeacherEmail}}>
                {children}
        </TeacherContext.Provider>
    )
   
}