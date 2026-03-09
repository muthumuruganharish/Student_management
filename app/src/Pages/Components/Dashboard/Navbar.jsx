import { Bell, Search } from "lucide-react";

const Navbar = ({ title }) => {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-8">

      <h1 className="text-xl font-bold">{title}</h1>

      <div className="flex items-center gap-6">

        <div className="relative">
          <Search className="absolute left-2 top-2 w-4 h-4 text-gray-400"/>
          <input
            placeholder="Search..."
            className="pl-8 pr-3 py-1 border rounded-lg"
          />
        </div>

        <Bell className="w-6 h-6 text-blue-600"/>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-200 rounded-full"></div>
          <span className="text-sm">Student</span>
        </div>

      </div>

    </header>
  );
};

export default Navbar;