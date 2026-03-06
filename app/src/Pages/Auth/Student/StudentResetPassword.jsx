import React from 'react'
import { Lock } from "lucide-react";
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Axios from '../../../Axios';
import { useLocation } from "react-router-dom";

const StudentResetPassword = () => {
  const navigate = useNavigate()
  const location=useLocation()
  const email=location.state?.email

  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const reset=async(e)=>{
    e.preventDefault()
    try{

      if(newPassword!=confirmPassword){
        return alert("password mismatch")
      }

      const res= await Axios.put("/reset",{
        email,
        newPassword
      })
      alert("password changed")
      navigate("/")

    }
    catch(err){
      console.log(err.response?.data?.message||"someting went wrong")

    }
  }








  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">

        <div className="bg-white shadow-lg rounded-xl p-8 w-[380px] text-center">

          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Lock className="text-blue-600" size={28} />
            </div>
          </div>

          <form onSubmit={reset}>
            {/* Title */}
            <h2 className="text-xl font-semibold text-gray-800">
              Reset Password
            </h2>
            <p className="text-sm text-gray-500 mb-6">
              Enter your new password below
            </p>

            {/* New Password */}
            <input

              onChange={(e) => setNewPassword(e.target.value)}
              type="password"
              placeholder="Enter New Password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Confirm Password */}
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              placeholder="Confirm Password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Button */}
            <button
              type='submit'
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Reset Password
            </button>

          </form>

        </div>
      </div>
    </div>
  )
}

export default StudentResetPassword
