import React from "react";
import { Lock } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Axios from "../../../Axios";

const TeacherReset = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const reset = async (e) => {
    e.preventDefault();

    if (!email) {
      alert("Email missing. Please verify OTP again.");
      navigate("/temail");
      return;
    }

    if (newPassword !== confirmPassword) {
      return alert("Password mismatch");
    }

    try {

      const res = await Axios.put("/treset", {
        email,
        newPassword
      });

      alert(res.data.message || "Password changed successfully");

      navigate("/teacherlogin");

    } catch (err) {
      console.log(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">

      <div className="bg-white shadow-lg rounded-xl p-8 w-[380px] text-center">

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-purple-100 p-3 rounded-lg">
            <Lock className="text-purple-600" size={28} />
          </div>
        </div>

        <form onSubmit={reset}>

          {/* Title */}
          <h2 className="text-xl font-semibold text-gray-800">
            Teacher Reset Password
          </h2>

          <p className="text-sm text-gray-500 mb-6">
            Enter your new password below
          </p>

          {/* New Password */}
          <input
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            type="password"
            placeholder="Enter New Password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Confirm Password */}
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Confirm Password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-5 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition"
          >
            Reset Password
          </button>

        </form>

      </div>

    </div>
  );
};

export default TeacherReset;