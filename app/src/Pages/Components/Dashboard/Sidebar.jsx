import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  BookOpen,
  CalendarCheck,
  User,
  LogOut
} from "lucide-react";

const Sidebar = () => {
  const navigate = useNavigate();
  const logout=()=>{

    localStorage.removeItem("token")
    navigate("/studentlogin")

  }

  return (
    <aside className="w-full md:w-64 bg-white border-t md:border-r md:border-t-0 flex flex-row md:flex-col h-16 md:h-screen fixed bottom-0 md:top-0 left-0 z-50">

      <div className="hidden md:block p-6 border-b">
        <h1 className="text-xl font-bold text-blue-600">Campus</h1>
      </div>

      <nav className="flex-1 flex flex-row md:flex-col p-2 md:p-4 justify-around md:justify-start items-center md:items-stretch overflow-x-auto gap-1 md:gap-0 md:space-y-2">

        <div
          onClick={() => navigate("/studenthome")}
          className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-3 px-3 md:px-4 py-2 md:py-3 rounded-xl bg-blue-100 text-blue-600 cursor-pointer"
        >
          <LayoutDashboard className="w-5 h-5" />
          <span className="text-[10px] md:text-base hidden sm:block md:block">Dashboard</span>
        </div>

        <div
          onClick={() => navigate("/assignments")}
          className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-3 px-3 md:px-4 py-2 md:py-3 rounded-xl hover:bg-blue-50 cursor-pointer text-gray-600 md:text-gray-700"
        >
          <BookOpen className="w-5 h-5" />
          <span className="text-[10px] md:text-base hidden sm:block md:block">Assignments</span>
        </div>

        <div
          onClick={() => navigate("/leave")}
          className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-3 px-3 md:px-4 py-2 md:py-3 rounded-xl hover:bg-blue-50 cursor-pointer text-gray-600 md:text-gray-700"
        >
          <CalendarCheck className="w-5 h-5" />
          <span className="text-[10px] md:text-base hidden sm:block md:block">Leave</span>
        </div>

        
         <div
          onClick={() => navigate("/student-profile")}
          className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-3 px-3 md:px-4 py-2 md:py-3 rounded-xl hover:bg-blue-50 cursor-pointer text-gray-600 md:text-gray-700"
        >
          <User className="w-5 h-5" />
          <span className="text-[10px] md:text-base hidden sm:block md:block">Profile</span>
        </div>

      </nav>

      <div className="md:p-4 md:border-t flex items-center justify-center p-2">
        <button onClick={logout} className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-1 md:gap-3 p-2 md:p-0 rounded-xl text-red-500 hover:bg-red-50 transition-colors w-full">
          <LogOut className="w-5 h-5" />
          <span className="text-[10px] md:text-base hidden sm:block md:block">Logout</span>
        </button>
      </div>

    </aside>
  );
};

export default Sidebar;