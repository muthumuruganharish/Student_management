import React from 'react'
import Button from '../../../Components/Button';
import Card from '../../../Components/Card'
import Input from '../../../Components/Input';
import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Axios from "../../../Axios"

import { UserPlus, User, Mail, Lock } from 'lucide-react';

const StudentSignup = () => {

  const [name, setName] = useState("")
  const [reg, setReg] = useState(0)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [conPass, setConpass] = useState("")


  const navigate = useNavigate()


  const create = async (e) => {
    e.preventDefault()

    if (password === conPass) {

      try {

        const res = await Axios.post("/studentsignup", {
          name,
          reg,
          email,
          password

        })

        alert("account created for Students")
        navigate("/")
      }

      catch (err) {

        console.log(err)
        alert(err.response?.data?.message||"something went wrong")

      }

    }
    else {
      alert("passwor mismatch")
    }

  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <div className="text-center space-y-2 mb-8">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-2xl mb-2 text-blue-600">
            <UserPlus className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
            Student Signup
          </h2>
          <p className="text-gray-500 text-sm">
            Create an account to start your journey
          </p>
        </div>

        <form onSubmit={create} className="space-y-4">
          <Input

            label="Full Name"
            type="text"
            placeholder="John Doe"
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            label="Register Number"
            type="number"
            placeholder="Enter your Register Number"
            onChange={(e) => setReg(e.target.value)}


          />
          <Input
            label="Email Address"
            type="email"
            placeholder="name@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            autoComplete="new-password"
            placeholder="••••••••"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            label="Confirm Password"
            type="password"
            placeholder="••••••••"
            onChange={(e) => setConpass(e.target.value)}
          />

          <Button type="submit" className="w-full mt-4">
            Create Account
          </Button>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-200"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">Or continue with</span>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-6">
            Already have an account?{' '}
            <a href="#" onClick={() => navigate("/studentlogin")} className="font-semibold text-blue-600 hover:text-blue-700 underline-offset-4 hover:underline">
              Login
            </a>
          </p>
        </form>




      </Card>
    </div>
  );
};

export default StudentSignup;

