import React, { useState } from 'react'
import Tsidebar from '../../Dashboard/Teacher/Tsidebar'
import Heading from './Heading'
import CreateAssignment from './CreateAssignment'
import Axios from "../../../../Axios"
import { useNavigate } from 'react-router-dom'



const AssignmentDetail = () => {
    const navigate = useNavigate()

    const [title, setTitle] = useState("")
    const [subject, setSubject] = useState("")

    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")

    const [totalMarks, setTotalMarks] = useState("")
    const [file, setFile] = useState("")



    const sendData = async (e) => {

        e.preventDefault()

        try {

            const res = await Axios.post("/teacher-assignment/create-assignment", {
                title,
                subject,
                description,
                date,
                totalMarks,
                file
            })
            navigate("/teacher-assignment/created")





        }

        catch (err) {
            console.log(err)
            alert(err.response?.data?.message || "something went wrong")

        }

    }



    return (
        <div>
            <div className="flex flex-col md:flex-row bg-slate-50 min-h-screen pb-16 md:pb-0 w-full">

                <div className="flex-none z-50">
                    <Tsidebar />
                </div>

                <div className='p-4 sm:p-6 md:ml-64 mb-8 w-full'>

                    <div className='flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 sm:gap-0'>

                        <div>
                            <Heading />
                        </div>

                        <div className=''>
                            <CreateAssignment />

                        </div>

                    </div>



                    {/* -----input card----- */}

                    <form onSubmit={sendData} className='max-w-2xl mx-auto' >

                        <div className="bg-white shadow-md rounded-xl p-6 max-w-2xl mt-6">

                            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                Create Assignment
                            </h2>

                            <div className="space-y-4">

                                {/* Title */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Title
                                    </label>
                                    <input
                                        onChange={(e) => setTitle(e.target.value)}
                                        type="text"
                                        placeholder="Enter assignment title"
                                        className="w-full mt-1 border rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                                    />
                                </div>

                                {/* Subject */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Subject
                                    </label>
                                    <input
                                        onChange={(e) => setSubject(e.target.value)}
                                        type="text"
                                        placeholder="Enter subject"
                                        className="w-full mt-1 border rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                                    />
                                </div>

                                {/* Description */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Description
                                    </label>
                                    <textarea
                                        onChange={(e) => setDescription(e.target.value)}
                                        rows="3"
                                        placeholder="Enter assignment description"
                                        className="w-full mt-1 border rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                                    />
                                </div>

                                {/* Due Date */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Due Date
                                    </label>
                                    <input
                                        onChange={(e) => setDate(e.target.value)}
                                        type="date"
                                        className="w-full mt-1 border rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                                    />
                                </div>

                                {/* Total Marks */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Total Marks
                                    </label>
                                    <input
                                        onChange={(e) => setTotalMarks(e.target.value)}
                                        type="number"
                                        placeholder="Enter marks"
                                        className="w-full mt-1 border rounded-lg p-2 focus:ring-2 focus:ring-indigo-500 outline-none"
                                    />
                                </div>

                                {/* File Upload */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Upload File
                                    </label>
                                    <input
                                        onChange={(e) => setFile(e.target.value)}
                                        type="file"
                                        className="w-full mt-1"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button type='submit' className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
                                    Submit Assignment
                                </button>

                            </div>
                        </div>




                    </form>



                </div>





            </div>

        </div>
    )
}

export default AssignmentDetail
