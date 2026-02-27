import React from 'react'
import TeacherSignup from './Pages/Auth/Teacher/TeacherSignup'
import StudentSignup from './Pages/Auth/Student/StudentSignup'
import RoleSelection from './Pages/Auth/RoleSelection'
import  Home  from '../src/Pages/Home'
import TeacherHome from './Pages/TeacherHome'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div>

        <Router>

        <Routes>

            <Route path="/" element={<Home/>} />
            <Route path="/role"element={<RoleSelection/>} />
            <Route path="/Studentsignup"element={<StudentSignup/>} />
            <Route path="/teachersignup"element={<TeacherSignup/>} />
            <Route path="/teacherhome" element={<TeacherHome/>}/>
            

      


        </Routes>

        
        </Router>
        
      

    </div>
  )
}

export default App
