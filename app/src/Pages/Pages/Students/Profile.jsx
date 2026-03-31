import React from 'react'
import { Mail, GraduationCap, Hash, User } from "lucide-react";
import ProfileHeader from '../../Components/ProfileComponents/ProfileHeader';
import ProfileCard from '../../Components/ProfileComponents/ProfileCard';
import Heading from '../../Components/ProfileComponents/Heading';
import Sidebar from '../../Components/Dashboard/Sidebar';
import { useContext } from 'react';
import { StudentContext } from './StudentContext';


const Profile = () => {
    const{studentEmail,cgpa,name,reg}=useContext(StudentContext)
    console.log("name:",reg)
    return (
    <div className="flex flex-col md:flex-row bg-slate-50 min-h-screen font-sans w-full pb-16 md:pb-0">
      <div className="flex-none z-50">
        <Sidebar />
      </div>

      <div className="flex-1 md:ml-64 p-4 sm:p-6 md:p-10 lg:p-12 transition-all duration-300 overflow-y-auto w-full">
        <div className="max-w-4xl mx-auto w-full">
          {/* Header Section */}
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-3">
              Student Profile
            </h1>
            <p className="text-slate-500 font-medium text-lg flex items-center gap-2">
              <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              View and manage your academic details
            </p>
          </div>

          {/* Profile Card */}
          <div className="bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-slate-100 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all duration-500">
            {/* Cover Photo */}
            <div className="h-48 sm:h-56 bg-indigo-600 relative group overflow-hidden">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500"></div>
              {/* Decorative elements */}
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute top-10 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
            </div>

            {/* Profile Info Section */}
            <div className="relative px-8 sm:px-12 pb-12">
              {/* Avatar */}
              <div className="relative -mt-24 mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
                <div className="relative inline-block">
                  <div className="h-40 w-40 rounded-full border-[6px] border-white bg-white shadow-xl overflow-hidden flex items-center justify-center relative z-10">
                    <div className="h-full w-full bg-indigo-50 flex items-center justify-center text-6xl font-extrabold text-indigo-600 uppercase">
                      H
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 h-7 w-7 rounded-full bg-emerald-500 border-4 border-white z-20 shadow-sm" title="Active Student"></div>
                </div>

                <div className="sm:pb-4 flex items-center">
                  <span className="px-5 py-2.5 bg-gradient-to-r from-indigo-50 to-blue-50 text-indigo-700 rounded-2xl text-sm font-bold tracking-wide border border-indigo-100/50 shadow-sm flex items-center gap-2 hover:shadow-md transition-shadow cursor-default">
                    <svg className="w-4 h-4 text-indigo-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1zm-5 8.274l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L5 10.274zm10 0l-.818 2.552c.25.112.526.174.818.174.292 0 .569-.062.818-.174L15 10.274z" clipRule="evenodd"></path></svg>
                    Enrolled Student
                  </span>
                </div>
              </div>

              {/* Details text */}
              <div className="mb-10">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-2 flex items-center gap-3">
                  {name}
                </h2>
                <div className="text-slate-500 font-medium text-lg flex items-center gap-2">
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  {studentEmail || "student@example.com"}
                </div>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 mt-8 border-t border-slate-100/80 pt-10">
                
                {/* Info Card 1 - Register Number */}
                <div className="bg-slate-50/70 rounded-2xl p-6 border border-slate-100 hover:bg-white hover:border-blue-100 hover:shadow-[0_4px_20px_rgb(59,130,246,0.08)] transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-blue-100/50 flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:bg-blue-100 transition-all duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"></path></svg>
                    </div>
                    <div>
                      <h3 className="text-slate-400 font-semibold uppercase tracking-wider text-xs mb-1">Register Number</h3>
                      <p className="text-slate-800 font-bold text-xl">{reg}</p>
                    </div>
                  </div>
                </div>

                {/* Info Card 2 - Department */}
                <div className="bg-slate-50/70 rounded-2xl p-6 border border-slate-100 hover:bg-white hover:border-indigo-100 hover:shadow-[0_4px_20px_rgb(79,70,229,0.08)] transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-indigo-100/50 flex items-center justify-center text-indigo-600 group-hover:scale-110 group-hover:bg-indigo-100 transition-all duration-300">
                       <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                    </div>
                    <div>
                      <h3 className="text-slate-400 font-semibold uppercase tracking-wider text-xs mb-1">Department</h3>
                      <p className="text-slate-800 font-bold text-xl uppercase">CSE</p>
                    </div>
                  </div>
                </div>

                {/* Info Card 3 - CGPA */}
                <div className="bg-slate-50/70 rounded-2xl p-6 border border-slate-100 hover:bg-white hover:border-emerald-100 hover:shadow-[0_4px_20px_rgb(16,185,129,0.08)] transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-emerald-100/50 flex items-center justify-center text-emerald-600 group-hover:scale-110 group-hover:bg-emerald-100 transition-all duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                    </div>
                    <div>
                      <h3 className="text-slate-400 font-semibold uppercase tracking-wider text-xs mb-1">CGPA</h3>
                      <p className="text-slate-800 font-bold text-xl">{cgpa||"N/A"}</p>
                    </div>
                  </div>
                </div>

                {/* Info Card 4 - Status */}
                <div className="bg-slate-50/70 rounded-2xl p-6 border border-slate-100 hover:bg-white hover:border-orange-100 hover:shadow-[0_4px_20px_rgb(249,115,22,0.08)] transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-12 w-12 rounded-xl bg-orange-100/50 flex items-center justify-center text-orange-600 group-hover:scale-110 group-hover:bg-orange-100 transition-all duration-300">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                    </div>
                    <div>
                      <h3 className="text-slate-400 font-semibold uppercase tracking-wider text-xs mb-1">Status</h3>
                      <p className="text-slate-800 font-bold text-xl flex items-center gap-2">
                         <span className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgb(16,185,129,0.5)]"></span> Active
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
