import React from 'react'
import { ShieldCheck, Loader2 } from "lucide-react";
import { useState } from 'react';
import Axios from "../../../Axios"
import { Navigate, useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";



const StudentOtp = () => {
  const location = useLocation();
  const email = location.state?.email;

  const navigate = useNavigate()

  const [otp, setOtp] = useState("")

  const otpVerify = async (e) => {
    e.preventDefault()
    try {

      const res = await Axios.post("/sotp", {
        email,
        otp
      })

      alert(res.data.message)
      navigate("/reset",{
         state: { email }
      })




    }
    catch (err) {
      alert(err.response?.data?.message)

    }
  }






  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-blue-100 p-4 rounded-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 11c0-3 2-5 4-5s4 2 4 5v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4c0-3 2-5 4-5s4 2 4 5z" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Student OTP Verification
        </h2>

        <p className="text-center text-gray-500 mb-6 text-sm">
          Enter the OTP sent to your email
        </p>

        {/* OTP Input */}
        <form onSubmit={otpVerify} className="space-y-5">
          <input

            onChange={(e) => setOtp(e.target.value)}

            type="text"
            placeholder="Enter OTP"
            maxLength="6"
            className="w-full text-center text-lg tracking-widest py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button type='submit'
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg transition duration-200"
          >
            Verify OTP
          </button>

          <p className="text-sm text-center text-gray-500">
            Didn’t receive OTP? <span className="text-blue-600 cursor-pointer">Resend</span>
          </p>
        </form>

      </div>
    </div>
  )
}

export default StudentOtp
