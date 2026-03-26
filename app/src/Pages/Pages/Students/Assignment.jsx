import React, { useEffect, useState } from 'react'
import Sidebar from '../../Components/Dashboard/Sidebar'
import Axios from "../../../Axios"

const Assignment = () => {

  const [data, setData] = useState([])

  useEffect(() => {

    const fetchData = async () => {

      const res = await Axios.get("/assignment")
      console.log("FULL RESPONSE:", res)
      console.log("DATA:", res.data)

      setData(res.data.users)




    }
    fetchData()


  }, [])

  return (
    <div className="flex">
  <Sidebar />

  {/* Right Content */}
  <div className="flex-1 bg-gray-100 min-h-screen flex justify-center">
    
    {/* Center Container */}
    <div className="w-full max-w-3xl p-6">
      <h1 className="text-2xl font-bold mb-6">Assignments</h1>

      <div className="space-y-5">
        {data.map((item) => (
          <div
            key={item._id}
            className="bg-white p-5 rounded-2xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition"
          >
            <h2 className="text-lg font-semibold mb-1">{item.title}</h2>
            <p className="text-gray-600 text-sm">{item.description}</p>

            <div className="flex justify-between items-center mt-3">
              <span className="text-sm text-gray-500">
                📘 {item.subject}
              </span>

              <span className="text-sm text-red-500 font-semibold">
                ⏰ Due: {item.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>

  </div>
</div>
  )
}

export default Assignment
