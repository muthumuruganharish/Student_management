import React, { useState } from 'react';
import Card from "../../../Components/Card";
import Input from '../../../Components/Input';
import Button from '../../../Components/Button';
import { Mail, Lock, LogIn } from 'lucide-react';
import { Navigate, useNavigate } from 'react-router-dom';
import Axios from "../../../Axios"
import { useContext } from 'react';
import { StudentContext } from '../../Pages/Students/StudentContext';


const StudentLogin = () => {

  const navigate= useNavigate()
const {setStudentEmail}=useContext(StudentContext)


  const [reg,setReg]=useState("")
  const [email,setEmail]=useState("")
  const[password,setPassword]=useState("")



  const login=async(e)=>{

    e.preventDefault()

    try{

        const res= await Axios.post("/studentlogin",{
            reg,
            email,
            password
        })
        setStudentEmail(email)
        alert("Student login successfully")

        navigate("/")

    }

    catch(err){
        console.log(err)
        alert(err.response?.data?.message||"something went wrong")
    }



  }



    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4">
            <Card className="w-full max-w-md">
                <div className="text-center space-y-2 mb-8">
                    <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-2xl mb-2 text-blue-600">
                        <LogIn className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
                        Student Login
                    </h2>
                    <p className="text-gray-500 text-sm">
                        Enter your credentials to access your portal
                    </p>
                </div>

                <form onSubmit={login} className="space-y-5">
                     <Input
                        label="Register Number"
                        type="number"
                        placeholder="Register number"
                        onChange={(e)=>setReg(e.target.value)}
                      
                    />
                    <Input
                        label="Email Address"
                        type="email"
                        placeholder="name@example.com"
                        autoComplete="email"
                           onChange={(e)=>setEmail(e.target.value)}
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="••••••••"
                        autoComplete="current-password"
                           onChange={(e)=>setPassword(e.target.value)}
                    />

                    <div className="flex items-center justify-end">
                        <a href="#" onClick={()=>navigate("/semail")} className="text-sm font-medium text-blue-600 hover:text-blue-700">
                            Forgot password?
                        </a>
                    </div>

                    <Button type="submit" className="w-full">
                        Log In
                    </Button>

                    <div className="relative my-8">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-gray-200"></span>
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white px-2 text-gray-500">Or continue with</span>
                        </div>
                    </div>

                    <p className="text-center text-gray-600">
                        Don't have an account?{' '}
                        <a href="#" onClick={()=>navigate("/studentsignup")} className="font-semibold text-blue-600 hover:text-blue-700 underline-offset-4 hover:underline">
                            Sign Up
                        </a>
                    </p>
                </form>
            </Card>
        </div>
    );
};

export default StudentLogin;
