import React from 'react'
import AssignmentSuccess from "../../Components/Assignment/AssignmentSuccess"
import Tsidebar from "../../Components/Dashboard/Teacher/Tsidebar"
import Heading from '../../Components/Assignment/Teacher/Heading'
import CreateAssignment from '../../Components/Assignment/Teacher/CreateAssignment'

const TeacherAssignmentSuccess = () => {
    return (
        <div className="flex bg-slate-50 min-h-screen">

            {/* Sidebar */}
            <Tsidebar />

            {/* Main Content */}
            <div className="p-6 ml-64 w-full">

                {/* Top Section */}
                <div className="flex items-center justify-between mb-8">
                    <Heading />
                    <CreateAssignment />
                </div>

                {/* Success Message Centered */}
                <div className="flex justify-center items-center mt-16">
                    <AssignmentSuccess
                        title="Assignment Submitted Successfully!"
                        message="Your submission has been recorded."
                        buttonText="Go to Dashboard"
                        redirectPath="/teacherhome"
                    />
                </div>

            </div>

        </div>
    )
}

export default TeacherAssignmentSuccess