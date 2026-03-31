import React, { useEffect, useState } from 'react'
import Tsidebar from '../../Components/Dashboard/Teacher/Tsidebar'
import Axios from "../../../Axios"

const Marks = () => {

    const [students, setStudents] = useState([])
    const [selectedStudent, setSelectedStudent] = useState(null)
    const[cgpa,setCgpa]=useState("")
    const[attendance,setAttendence]=useState("")

    useEffect(() => {

        const fetchData = async () => {

            try {
                const token = localStorage.getItem("token")

                const res = await Axios.get("/teacher-marks", {

                    headers: {
                        Authorization: `Bearer ${token}`
                    }

                })
                // console.log("full data", res.data)
                // console.log("data only", res)
                setStudents(res.data)
                // console.log(students)

            }

            catch (err) {
                alert(err.message)
            }

        }

        fetchData()

    }, [])

   const stuMark = async (e) => {
    e.preventDefault();

    try {
         const token = localStorage.getItem("token")
        const res = await Axios.post(
            "/teacher-marks",
            {
                selectedStudent:selectedStudent._id,
                cgpa:Number(cgpa),
                attendance:Number(attendance)
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        alert(res.data.message);
        setSelectedStudent("")
        setCgpa("")
        setAttendence("")

    } catch (err) {
        alert(err.message);
    }
}

    return (
        <div className="flex flex-col md:flex-row h-screen bg-slate-50 overflow-hidden font-sans pb-16 md:pb-0">
            {/* Sidebar */}
            <div className="flex-none z-50">
                <Tsidebar />
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col h-full relative md:ml-64 w-full">
                {/* Header */}
                <header className="bg-white px-8 py-6 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] z-0 border-b border-gray-100 flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">Student Marks</h1>
                        <p className="text-sm text-gray-500 mt-1">Select a student to view or update their academic performance</p>
                    </div>
                </header>

                {/* Content Area */}
                <div className="flex-1 flex overflow-hidden p-6 gap-6">
                    
                    {/* Student List Column */}
                    <div className="w-1/3 min-w-[300px] flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300">
                        <div className="p-5 border-b border-gray-50 bg-white z-10 shadow-[0_4px_6px_-6px_rgba(0,0,0,0.1)]">
                            <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
                                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                                </svg>
                                Students Roster
                            </h2>
                        </div>
                        
                        <div className="flex-1 overflow-y-auto p-3 space-y-2 custom-scrollbar bg-slate-50/50">
                            {students.length > 0 ? (
                                students.map((i) => (
                                    <div
                                        key={i._id}
                                        onClick={() => setSelectedStudent(i)}
                                        className={`group cursor-pointer p-3.5 rounded-xl transition-all duration-200 flex items-center gap-4 ${
                                            selectedStudent?._id === i._id 
                                            ? "bg-indigo-50 border border-indigo-200 shadow-sm transform scale-[1.01]" 
                                            : "bg-white border border-gray-100 hover:bg-white hover:border-gray-200 hover:shadow-md"
                                        }`}
                                    >
                                        <div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm transition-colors shadow-sm ${
                                            selectedStudent?._id === i._id
                                            ? "bg-gradient-to-br from-indigo-500 to-purple-600 text-white"
                                            : "bg-gradient-to-br from-gray-100 to-gray-200 text-gray-600 group-hover:from-indigo-100 group-hover:to-indigo-50 group-hover:text-indigo-600"
                                        }`}>
                                            {i.name?.charAt(0).toUpperCase() || '?'}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className={`text-[15px] font-semibold truncate transition-colors ${
                                                selectedStudent?._id === i._id ? "text-indigo-900" : "text-gray-800"
                                            }`}>
                                                {i.name}
                                            </p>
                                            <p className="text-xs text-gray-500 truncate mt-0.5 font-medium">
                                                ID: {i._id?.substring(0, 8) || 'Unknown'}...
                                            </p>
                                        </div>
                                        {selectedStudent?._id === i._id && (
                                            <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)] animate-pulse"></div>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <div className="text-center p-8 text-gray-500 flex flex-col items-center justify-center h-full">
                                    <div className="w-16 h-16 bg-white border border-gray-100 shadow-sm rounded-full flex items-center justify-center mb-4">
                                        <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                                        </svg>
                                    </div>
                                    <p className="text-sm font-medium text-gray-600">No students found</p>
                                    <p className="text-xs text-gray-400 mt-1">List will appear here once loaded.</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Details Column */}
                    <div className="flex-1 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col relative transition-all duration-300">
                        {selectedStudent ? (
                            <div className="flex-1 flex flex-col animate-fadeIn">
                                {/* Selected Student Header */}
                                <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 p-8 text-white relative overflow-hidden shrink-0">
                                     {/* Background decorations */}
                                     <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-10 blur-3xl"></div>
                                     <div className="absolute bottom-0 right-32 -mb-16 w-48 h-48 rounded-full bg-purple-300 opacity-20 blur-2xl"></div>
                                     <div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -rotate-12 transform origin-left"></div>
                                     
                                     <div className="relative z-10 flex items-center gap-6">
                                        <div className="w-24 h-24 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 shadow-xl">
                                            <span className="text-4xl font-bold text-white drop-shadow-md">
                                                {selectedStudent.name?.charAt(0).toUpperCase() || '?'}
                                            </span>
                                        </div>
                                        <div>
                                            <h2 className="text-3xl font-bold tracking-tight text-white drop-shadow-sm">{selectedStudent.name}</h2>
                                            <div className="flex items-center gap-4 mt-2">
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-indigo-50 text-sm font-medium backdrop-blur-sm border border-white/10">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                                                    </svg>
                                                    ID: {selectedStudent._id}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex-1 p-8 bg-gray-50/50 flex flex-col relative overflow-hidden overflow-y-auto">
                                    {/* Subtle pattern background */}
                                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                                    
                                    <div className="relative z-10 w-full max-w-3xl mx-auto h-full flex flex-col">
                                        
                                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 transform transition-all duration-300">
                                            <div className="mb-8 border-b border-gray-100 pb-5">
                                                <h3 className="text-xl font-bold text-gray-800">Academic Records Update</h3>
                                                <p className="text-sm text-gray-500 mt-1">Update the latest CGPA and monthly attendance percentage for {selectedStudent.name}.</p>
                                            </div>

                                            {/* --- UPDATE FORM CONTAINER --- */}
                                            {/* (JS state binding like value={}, onChange={} should go on these inputs) */}
                                            <form className="space-y-6" onSubmit={stuMark}>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                    
                                                    {/* -------- INPUT FOR CGPA --- */}
                                                    <div className="space-y-2 relative group">
                                                        <label htmlFor="cgpa" className="block text-sm font-semibold text-gray-700 group-focus-within:text-indigo-600 transition-colors">
                                                            Current CGPA
                                                        </label>
                                                        <div className="relative">
                                                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                                </svg>
                                                            </div>
                                                            <input
                                                                onChange={(e)=>setCgpa(e.target.value)}
                                                                type="text"
                                                                id="cgpa"
                                                                name="cgpa"
                                                                placeholder="e.g. 8.5"
                                                                className="block w-full pl-11 pr-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-gray-800 focus:bg-white focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all shadow-sm text-sm font-medium"
                                                            />
                                                        </div>
                                                        <p className="text-xs text-gray-500 font-medium ml-1">Scale of 10.0</p>
                                                    </div>

                                                    {/* --------- INPUT FOR ATTENDANCE ------------------- */}
                                                    <div className="space-y-2 relative group">
                                                        <label htmlFor="attendance" className="block text-sm font-semibold text-gray-700 group-focus-within:text-indigo-600 transition-colors">
                                                            Attendance Percentage
                                                        </label>
                                                        <div className="relative">
                                                            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                </svg>
                                                            </div>
                                                            <input
                                                                onChange={(e)=>setAttendence(e.target.value)}
                                                                type="text"
                                                                id="attendance"
                                                                name="attendance"
                                                                placeholder="e.g. 85"
                                                                className="block w-full pl-11 pr-8 py-3 bg-gray-50/50 border border-gray-200 rounded-xl text-gray-800 focus:bg-white focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all shadow-sm text-sm font-medium"
                                                            />
                                                            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-400 font-bold">
                                                                %
                                                            </div>
                                                        </div>
                                                        <p className="text-xs text-gray-500 font-medium ml-1">Current semester total</p>
                                                    </div>
                                                </div>

                                                {/* --- SUBMIT / UPDATE BUTTON --- */}
                                                {/* (Attach your onClick handler here later!) */}
                                                <div className="pt-6 mt-6 border-t border-gray-100 flex justify-end">
                                                    <button 
                                                        type="submit" 
                                                        className="px-6 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 focus:ring-4 focus:ring-indigo-500/30"
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                        Update Records
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="flex-1 right-empty-state flex flex-col items-center justify-center p-8 text-center bg-gray-50/30">
                                <div className="w-40 h-40 mb-8 relative">
                                    <div className="absolute inset-0 bg-indigo-50 rounded-full opacity-70 animate-pulse"></div>
                                    <div className="absolute inset-4 bg-white rounded-full shadow-sm flex items-center justify-center text-indigo-200 border border-indigo-50">
                                        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M7 8H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M7 12H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M7 16H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-3">No Student Selected</h3>
                                <p className="text-gray-500 max-w-md text-base leading-relaxed">
                                    Select a student from the roster on the left to view their detailed marks, academic performance, and recent activity.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            
            <style dangerouslySetInnerHTML={{__html: `
                .custom-scrollbar::-webkit-scrollbar {
                    width: 5px;
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
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.4s ease-out forwards;
                }
            `}} />
        </div>
    )
}

export default Marks
