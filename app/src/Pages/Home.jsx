import React from 'react';
import {
    LayoutDashboard,
    BookOpen,
    User,
    LogOut,
    Bell,
    Search,
    Menu,
    CalendarCheck
} from 'lucide-react';

const Sidebar = ({ role = 'student', items }) => (
    <aside className="w-64 bg-white border-r border-gray-100 flex flex-col h-screen fixed left-0 top-0">
        <div className="p-6 border-b border-gray-50 flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
                C
            </div>
            <span className="font-bold text-xl text-gray-900">Campus</span>
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {items.map((item, idx) => (
                <a
                    key={idx}
                    href="#"
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${item.active
                            ? 'bg-blue-50 text-blue-600 font-semibold'
                            : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                >
                    <item.icon className="w-5 h-5" />
                    {item.label}
                </a>
            ))}
        </nav>

        <div className="p-4 border-t border-gray-50">
            <button className="flex items-center gap-3 w-full px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl transition-colors font-medium">
                <LogOut className="w-5 h-5" />
                Logout
            </button>
        </div>
    </aside>
);

const Navbar = ({ title }) => (
    <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-10">
        <div className="flex items-center gap-4">
            <button className="lg:hidden p-2 text-gray-500">
                <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold text-gray-900">{title}</h1>
        </div>

        <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search..."
                    className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 w-64"
                />
            </div>
            <button className="relative p-2 text-gray-500 hover:bg-gray-50 rounded-full transition-colors">
                <Bell className="w-6 h-6" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-gray-100">
                <div className="text-right hidden sm:block">
                    <p className="text-sm font-semibold text-gray-900">John Doe</p>
                    <p className="text-xs text-gray-500">Student</p>
                </div>
                <div className="w-10 h-10 bg-gray-200 rounded-xl border border-gray-100 flex items-center justify-center text-gray-500 font-bold">
                    JD
                </div>
            </div>
        </div>
    </header>
);

const Home = () => {
    const sidebarItems = [
        { icon: LayoutDashboard, label: 'Dashboard', active: true },
        { icon: BookOpen, label: 'Assignments' },
        {icon:CalendarCheck,label:"Leave Permission"},
        { icon: User, label: 'Profile' },
        
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex">
            <Sidebar items={sidebarItems} />

            <main className="ml-64 flex-1 flex flex-col min-h-screen">
                <Navbar title="Dashboard" />

                <div className="p-8">
                    <div className="max-w-4xl">
                        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-10 text-white shadow-xl shadow-blue-200 mb-8 relative overflow-hidden">
                            <div className="relative z-10">
                                <h2 className="text-4xl font-bold mb-3 tracking-tight">Welcome, Student! 👋</h2>
                                <p className="text-blue-100 text-lg opacity-90 max-w-lg">
                                    Ready to continue your learning journey today? You have 3 assignments due this week.
                                </p>
                                <div className="mt-8 flex gap-4">
                                    <button className="px-6 py-2.5 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors">
                                        View Schedule
                                    </button>
                                    <button className="px-6 py-2.5 bg-blue-500/20 backdrop-blur-md border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors">
                                        My Progress
                                    </button>
                                </div>
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 backdrop-blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400/20 rounded-full -translate-x-1/4 translate-y-1/4 blur-2xl"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { label: 'GPA', value: '3.8', color: 'text-indigo-600', bg: 'bg-indigo-50' },
                                { label: 'Attendance', value: '94%', color: 'text-emerald-600', bg: 'bg-emerald-50' },
                                { label: 'Courses', value: '6', color: 'text-amber-600', bg: 'bg-amber-50' },
                            ].map((stat, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                    <p className="text-gray-500 text-sm font-medium mb-1">{stat.label}</p>
                                    <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;
export { Sidebar, Navbar };
