import React, { useState } from 'react';
import { Link } from 'react-router';
import Logo from '../../../Components/Logo/Logo'; // Tomar Logo component path onujayi adjust kore nio
import authImage from '../../../assets/others/authImage.png'; // Tomar dewa image path
import { FiEye, FiEyeOff } from 'react-icons/fi';

const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleReset = (e) => {
        e.preventDefault();
        setErrorMessage('');

        if (!newPassword || !confirmPassword) {
            setErrorMessage('Please fill in all fields.');
            return;
        }

        if (newPassword !== confirmPassword) {
            setErrorMessage('Passwords do not match. Please try again.');
            return;
        }

        alert('Password successfully reset!');
    };

    return (
        <section className="min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-white">
            
            {/* Left Side: Reset Password Form (6 Columns) */}
            <div className="lg:col-span-6 px-6 sm:px-12 lg:px-20 py-10 flex flex-col justify-between">
                
                {/* Top Logo Component */}
                <div>
                    <Link to="/" className="inline-block">
                        <Logo />
                    </Link>
                </div>

                {/* Form Container */}
                <div className="max-w-md w-full mx-auto my-auto py-8">
                    <div className="mb-6">
                        <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B1E1B] mb-2">
                            Reset Password
                        </h1>
                        <p className="text-gray-500 text-xs sm:text-sm font-body">
                            Reset your password
                        </p>
                    </div>

                    <form onSubmit={handleReset} className="space-y-4">
                        
                        {/* New Password Field */}
                        <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1">New Password</label>
                            <div className="relative">
                                <input 
                                    type={showNewPassword ? "text" : "password"} 
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    placeholder="Password" 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white pr-10"
                                    required
                                />
                                <button 
                                    type="button"
                                    onClick={() => setShowNewPassword(!showNewPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
                                >
                                    {showNewPassword ? <FiEyeOff className="text-lg" /> : <FiEye className="text-lg" />}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password Field */}
                        <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1">Confirm Password</label>
                            <div className="relative">
                                <input 
                                    type={showConfirmPassword ? "text" : "password"} 
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Password" 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white pr-10"
                                    required
                                />
                                <button 
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
                                >
                                    {showConfirmPassword ? <FiEyeOff className="text-lg" /> : <FiEye className="text-lg" />}
                                </button>
                            </div>
                        </div>

                        {/* Error Message Display */}
                        {errorMessage && (
                            <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-red-600 text-xs font-medium">
                                {errorMessage}
                            </div>
                        )}

                        {/* Reset Password Button */}
                        <button 
                            type="submit" 
                            className="w-full py-3.5 bg-[#D4ED31] hover:bg-[#c3db26] text-[#0B1E1B] font-heading font-semibold rounded-xl transition-all shadow-sm cursor-pointer mt-2"
                        >
                            Reset Password
                        </button>

                    </form>
                </div>

                <div></div>
            </div>

            {/* Right Side: Image / Illustration Area (6 Columns) */}
            <div className="hidden lg:col-span-6 bg-[#F8F9FA] lg:flex items-center justify-center p-12 border-l border-gray-100">
                <div className="max-w-lg w-full">
                    {/* Tomar dewa authImage path use kora holo */}
                    <img 
                        src={authImage} 
                        alt="Reset Password Illustration" 
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>

        </section>
    );
};

export default ResetPassword;