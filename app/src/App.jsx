import React from 'react'
import TeacherSignup from './Pages/Auth/Teacher/TeacherSignup'
import StudentSignup from './Pages/Auth/Student/StudentSignup'
import RoleSelection from './Pages/Auth/RoleSelection'
import Home from './Pages/Home'
import TeacherHome from './Pages/TeacherHome'
import StudentLogin from './Pages/Auth/Student/StudentLogin'
import TeacherLogin from './Pages/Auth/Teacher/TeacherLogin'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StudentOtp from './Pages/Auth/Student/StudentOtp'
import TeacherOtp from './Pages/Auth/Teacher/TeacherOtp'
import StudentEmailVerify from './Pages/Auth/Student/StudentEmailVerify'
import TeacherVerifyEmail from './Pages/Auth/Teacher/TeacherVerifyEmail'
import StudentResetPassword from './Pages/Auth/Student/StudentResetPassword'
import TeacherReset from './Pages/Auth/Teacher/TeacherReset'
import Profile from './Pages/Pages/Students/Profile'
import Assignment from './Pages/Pages/Students/Assignment'
import Leave from './Pages/Pages/Students/Leave'
import TeacherLeave from './Pages/Pages/Teachers/TeacherLeave'
import TeacherAssignment from './Pages/Pages/Teachers/TeacherAssignment'
import TeacherProfile from './Pages/Pages/Teachers/TeacherProfile'


const App = () => {
  return (
    <div>

      <Router>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/role" element={<RoleSelection />} />
          <Route path="/Studentsignup" element={<StudentSignup />} />
          <Route path="/teachersignup" element={<TeacherSignup />} />
          <Route path="/teacherhome" element={<TeacherHome />} />
          <Route path="/teacherlogin" element={<TeacherLogin />} />
          <Route path="/studentlogin" element={<StudentLogin />} />
          <Route path="/sotp" element={<StudentOtp />} />
          <Route path="/totp" element={<TeacherOtp />} />
          <Route path="/semail" element={<StudentEmailVerify />} />
          <Route path="/temail" element={<TeacherVerifyEmail />} />
          <Route path="/reset" element={<StudentResetPassword />} />
          <Route path="/treset" element={<TeacherReset />} />
          <Route path="/student-profile" element={<Profile />} />
          <Route path='/assignments' element={<Assignment />} />
          <Route path="/leave" element={<Leave />} />
         
          <Route path="/teacher-profile" element={<TeacherProfile />} />
          <Route path="/teacher-assignments" element={<TeacherAssignment />} />
          <Route path="/teacher-leave" element={<TeacherLeave />} />







        </Routes>


      </Router>



    </div>
  )
}

export default App
