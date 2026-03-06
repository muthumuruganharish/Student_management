
import { Mail } from "lucide-react";
import { useState } from 'react';
import Axios from "../../../Axios"
import { Navigate, useNavigate } from "react-router-dom";


const StudentVerifyEmail = () => {
const[email,setEmail]=useState("")
const navigate=useNavigate()


  const otp=async(e)=>{

    e.preventDefault()

    try{

       const res= await Axios.post("/semail",{
      email

    })
    alert("email verified")
    navigate("/sotp",{ state: { email } })

    }
    catch(err){
      console.log(err.response?.data?.message||"something went wrong")
    }
   





  }

  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-blue-100 p-4 rounded-xl">
            <Mail className="text-blue-600" size={28} />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          Student Email Verification
        </h2>

        <p className="text-center text-gray-500 mb-6 text-sm">
          Enter your registered email to receive verification OTP
        </p>

        {/* Email Input */}
        <form onSubmit={otp} className="space-y-5">

          <div>
            <label className="text-sm font-medium text-gray-700">
              Email Address
            </label>

            <input
            onChange={(e)=>setEmail(e.target.value)}
              type="email"
              placeholder="name@example.com"
              className="mt-1 w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg transition duration-200"
          >
            Verify Email
          </button>

        </form>

      </div>
    </div>
  );
};

export default StudentVerifyEmail;