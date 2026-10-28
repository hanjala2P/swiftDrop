import { Link, NavLink, Outlet } from "react-router";
import { 
  Home, 
  Package, 
  Settings, 
  Menu, 
  LayoutDashboard, 
  Truck 
} from "lucide-react";

const DashboardLayout = () => {
    return (
        <div className="drawer lg:drawer-open min-h-screen bg-gray-50">
            {/* Drawer Toggle Input */}
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            
            {/* Main Content Area */}
            <div className="drawer-content flex flex-col">
                {/* Top Navbar */}
                <nav className="navbar w-full bg-white border-b border-gray-200 px-4 shadow-xs sticky top-0 z-30">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <Menu className="w-5 h-5 text-gray-700" />
                        </label>
                    </div>
                    <div className="flex-1 px-2 font-heading font-bold text-lg text-[#0B1E1B] flex items-center gap-2">
                        <Truck className="w-6 h-6 text-[#D4ED31] fill-current" />
                        <span>SwiftDrop Dashboard</span>
                    </div>
                </nav>

                {/* Dynamic Page Content */}
                <main className="flex-1 p-6 lg:p-8">
                    <Outlet />
                </main>
            </div>

            {/* Sidebar Drawer Side */}
            <div className="drawer-side z-40">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                
                <div className="flex min-h-full flex-col bg-white border-r border-gray-200 w-64 text-gray-700 shadow-sm">
                    
                    {/* Sidebar Brand/Logo Header */}
                    <div className="p-6 flex items-center gap-3 border-b border-gray-100">
                        <div className="w-10 h-10 rounded-xl bg-[#0B1E1B] flex items-center justify-center text-[#D4ED31] font-bold">
                            SD
                        </div>
                        <div>
                            <h2 className="font-heading font-bold text-[#0B1E1B] text-base">SwiftDrop</h2>
                            <p className="text-xs text-gray-400">User Dashboard</p>
                        </div>
                    </div>

                    {/* Navigation Menu Items */}
                    <ul className="menu p-4 w-full grow space-y-1.5 font-medium text-sm">
                        <li>
                            <Link 
                                to="/" 
                                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 transition-all text-gray-600 hover:text-gray-900"
                            >
                                <Home className="w-5 h-5" />
                                <span>Homepage</span>
                            </Link>
                        </li>

                        <li>
                            <NavLink 
                                to="/dashboard/my-parcels" 
                                className={({ isActive }) => 
                                    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                                        isActive 
                                            ? "bg-[#0B1E1B] text-[#D4ED31] font-semibold shadow-sm" 
                                            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                                    }`
                                }
                            >
                                <Package className="w-5 h-5" />
                                <span>My Parcels</span>
                            </NavLink>
                        </li>

                        <li>
                            <button 
                                onClick={() => alert("Settings coming soon!")}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 transition-all text-gray-600 hover:text-gray-900 w-full text-left"
                            >
                                <Settings className="w-5 h-5" />
                                <span>Settings</span>
                            </button>
                        </li>
                    </ul>

                    {/* Sidebar Footer Info (Optional) */}
                    <div className="p-4 border-t border-gray-100 text-xs text-gray-400 text-center">
                        SwiftDrop v1.0.0
                    </div>

                </div>
            </div>
        </div>
    );
};

NavLink.defaultProps = {}; 

export default DashboardLayout;