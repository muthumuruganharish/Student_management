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
    <div className="flex flex-col md:flex-row bg-slate-50 min-h-screen font-sans w-full pb-16 md:pb-0">
      <div className="flex-none z-50">
        <Sidebar />
      </div>

      <div className="flex-1 md:ml-64 p-4 sm:p-6 md:p-10 lg:p-12 transition-all duration-300 overflow-y-auto w-full">
        <div className="max-w-6xl mx-auto w-full">
          {/* Header Section */}
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-3">
              Assignments
            </h1>
            <p className="text-slate-500 font-medium text-lg flex items-center gap-2">
              <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
              View and manage your current coursework
            </p>
          </div>

          {/* Assignments Grid */}
          {data && data.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.map((item) => (
                <div
                  key={item._id}
                  className="bg-white rounded-[1.5rem] p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100/80 hover:shadow-[0_8px_30px_rgb(79,70,229,0.08)] hover:border-indigo-100 transition-all duration-300 group flex flex-col"
                >
                  <div className="flex items-start justify-between mb-4 gap-2">
                    <div className="bg-indigo-50 text-indigo-700 px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide border border-indigo-100 gap-1 flex items-center break-words flex-1">
                      <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                      {item.subject}
                    </div>
                    {/* Status Badge */}
                    <div className="bg-orange-50 text-orange-600 px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide border border-orange-100 flex items-center gap-1 flex-shrink-0">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                      Due {item.date}
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2">{item.title}</h2>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">{item.description}</p>
                  
                  <div className="mt-auto pt-4 border-t border-slate-100 flex justify-end">
                    <button className="text-indigo-600 font-semibold text-sm flex items-center gap-1 hover:text-indigo-700 transition-colors">
                      View Details
                      <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-[2rem] p-12 text-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
               <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
                 <svg className="w-12 h-12 text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
               </div>
               <h3 className="text-2xl font-bold text-slate-800 mb-2">No Assignments Yet</h3>
               <p className="text-slate-500 max-w-md mx-auto">You're all caught up! There are currently no pending assignments for your classes.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Assignment
