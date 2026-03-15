import React, { useEffect, useState } from 'react'
import Tsidebar from '../../Components/Dashboard/Teacher/Tsidebar'
import Axios from "../../../Axios"

const TeacherLeave = () => {

  const [leaveData, setLeaveData] = useState([])

  useEffect(() => {

    const fetchData = async () => {

      const res = await Axios.get("/teacher-leave")
      console.log("FULL RESPONSE:", res)
      console.log("DATA:", res.data)

      setLeaveData(res.data.user)

    }

    fetchData()

  }, [])

  return (
    <div className="flex bg-slate-50 min-h-screen">

      <Tsidebar />

      <div className="p-6 ml-80 w-full">

        <h2 className="text-2xl font-semibold mb-6 text-gray-700">
          Leave Requests
        </h2>

        {leaveData.map((i, index) => (

          <div
            key={index}
            className="bg-white border border-gray-200 p-5 mb-5 rounded-xl shadow-sm hover:shadow-md transition"
          >

            <div className="flex justify-between items-center mb-2">

              <h3 className="text-lg font-semibold text-blue-600">
                📩 Leave Request
              </h3>

              <span className="text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                new
              </span>

            </div>

            <p className="text-gray-700">
              <span className="font-semibold">👤 Student:</span> {i.from}
            </p>

            <p className="text-gray-700">
              <span className="font-semibold">📌 Subject:</span> {i.subject}
            </p>

            <p className="text-gray-700 mt-2">
              <span className="font-semibold">📝 Message:</span> {i.letter}
            </p>

            
          </div>

        ))}

      </div>

    </div>
  )
}

export default TeacherLeave