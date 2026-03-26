import React from "react";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SuccessMessage = ({
  title = "Success!",
  message = "Operation completed successfully",
  buttonText = "Go Back",
  redirectPath = "/",
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center">
      
      <div className="bg-slate-50 border border-slate-200 p-8 rounded-2xl shadow-md text-center w-[90%] max-w-md">
        
        {/* Green Tick */}
        <div className="flex justify-center">
          <CheckCircle size={80} className="text-green-500" />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold mt-4 text-slate-800">
          {title}
        </h2>

        {/* Message */}
        <p className="text-slate-500 mt-2">
          {message}
        </p>

        {/* Button */}
        <button
          onClick={() => navigate(redirectPath)}
          className="mt-6 bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default SuccessMessage;