import React from 'react';
import { Link } from 'react-router';
import Logo from '../../../Components/Logo/Logo';
import { FiArrowUpRight } from 'react-icons/fi';
import useAuth from '../../../Hooks/useAuth';

const Navbar = () => {
    const {user,logOut} =useAuth();
    // Navbar Menu Links
    const handleSignOut =()=>{
        logOut()
        .then(result => {
            console.log(result)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    const navLinks = (
        <>
            <li><Link to="/services" className="hover:text-black font-medium transition-colors">Services</Link></li>
            <li><Link to="/coverage" className="hover:text-black font-medium transition-colors">Coverage</Link></li>
            <li><Link to="/about" className="hover:text-black font-medium transition-colors">About Us</Link></li>
            <li><Link to="/pricing" className="hover:text-black font-medium transition-colors">Pricing</Link></li>
            <li><Link to="/be-a-rider" className="hover:text-black font-medium transition-colors">Be a Rider</Link></li>
        </>
    );

    return (
        <div className='max-w-full mx-auto  pt-4'>
            <div className="navbar bg-white rounded-3xl shadow-sm px-4 lg:px-8 py-3">
                
                {/* Left Side: Mobile Menu & Logo */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden pl-0">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-white rounded-2xl z-50 mt-3 w-52 p-4 shadow-lg space-y-2">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to='/' className="flex items-center">
                        <Logo />
                    </Link>
                </div>

                {/* Center Side: Desktop Menu Links */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-8 text-gray-600 text-base">
                        {navLinks}
                    </ul>
                </div>

                {/* Right Side: Sign In & Be a Rider Buttons */}
                <div className="navbar-end flex items-center gap-3">
                    {/* Sign In Button */}
                    {
                        user ? <button 
                        onClick={handleSignOut}
                        // to="/profile" 
                        className="hidden sm:inline-flex px-6 py-2.5 rounded-2xl border border-gray-200 text-gray-800 font-medium text-sm hover:border-gray-400 transition-all"
                    >
                        Signout
                    </button> :<Link 
                        to="/login" 
                        className="hidden sm:inline-flex px-6 py-2.5 rounded-2xl border border-gray-200 text-gray-800 font-medium text-sm hover:border-gray-400 transition-all"
                    >
                        Sign In
                    </Link>
                    }

                    {/* Be a Rider Button with Circular Arrow Icon */}
                    <Link 
                        to="/be-a-rider" 
                        className="group inline-flex items-center bg-[#D4ED31] hover:bg-[#c3db26] text-[#0B1E1B] font-heading font-semibold pl-5 pr-1.5 py-1.5 rounded-full transition-all shadow-sm"
                    >
                        <span className="text-sm mr-3 font-semibold">Be a rider</span>
                        <span className="w-8 h-8 rounded-full bg-[#0B1E1B] text-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-45">
                            <FiArrowUpRight className="text-lg" />
                        </span>
                    </Link>
                </div>

            </div>
        </div>
    );
};

 export default Navbar; // Make sure export default Navbar is at the bottom properly