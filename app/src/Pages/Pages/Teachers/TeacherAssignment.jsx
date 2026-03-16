import React from 'react'
import Tsidebar from "../../Components/Dashboard/Teacher/Tsidebar"
import Heading from '../../Components/Assignment/Teacher/Heading'
import CreateAssignment from '../../Components/Assignment/Teacher/CreateAssignment'

const TeacherAssignment = () => {
  return (
    <div className="flex bg-slate-50 min-h-screen">

      <div>
        <Tsidebar/>
      </div>

      <div className='p-6 ml-64 flex items-start justify-between mb-8 w-full'>
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
