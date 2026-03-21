import React, { useState, useContext } from 'react';
import Card from "../../../Components/Card";
import Input from '../../../Components/Input';
import Button from '../../../Components/Button';
import { LogIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Axios from "../../../Axios";
import { StudentContext } from '../../Pages/Students/StudentContext';

const StudentLogin = () => {

    const navigate = useNavigate();
    const { setStudentEmail } = useContext(StudentContext);

    const [reg, setReg] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async (e) => {
        e.preventDefault();

        try {
            const res = await Axios.post("/studentlogin", {
                reg,
                email,
                password
            });

            // ✅ update global auth
            setStudentEmail(email);

            alert("Student login successfully");

            navigate("/");
        } catch (err) {
            console.log(err);
            alert(err.response?.data?.message || "Something went wrong");
        }
    };

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
                        placeholder="••••••••"
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button type="submit" className="w-full">
                        Log In
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default StudentLogin;