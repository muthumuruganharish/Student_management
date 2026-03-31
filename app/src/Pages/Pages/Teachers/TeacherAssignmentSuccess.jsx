import React from 'react'
import AssignmentSuccess from "../../Components/Assignment/AssignmentSuccess"
import Tsidebar from "../../Components/Dashboard/Teacher/Tsidebar"
import Heading from '../../Components/Assignment/Teacher/Heading'
import CreateAssignment from '../../Components/Assignment/Teacher/CreateAssignment'

    const TeacherAssignmentSuccess = () => {
    return (
        <div className="flex flex-col md:flex-row bg-slate-50 min-h-screen pb-16 md:pb-0">

            {/* Sidebar */}
            <div className="flex-none z-50">
                <Tsidebar />
            </div>

            {/* Main Content */}
            <div className="p-4 md:p-6 md:ml-64 w-full">

                {/* Top Section */}
                <div className="flex flex-col xl:flex-row items-center justify-between mb-8 gap-6">
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