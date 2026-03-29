import React, { useEffect } from "react";
import Tsidebar from "./Components/Dashboard/Teacher/Tsidebar";
import Tnavbar from "./Components/Dashboard/Teacher/Tnavbar";
import { useNavigate } from "react-router-dom";

const TeacherHome = () => {
  const navigate=useNavigate()

  useEffect(()=>{

    const token= localStorage.getItem("token")
    // console.log("this is teacher token:",token)
    
    if(!token){
      navigate("/teacherlogin")
      
    }
    navigate("/teacherhome")

  },[])


  return (
    <div className="flex bg-slate-50 min-h-screen">

      <Tsidebar />

      <main className="ml-64 flex-1">

        <Tnavbar title="Dashboard" />

        <div className="p-8">

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl mb-8">
            <h2 className="text-3xl font-bold">Welcome Teacher 👋</h2>
            <p>You have 3 assignments due this week.</p>
          </div>

          <div className="grid grid-cols-3 gap-6">

            <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
              <p className="text-gray-600">GPA</p>
              <h3 className="text-2xl font-bold text-blue-600">3.8</h3>
            </div>

            <div className="bg-green-50 p-6 rounded-xl shadow-sm">
              <p className="text-gray-600">Attendance</p>
              <h3 className="text-2xl font-bold text-green-600">94%</h3>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl shadow-sm">
              <p className="text-gray-600">Courses</p>
              <h3 className="text-2xl font-bold text-purple-600">6</h3>
            </div>

          </div>

        </div>

      </main>

    </div>
  );
};

export default TeacherHome;