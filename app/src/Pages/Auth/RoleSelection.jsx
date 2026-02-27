import React from "react";
import Card from "../../Components/Card";
import { GraduationCap, UserCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RoleSelection = () => {
  const navigate=useNavigate()
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        {/* Header */}
        <div className="text-center space-y-2 mb-8">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-2xl mb-2 text-blue-600">
            <GraduationCap className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
            Welcome to Campus Portal
          </h2>
          <p className="text-gray-500 text-sm">
            Please select your role to continue
          </p>
        </div>

        {/* Buttons */}
        <div className="space-y-4">
          <button  onClick={()=>navigate("/studentsignup")} className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition duration-200 shadow-md">
            <GraduationCap className="w-5 h-5" />
            I am a Student
          </button>

          <button onClick={()=>navigate("/teachersignup")} className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition duration-200 shadow-md">
            <UserCheck className="w-5 h-5" />
            I am a Teacher
          </button>
        </div>
      </Card>
    </div>
  );
};

export default RoleSelection;