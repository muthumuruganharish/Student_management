import { Bell, Search } from "lucide-react";

const Navbar = ({ title }) => {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-4 md:px-8">

      <h1 className="text-lg md:text-xl font-bold truncate mr-2">{title}</h1>

      <div className="flex items-center gap-3 md:gap-6">

        <div className="relative hidden sm:block">
          <Search className="absolute left-2 top-2 w-4 h-4 text-gray-400"/>
          <input
            placeholder="Search..."
            className="pl-8 pr-3 py-1 border rounded-lg w-32 md:w-auto"
          />
        </div>

        <Bell className="w-5 h-5 md:w-6 md:h-6 text-blue-600"/>

        <div className="flex items-center gap-2">
          <div className="w-7 h-7 md:w-8 md:h-8 bg-blue-200 rounded-full flex-shrink-0"></div>
          <span className="text-sm hidden sm:block">Student</span>
        </div>

      </div>

    </header>
  );
};

export default Navbar;