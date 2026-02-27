import React from 'react'
import { UserCheck } from 'lucide-react';
import Button from '../../../Components/Button';
import Card from '../../../Components/Card'
import Input from '../../../Components/Input';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Axios from "../../../Axios"
const TeacherSignup = () => {

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const create = async (e) => {
        e.preventDefault()

        if (password === confirmPassword) {

            try {

                const res = await Axios.post("/teachersignup", {
                    name,
                    email,
                    password
                })

                alert("account created for teacher")
                navigate("/Teacherhome")

            }
            catch (err) {

                console.log(err)

            }


        }
        else {
            alert("password mismatch")
        }


    }


    return (
        <div>
            <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4">
                <Card className="w-full max-w-md">
                    <div className="text-center space-y-2 mb-8">
                        <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-2xl mb-2 text-indigo-600">
                            <UserCheck className="w-8 h-8" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
                            Teacher Signup
                        </h2>
                        <p className="text-gray-500 text-sm">
                            Finalize your professional profile
                        </p>
                    </div>

                    <form onSubmit={create} className="space-y-4">
                        <Input
                            label="Full Name"
                            type="text"
                            placeholder="Dr. Sarah Connor"
                            onChange={(e) => setName(e.target.value)}
                        />
                        <Input
                            label="Email Address"
                            type="email"
                            placeholder="sarah.c@college.edu"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Input
                            label="Password"
                            type="password"
                            placeholder="••••••••"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Input
                            label="Confirm Password"
                            type="password"
                            placeholder="••••••••"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />

                        <Button type="submit" variant="primary" className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 shadow-indigo-200">
                            Complete Registration
                        </Button>
                    </form>
                </Card>
            </div>
        </div>
    )
}

export default TeacherSignup
