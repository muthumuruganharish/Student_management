import React from 'react'

const TeacherVerifyEmail = () => {
  return (
    <div>
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
            Verify Your Email
          </h2>

          <p className="text-center text-gray-500 mb-6 text-sm">
            We’ve sent a verification link to your email address.
            Please check your inbox and click the link to continue.
          </p>

          {/* Buttons */}
          <div className="space-y-4">
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2.5 rounded-lg transition duration-200">
              I Have Verified
            </button>

            <p className="text-sm text-center text-gray-500">
              Didn’t receive email?{" "}
              <span className="text-purple-600 cursor-pointer">
                Resend Email
              </span>
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default TeacherVerifyEmail
