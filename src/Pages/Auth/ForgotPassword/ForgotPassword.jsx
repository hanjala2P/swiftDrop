import React, { useState } from 'react';
import { Link } from 'react-router';
import Logo from '../../../Components/Logo/Logo'; 
import authImage from '../../../assets/others/authImage.png'; 

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleResetPassword = (e) => {
        e.preventDefault();
        if (!email) {
            setMessage('Please enter your email address.');
            return;
        }
        // Password reset email send logic here
        setMessage('Password reset link has been sent to your email.');
    };

    return (
        <section className="min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-white">
            
            {/* Left Side: Forgot Password Form (6 Columns) */}
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
                            Forgot Password
                        </h1>
                        <p className="text-gray-500 text-xs sm:text-sm font-body">
                            Enter your email address and we’ll send you a reset link.
                        </p>
                    </div>

                    <form onSubmit={handleResetPassword} className="space-y-4">
                        
                        {/* Email Field */}
                        <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1">Email</label>
                            <input 
                                type="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email" 
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white"
                                required
                            />
                        </div>

                        {/* Success / Error Feedback Message */}
                        {message && (
                            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-700 text-xs font-medium">
                                {message}
                            </div>
                        )}

                        {/* Send Button */}
                        <button 
                            type="submit" 
                            className="w-full py-3.5 bg-[#D4ED31] hover:bg-[#c3db26] text-[#0B1E1B] font-heading font-semibold rounded-xl transition-all shadow-sm cursor-pointer mt-2"
                        >
                            Send
                        </button>

                        {/* Remember your password? Login */}
                        <p className="text-center text-xs text-gray-500 pt-2">
                            Remember your password? <Link to="/login" className="text-[#0B1E1B] font-bold hover:underline">Login</Link>
                        </p>

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
                        alt="Forgot Password Illustration" 
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>

        </section>
    );
};

export default ForgotPassword;