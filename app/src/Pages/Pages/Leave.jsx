import React from 'react'
import Sidebar from '../Components/Dashboard/Sidebar'
import Axios from "../../Axios"

const Leave = () => {

    


    return (
        <div className='flex'>

            <div className='w-64'>
                <Sidebar />
            </div>
            



            <div className='p-6'>


                <div className='flex-1 p-6'>
                    <label >Subject : </label>
                    <input className='border p-2  w-30' type="text" />
                </div>

                <div className='p-6'>

                        <label> Select the Teacher to send :</label>
                        <select>
                            <option value="">Select</option>
                            <option value="">Hi</option>
                        </select>
                </div>


                <div className='border p-2 '>
                   <textarea rows="10" className='w-[500px]' placeholder='Write your Permission Here'></textarea>
                </div>
            </div>

        </div>
    )
}

export default Leave
