import React from 'react';
import Card from "../../../Components/Card";
import Input from '../../../Components/Input';
import Button from '../../../Components/Button';
import { ShieldCheck, LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import  Axios  from '../../../Axios';

const TeacherLogin = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const login = async (e) => {

        e.preventDefault()

        try {

            const res = await Axios.post("/teacherlogin", {
                email,
                password
            })

            alert("Teacher login successfully")
            navigate("/teacherhome")


        }
    
       catch(err){

        console.log(err)
        alert(err.response?.data?.message||"something went wrong")

       }

    }





    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4">
            <Card className="w-full max-w-md border-t-4 border-t-indigo-600">
                <div className="text-center space-y-2 mb-8">
                    <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-2xl mb-2 text-indigo-600">
                        <LogIn className="w-8 h-8" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
                        Teacher Login
                    </h2>
                    <p className="text-gray-500 text-sm">
                        Access your educator dashboard
                    </p>
                </div>

                <form onSubmit={login} className="space-y-5">
                    <Input
                        label="Email Address"
                        type="email"
                        placeholder="prof@college.edu"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="••••••••"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                      <div className="flex items-center justify-end">
                        <a href="#" onClick={()=>navigate("/temail")} className="text-sm font-medium text-blue-600 hover:text-blue-700">
                            Forgot password?
                        </a>
                    </div>


                    <Button type="submit" variant="primary" className="w-full bg-indigo-600 hover:bg-indigo-700 hover:shadow-indigo-500/30">
                        Teacher Log In
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
                        Register as a new teacher?{' '}
                        <a href="#" onClick={() => navigate("/teachersignup")} className="font-semibold text-indigo-600 hover:text-indigo-700 underline-offset-4 hover:underline">
                            Sign Up
                        </a>
                    </p>
                </form>
            </Card>
        </div>
    );
};

export default TeacherLogin;
