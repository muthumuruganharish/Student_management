import React from 'react'
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  CalendarCheck,
  User,
  LogOut,
  Notebook 
} from "lucide-react";

const Tsidebar = () => {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("token")
    navigate("/teacherlogin")
  }


  return (
    <div>

      <aside className="w-64 bg-white border-r flex flex-col h-screen fixed left-0 top-0">

        <div className="p-6 border-b">
          <h1 className="text-xl font-bold text-blue-600">Campus</h1>
        </div>

        <nav className="flex-1 p-4 space-y-2">

          <div
            onClick={() => navigate("/teacherhome")}
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-100 text-blue-600 cursor-pointer"
          >
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </div>

          <div
            onClick={() => navigate("/teacher-assignments")}
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 cursor-pointer"
          >
            <BookOpen className="w-5 h-5" />
            Assignments
          </div>

          <div
            onClick={() => navigate("/teacher-leave")}
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 cursor-pointer"
          >
            <CalendarCheck className="w-5 h-5" />
            Leave Permission
          </div>

          <div
            onClick={() => navigate("/teacher-marks")}
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 cursor-pointer"
          >
            <Notebook className="w-5 h-5" />
            Mark & attendance
          </div>


          <div
            onClick={() => navigate("/teacher-profile")}
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-blue-50 cursor-pointer"
          >
            <User className="w-5 h-5" />
            Profile
          </div>

        </nav>

        <div className="p-4 border-t">
          <button onClick={logout} className="flex items-center gap-3 text-red-500">
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>

      </aside>

    </div>
  )
}

export default Tsidebar

