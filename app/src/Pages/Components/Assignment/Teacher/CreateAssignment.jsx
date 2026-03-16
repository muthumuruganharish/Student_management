import React from 'react'
import { Plus } from "lucide-react";
import { useNavigate } from 'react-router-dom';

const CreateAssignment = () => {

    const navigate=useNavigate()

    const create=()=>{

        navigate("/teacher-assignment/create-assignment")


    }

    return (
        <div className='flex items-center justify-between mb-6'>

            {/* Heading */}
           

            {/* Button */}
            <button  onClick={create}  className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                <Plus size={18} />
                Create Assignment
            </button>



        </div>
    )
}

export default CreateAssignment
