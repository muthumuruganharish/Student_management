import React from 'react'
import Tsidebar from "../../Components/Dashboard/Teacher/Tsidebar"
import Heading from '../../Components/Assignment/Teacher/Heading'
import CreateAssignment from '../../Components/Assignment/Teacher/CreateAssignment'

const TeacherAssignment = () => {
  return (
    <div className="flex flex-col md:flex-row bg-slate-50 min-h-screen pb-16 md:pb-0">

      <div className="flex-none z-50">
        <Tsidebar/>
      </div>

      <div className='p-4 md:p-6 md:ml-64 flex flex-col xl:flex-row items-center xl:items-start justify-between mb-8 w-full gap-6'>
        <div>
           <Heading/>
        </div>

        <div className=''> 
          <CreateAssignment/>

        </div>
     
      </div>


      
    </div>
  )
}

export default TeacherAssignment
