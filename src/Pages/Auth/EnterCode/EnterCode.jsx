import React, { useState, useRef } from 'react';
import { Link } from 'react-router';
import Logo from '../../../Components/Logo/Logo'; // Tomar Logo component path onujayi adjust kore nio
import authImage from '../../../assets/others/authImage.png'; // Tomar dewa image path

const EnterCode = () => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]);

    // Handle input change for individual digits
    const handleChange = (element, index) => {
        if (isNaN(element.value)) return;

        const newOtp = [...otp];
        newOtp[index] = element.value;
        setOtp(newOtp);

        // Focus next input automatically
        if (element.value && index < 5) {
            inputRefs.current[index + 1].focus();
        }
    };

    // Handle backspace navigation
    const handleKeyDown = (e, index) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    const handleVerify = (e) => {
        e.preventDefault();
        const enteredCode = otp.join('');
        if (enteredCode.length < 6) {
            alert('Please enter all 6 digits.');
            return;
        }
        alert(`Verification Code Submitted: ${enteredCode}`);
    };

    return (
        <section className="min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-white">
            
            {/* Left Side: Enter Code Form (6 Columns) */}
            <div className="lg:col-span-6 px-6 sm:px-12 lg:px-20 py-10 flex flex-col justify-between">
                
                {/* Top Logo Component */}
                <div>
                    <Link to="/" className="inline-block">
                        <Logo />
                    </Link>
                </div>

                {/* Form Container */}
                <div className="max-w-md w-full mx-auto my-auto py-8">
                    <div className="mb-8">
                        <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B1E1B] mb-2">
                            Enter Code
                        </h1>
                        <p className="text-gray-500 text-xs sm:text-sm font-body">
                            Enter 6 digit code that we sent in your email address
                        </p>
                    </div>

                    <form onSubmit={handleVerify} className="space-y-6">
                        
                        {/* 6 Digit Input Boxes */}
                        <div className="flex items-center gap-3 justify-between max-w-sm">
                            {otp.map((data, index) => {
                                return (
                                    <input
                                        key={index}
                                        type="text"
                                        maxLength="1"
                                        value={data}
                                        ref={(el) => (inputRefs.current[index] = el)}
                                        onChange={(e) => handleChange(e.target, index)}
                                        onKeyDown={(e) => handleKeyDown(e, index)}
                                        className="w-12 h-12 sm:w-14 sm:h-14 text-center text-lg font-bold rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none bg-white text-gray-800 shadow-sm"
                                    />
                                );
                            })}
                        </div>

                        {/* Verify Code Button */}
                        <button 
                            type="submit" 
                            className="w-full py-3.5 bg-[#D4ED31] hover:bg-[#c3db26] text-[#0B1E1B] font-heading font-semibold rounded-xl transition-all shadow-sm cursor-pointer"
                        >
                            Verify Code
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
                        alt="Verification Illustration" 
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>

        </section>
    );
};

export default EnterCode;