import React from 'react'
import Button from '../../../Components/Button';
import Card from '../../../Components/Card'
import Input from '../../../Components/Input';
import { Navigate, useNavigate } from 'react-router-dom';

import { UserPlus, User, Mail, Lock } from 'lucide-react';

const StudentSignup = () => {

  const navigate=useNavigate()

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

        <div className="space-y-4">
          <Input
            label="Full Name"
            type="text"
            placeholder="John Doe"
          />

          <Input
            label="Register Number"
            type="number"
            placeholder="Enter your Register Number"
            
          />
          <Input
            label="Email Address"
            type="email"
            placeholder="name@example.com"
          />
          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
          />
          <Input
            label="Confirm Password"
            type="password"
            placeholder="••••••••"
          />

          <Button onClick={()=>navigate("/")} className="w-full mt-4">
            Create Account
          </Button>

          <p className="text-center text-gray-600 mt-6">
            Already have an account?{' '}
            <a href="#" className="font-semibold text-blue-600 hover:text-blue-700 underline-offset-4 hover:underline">
              Login
            </a>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default StudentSignup;

