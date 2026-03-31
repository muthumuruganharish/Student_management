import { useEffect, useState } from "react";
import Navbar from "./Components/Dashboard/Navbar";
import Sidebar from "./Components/Dashboard/Sidebar";
import Axios from "../Axios"
import { useContext } from "react";
import { StudentContext } from "./Pages/Students/StudentContext";

const Home = () => {

  // const [cgpa, setCgpa] = useState("")
  // const [marks, setMarks] = useState("")
  // const [name, setName] = useState("")

  const[stu,setStu]=useState("")

  
  const { setCgpa,setName,setReg } = useContext(StudentContext);
  


  useEffect(() => {

    const fetchData = async () => {


      try {

        const email = localStorage.getItem("studentEmail");
        const token = localStorage.getItem("token")

        if (!email) {
          window.location.href = "/studentlogin";

        }

        const res= await Axios.get("/studenthome",{
           headers: {
                        Authorization: `Bearer ${token}`
                    }
        })

        setStu(res.data)
        // console.log(res.data);
        setCgpa(res.data?.cgpa)
        setName(res.data?.selectedStudent?.name)
        setReg(res.data?.selectedStudent?.reg)
       

      }

      catch (err) {

        alert(err.response?.data?.message ||err.message)

      }










    }

    fetchData()

  }, []);









  return (
    <div className="flex flex-col md:flex-row bg-slate-50 min-h-screen pb-16 md:pb-0">

      <div className="flex-none z-50">
        <Sidebar />
      </div>

      <main className="md:ml-64 flex-1 w-full">

        <Navbar title="Dashboard" />

        <div className="p-8">

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-8 rounded-2xl mb-8">
            <h2 className="text-3xl font-bold">Welcome {stu?.selectedStudent?.name||"Student"} 👋</h2>
            <p>You have 3 assignments due this week.</p>
          </div>

          <div className="grid grid-cols-3 gap-6">

            <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
              <p className="text-gray-600">GPA</p>
              <h3 className="text-2xl font-bold text-blue-600">{stu?.cgpa||"3.8"}</h3>
            </div>

            <div className="bg-green-50 p-6 rounded-xl shadow-sm">
              <p className="text-gray-600">Attendance</p>
              <h3 className="text-2xl font-bold text-green-600">{stu?.attendance||"94%"}</h3>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl shadow-sm">
              <p className="text-gray-600">Courses</p>
              <h3 className="text-2xl font-bold text-purple-600">6</h3>
            </div>

          </div>

        </div>

      </main>

    </div>
  );
};

export default Home;