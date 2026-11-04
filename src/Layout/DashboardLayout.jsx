import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router";
import { 
  Menu,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { FaMotorcycle, FaSwift } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FiHome, FiPackage, FiCreditCard, FiSettings } from "react-icons/fi";
import useAuth from "../Hooks/useAuth";

const DashboardLayout = () => {
    const { user } = useAuth();
    
    // Manual click toggle state (Pin/Unpin sidebar)
    const [isPinned, setIsPinned] = useState(false);
    // Mouse hover state
    const [isHovered, setIsHovered] = useState(false);
    // Mobile drawer state
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const isExpanded = isPinned || isHovered;

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Mobile Sidebar Overlay Backdrop */}
            {isMobileOpen && (
                <div 
                    onClick={() => setIsMobileOpen(false)}
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                />
            )}

            {/* Sidebar Section */}
            <aside 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`fixed lg:static inset-y-0 left-0 z-50 flex flex-col bg-white border-r border-gray-200 text-gray-700 shadow-sm transition-all duration-300 ease-in-out ${
                    isMobileOpen ? "translate-x-0 w-64" : "-translate-x-full lg:translate-x-0"
                } ${
                    isExpanded ? "lg:w-64" : "lg:w-20"
                }`}
            >
                
                {/* Sidebar Brand/Logo Header */}
                <div className={`p-5 flex items-center gap-3 border-b border-gray-100 h-20 ${!isExpanded && !isMobileOpen ? "lg:justify-center lg:px-2" : ""}`}>
                    <FaSwift className='text-primary text-4xl lg:text-5xl shrink-0'/>
                    {(isExpanded || isMobileOpen) && (
                        <div className="overflow-hidden transition-all duration-200">
                            <h3 className="text-lg lg:text-xl font-bold tracking-tight text-gray-900 truncate">
                                Swift <span className='text-primary'>Drop</span>
                            </h3>
                            <p className="text-xs text-gray-400 truncate">{user?.displayName || "User"}</p>
                        </div>
                    )}
                </div>

                {/* Navigation Menu Items with Clear Contrast Colors */}
                <ul className="menu p-3 w-full grow space-y-1.5 font-medium text-sm">
                    <li>
                        <Link 
                            to="/" 
                            onClick={() => setIsMobileOpen(false)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-gray-600 hover:bg-primary/15 hover:text-[#0B1E1B] font-medium ${
                                !isExpanded && !isMobileOpen ? "lg:justify-center lg:px-2" : ""
                            }`}
                            title="Homepage"
                        >
                            <FiHome className="text-lg shrink-0" />
                            {(isExpanded || isMobileOpen) && <span className="truncate">Homepage</span>}
                        </Link>
                    </li>

                    <li>
                        <NavLink 
                            to="/dashboard/my-parcels" 
                            onClick={() => setIsMobileOpen(false)}
                            className={({ isActive }) => 
                                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                                    !isExpanded && !isMobileOpen ? "lg:justify-center lg:px-2" : ""
                                } ${
                                    isActive 
                                        ? "bg-[#0B1E1B] text-[#D4ED31] font-semibold shadow-sm" 
                                        : "text-gray-600 hover:bg-primary/15 hover:text-[#0B1E1B]"
                                }`
                            }
                            title="My Parcels"
                        >
                            <FiPackage className="text-lg shrink-0" />
                            {(isExpanded || isMobileOpen) && <span className="truncate">My Parcels</span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboard/payment-history" 
                            onClick={() => setIsMobileOpen(false)}
                            className={({ isActive }) => 
                                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                                    !isExpanded && !isMobileOpen ? "lg:justify-center lg:px-2" : ""
                                } ${
                                    isActive 
                                        ? "bg-[#0B1E1B] text-[#D4ED31] font-semibold shadow-sm" 
                                        : "text-gray-600 hover:bg-primary/15 hover:text-[#0B1E1B]"
                                }`
                            }
                            title="Payment History"
                        >
                            <FiCreditCard className="text-lg shrink-0" />
                            {(isExpanded || isMobileOpen) && <span className="truncate">Payment History</span>}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/dashboard/approve-riders" 
                            onClick={() => setIsMobileOpen(false)}
                            className={({ isActive }) => 
                                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                                    !isExpanded && !isMobileOpen ? "lg:justify-center lg:px-2" : ""
                                } ${
                                    isActive 
                                        ? "bg-[#0B1E1B] text-[#D4ED31] font-semibold shadow-sm" 
                                        : "text-gray-600 hover:bg-primary/15 hover:text-[#0B1E1B]"
                                }`
                            }
                            title="Payment History"
                        >
                            <FaMotorcycle className="text-lg shrink-0" />
                            {(isExpanded || isMobileOpen) && <span className="truncate">Approve riders</span>}
                        </NavLink>
                    </li>

                    <li>
                        <button 
                            type="button"
                            onClick={() => alert("Settings coming soon!")}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-gray-600 hover:bg-primary/15 hover:text-[#0B1E1B] w-full text-left cursor-pointer ${
                                !isExpanded && !isMobileOpen ? "lg:justify-center lg:px-2" : ""
                            }`}
                            title="Settings"
                        >
                            <FiSettings className="text-lg shrink-0" />
                            {(isExpanded || isMobileOpen) && <span className="truncate">Settings</span>}
                        </button>
                    </li>
                </ul>

                {/* Sidebar Footer Info */}
                <div className="p-4 border-t border-gray-100 text-xs text-gray-400 text-center truncate">
                    {!isExpanded && !isMobileOpen ? "v1" : "SwiftDrop v1.0.0"}
                </div>
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
                {/* Top Navbar */}
                <nav className="navbar w-full bg-white/80 backdrop-blur-md border-b border-gray-200 px-4 h-20 shadow-xs sticky top-0 z-30">
                    <div className="flex items-center gap-2">
                        {/* Mobile Toggle Button */}
                        <button 
                            type="button"
                            onClick={() => setIsMobileOpen(!isMobileOpen)}
                            className="btn btn-square btn-ghost lg:hidden cursor-pointer"
                        >
                            <Menu className="w-5 h-5 text-gray-700" />
                        </button>

                        {/* Desktop Pin/Unpin Toggle Button */}
                        <button 
                            type="button"
                            onClick={() => setIsPinned(!isPinned)}
                            className="hidden lg:flex btn btn-square btn-ghost text-gray-700 hover:bg-primary/15 hover:text-[#0B1E1B] rounded-xl cursor-pointer transition-transform duration-200"
                            title={isPinned ? "Unpin Sidebar" : "Pin Sidebar Expanded"}
                        >
                            {isPinned ? (
                                <ChevronLeft className="w-5 h-5 transition-transform duration-300" />
                            ) : (
                                <ChevronRight className="w-5 h-5 transition-transform duration-300" />
                            )}
                        </button>
                    </div>
                    
                    {/* Dashboard Title Header */}
                    <div className="flex-1 px-4 flex items-center gap-3">
                        <div className="p-2 bg-primary/15 rounded-xl">
                            <MdDashboard className="text-2xl lg:text-3xl text-primary" />
                        </div>
                        <div>
                            <div className="flex-1 px-2 font-heading font-bold text-lg text-[#0B1E1B] flex items-center gap-2">
                                <span className="text-base lg:text-xl font-extrabold tracking-tight text-gray-900">
                                    SwiftDrop
                                </span>
                                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-primary/15 text-[#0B1E1B] uppercase tracking-wider">
                                    Workspace
                                </span>
                            </div>
                            <p className="text-xs text-gray-500 hidden sm:block">
                                Manage your shipments and delivery operations seamlessly.
                            </p>
                        </div>
                    </div>
                </nav>

                {/* Dynamic Page Content */}
                <main className="flex-1 p-4 md:p-6 lg:p-8 bg-gray-50">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;