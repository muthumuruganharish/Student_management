import React, { Children } from 'react'
import { createContext,useState } from 'react'
export const StudentContext = createContext();

export const StudentProvider=({children})=>{
    const [studentEmail,setStudentEmail]=useState(null)
    return(
        <StudentContext.Provider value={{studentEmail,setStudentEmail}}>
        {children}
        </StudentContext.Provider>
    )
}