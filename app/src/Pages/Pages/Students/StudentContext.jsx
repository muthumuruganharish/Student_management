import React, { createContext, useState, useEffect } from 'react';

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {

    // ✅ Load from localStorage (IMPORTANT)
    const [studentEmail, setStudentEmail] = useState(
        localStorage.getItem("studentEmail") || ""
    );

    // ✅ Keep localStorage in sync
    useEffect(() => {
        if (studentEmail) {
            localStorage.setItem("studentEmail", studentEmail);
        } else {
            localStorage.removeItem("studentEmail");
        }
    }, [studentEmail]);

    return (
        <StudentContext.Provider value={{ studentEmail, setStudentEmail }}>
            {children}
        </StudentContext.Provider>
    );
};