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
    <div className="flex flex-col md:flex-row bg-slate-50 min-h-screen pb-16 md:pb-0">

      <div className="flex-none z-50">
        <Tsidebar />
      </div>

      <main className="md:ml-64 flex-1 w-full">

        <Tnavbar title="Dashboard" />

        <div className="p-4 md:p-8">

          <div className="bg-indigo-600 text-white p-8 rounded-3xl mb-8 shadow-md">
            <h2 className="text-3xl font-bold">Welcome Teacher 👋</h2>
            <p className="mt-2 text-indigo-100 text-base">You have 3 assignments due this week.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-indigo-50 p-6 rounded-2xl shadow-sm">
              <p className="text-gray-600 font-medium tracking-wide">PENDING REVIEW</p>
              <h3 className="text-4xl font-bold text-indigo-600 mt-2">3</h3>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl shadow-sm border border-slate-100">
              <p className="text-gray-600 font-medium tracking-wide">LEAVE REQUESTS</p>
              <h3 className="text-4xl font-bold text-slate-800 mt-2">0</h3>
            </div>

          </div>

        </div>

      </main>

    </div>
  );
};

export default TeacherHome;