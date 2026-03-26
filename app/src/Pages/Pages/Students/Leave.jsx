import React, { useEffect, useState } from 'react'
import Sidebar from '../../Components/Dashboard/Sidebar'
import Axios from "../../../Axios"

const Leave = () => {
  
 
  const [subject, setSubject] = useState("")
  const [letter, setLetter] = useState("")
  const[from,setFrom]=useState("")

  const [teacher, setTeacher] = useState([])//here we use array due to map function
  const [selectedTeacher, setSelectedTeacher] = useState("")
  

  useEffect(() => {

    const fetchData = async () => {
      const res = await Axios.get("/leave")
      setTeacher(res.data.user)


    }
    fetchData()

  }, [])

  const leaveReq = async (e) => {

    try {
      alert("Request Sent")
      

      const res = await Axios.post("/leave", {
        from,
        selectedTeacher,
        subject,
        letter
      })




    }

    catch (err) {
      alert(err.response?.data?.message || "something went wrong")
    }


  }





  return (
    <div className="flex bg-gray-50 min-h-screen">

      {/* Sidebar */}
      <div className="w-64">
        <Sidebar />
      </div>

      {/* Main Content */}
      <form onSubmit={leaveReq} className="flex-1 p-8">

        <h1 className="text-2xl font-semibold mb-6">Leave Permission</h1>

        {/* From */}
        <div className="bg-white shadow-md rounded-xl p-8 max-w-2xl">

           <div className="mb-6">
            <label className="block mb-2 font-medium text-gray-600">
              From
            </label>
            <input
              onChange={(e)=>setFrom(e.target.value)}
              type="text"
              placeholder="Enter subject"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>


         {/* Teacher Select */}
          <div className="mb-6">
            <label className="block mb-2 font-medium text-gray-600">
              To
            </label>

            <select
              value={selectedTeacher}
              onChange={(e) => setSelectedTeacher(e.target.value)}
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select</option>

              {teacher.map((e) => (
                <option key={e._id} value={e._id}>
                  {e.name}
                </option>
              ))}
            </select>
          </div>

          {/* Subject */}
          <div className="mb-6">
            <label className="block mb-2 font-medium text-gray-600">
              Subject
            </label>
            <input
              onChange={(e)=>setSubject(e.target.value)}
              type="text"
              placeholder="Enter subject"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

       


          {/* Message */}
          <div className="mb-6">
            <label className="block mb-2 font-medium text-gray-600">
              Permission Message
            </label>

            <textarea
              onChange={(e)=>setLetter(e.target.value)}
              rows="6"
              placeholder="Write your permission request..."
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          {/* Button */}
          <button type='submit' className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
            Send Request
          </button>

        </div>
      </form>
    </div>
  )
}

export default Leave
