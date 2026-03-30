import React, { useEffect, useState } from 'react'
import Tsidebar from '../../Components/Dashboard/Teacher/Tsidebar'
import Axios from "../../../Axios"

const TeacherLeave = () => {

  const [leaveData, setLeaveData] = useState([])

  useEffect(() => {
      console.log("TOKEN 👉", localStorage.getItem("token"));

    const fetchData = async () => {

      const res = await Axios.get("/teacher-leave")
      console.log("FULL RESPONSE:", res)
      console.log("DATA:", res.data)

      setLeaveData(res.data.leaves)

    }

    fetchData()

  }, [])

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      {/* Sidebar - Consistent with Marks layout */}
      <div className="w-64 flex-shrink-0 shadow-lg z-20 bg-white relative">
          <Tsidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full relative overflow-hidden">
        {/* Header */}
        <header className="bg-white px-8 py-6 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] z-10 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
                <h1 className="text-2xl font-bold text-gray-800 tracking-tight flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center border border-indigo-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    Student Leave Requests
                </h1>
                <p className="text-sm text-gray-500 mt-1 sm:ml-14">Manage and review student leave applications securely</p>
            </div>
            
            {leaveData && leaveData.length > 0 && (
                <div className="flex items-center gap-2.5 bg-gradient-to-r from-indigo-50 to-blue-50 px-4 py-2 rounded-xl border border-indigo-100/50 shadow-sm">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-indigo-500"></span>
                    </span>
                    <span className="text-sm font-bold text-indigo-700">
                        {leaveData.length} Total Requests
                    </span>
                </div>
            )}
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 bg-slate-50/50 custom-scrollbar z-0 relative">
            
            {/* Background elements */}
            <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-indigo-300 rounded-full opacity-10 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-300 rounded-full opacity-10 blur-3xl pointer-events-none"></div>

            <div className="relative z-10 max-w-7xl mx-auto space-y-6">
                {leaveData && leaveData.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {leaveData.map((i, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-2xl shadow-sm border border-gray-100 hover:border-indigo-200 hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col transform hover:-translate-y-1"
                            >
                                {/* Card Header */}
                                <div className="p-5 border-b border-gray-50 bg-gradient-to-br from-white to-gray-50 flex justify-between items-start">
                                    <div className="flex gap-3.5 items-center">
                                        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 text-gray-600 flex items-center justify-center font-bold shadow-sm border border-white group-hover:from-indigo-500 group-hover:to-purple-600 group-hover:text-white transition-all duration-300 transform group-hover:scale-105">
                                            {i.from?.charAt(0).toUpperCase() || '?'}
                                        </div>
                                        <div>
                                            <h3 className="text-[15px] font-bold text-gray-800 leading-tight group-hover:text-indigo-600 transition-colors">
                                                {i.from || 'Unknown Student'}
                                            </h3>
                                            <p className="text-[11px] text-gray-500 font-semibold uppercase tracking-wider mt-0.5">Student</p>
                                        </div>
                                    </div>
                                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] uppercase font-bold tracking-wider bg-amber-50 text-amber-600 border border-amber-100 shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mr-1.5 animate-pulse"></span>
                                        New
                                    </span>
                                </div>

                                {/* Card Body */}
                                <div className="p-5 flex-1 flex flex-col bg-white">
                                    <div className="mb-4">
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                            </svg>
                                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Subject</span>
                                        </div>
                                        <div className="text-gray-800 font-medium text-sm bg-gray-50 p-2.5 rounded-lg border border-gray-100 break-words group-hover:bg-indigo-50/30 transition-colors">
                                            {i.subject || 'No subject provided'}
                                        </div>
                                    </div>

                                    <div className="flex-1 flex flex-col">
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                            </svg>
                                            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Message</span>
                                        </div>
                                        <div className="flex-1 bg-indigo-50/40 p-4 rounded-xl border border-indigo-100/60 text-sm text-gray-700 leading-relaxed italic relative">
                                            <svg className="absolute top-2 left-2 h-5 w-5 text-indigo-200/50" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                            </svg>
                                            <p className="pl-6 relative z-10 break-words leading-relaxed">
                                                "{i.letter || 'No message provided'}"
                                            </p>
                                        </div>
                                    </div>
                                    
                                    {/* Simulated Action Buttons */}
                                    <div className="mt-5 pt-4 border-t border-gray-50 flex gap-3 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                                        <button className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-sm font-semibold text-emerald-600 bg-emerald-50 hover:bg-emerald-500 hover:text-white border border-emerald-100 hover:border-emerald-500 transition-colors shadow-sm cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Approve
                                        </button>
                                        <button className="flex items-center justify-center py-2 px-3 rounded-xl text-sm font-semibold text-rose-500 bg-white hover:bg-rose-50 border border-gray-200 hover:border-rose-200 transition-colors shadow-sm cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                            Deny
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-24 px-4 text-center mt-10">
                        <div className="w-32 h-32 bg-white rounded-full shadow-sm border border-gray-100 flex items-center justify-center mb-6 relative">
                            <div className="absolute inset-0 bg-indigo-100 rounded-full animate-pulse opacity-40 transform scale-125"></div>
                            <svg className="w-16 h-16 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 19v-8.93a2 2 0 018.9-2.538l2.15-1.075a2 2 0 011.898.006l2.151 1.075a2 2 0 01.901 2.538V19m-16 0h16M3 19h16T5 19h14M9 13v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 0h6m-3-1v-4m0 0H8m4 0h4" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">No Leave Requests</h3>
                        <p className="text-gray-500 max-w-sm mx-auto text-base">
                            Awesome! Your inbox is clear. There are currently no leave requests pending from any students.
                        </p>
                    </div>
                )}
            </div>
        </div>

        <style dangerouslySetInnerHTML={{__html: `
            .custom-scrollbar::-webkit-scrollbar {
                width: 6px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
                background: transparent;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
                background-color: #cbd5e1;
                border-radius: 20px;
            }
            .custom-scrollbar:hover::-webkit-scrollbar-thumb {
                background-color: #94a3b8;
            }
        `}} />
      </div>
    </div>
  )
}

export default TeacherLeave