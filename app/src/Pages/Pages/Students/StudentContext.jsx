import React, { createContext, useState, useEffect } from 'react';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {




    const [studentEmail, setStudentEmail] = useState(
        localStorage.getItem("studentEmail") || ""
    );

    const [cgpa, setCgpa] = useState(
        localStorage.getItem("studentCgpa") || ""
    );
    const[name,setName]=useState(
        localStorage.getItem("studentName")||""
    )
    const[reg,setReg]=useState(
        localStorage.getItem("studentReg")||""
    )







  useEffect(() => {
    if (studentEmail) {
        localStorage.setItem("studentEmail", studentEmail);
    } else {
        localStorage.removeItem("studentEmail");
    }

    if (cgpa) {
        localStorage.setItem("studentCgpa", cgpa);
    } else {
        localStorage.removeItem("studentCgpa");
    }

    if (name) {
        localStorage.setItem("studentName", name);
    } else {
        localStorage.removeItem("studentName");
    }


     if (reg) {
        localStorage.setItem("studentReg", reg);
    } else {
        localStorage.removeItem("studentReg");
    }

}, [studentEmail, cgpa, name,reg]);







    return (
        <StudentContext.Provider 
            value={{ studentEmail, setStudentEmail, cgpa, setCgpa,name,setName,reg,setReg }}
        >
            {children}
        </StudentContext.Provider>
    );
};