import React, { useEffect, useState } from 'react'
import Tsidebar from '../../Components/Dashboard/Teacher/Tsidebar'
import Axios from "../../../Axios"


const Marks = () => {

    const [students, setStudents] = useState([])
    const [selectedStudent, setSelectedStudent] = useState(null)//?

    useEffect(() => {

        const fetchData = async () => {


            try {
                const token = localStorage.getItem("token")

                const res = await Axios.get("/teacher-marks", {

                    headers: {
                        Authorization: `Bearer ${token}`
                    }

                })
                console.log("full data", res.data)
                console.log("data only", res)
                setStudents(res.data)
                console.log(students)

            }

            catch (err) {
                alert(err.message)

            }




        }


        fetchData()

    }, [])



    return (
        <div className='flex h-screen'>
            <div className='w-64'>
                <Tsidebar />
            </div>

            <div className='flex-1 p-4'>

                <ul>
                    {students.map((i) => (
                        <li
                            key={i._id}
                            onClick={() => setSelectedStudent(i)}
                            className={`cursor-pointer p-2 ${selectedStudent?._id === i._id ? "bg-gray-600" : ""
                                }`}
                        >
                            {i.name}
                        </li>
                    ))}
                </ul>



            </div>


        </div>
    )
}

export default Marks
