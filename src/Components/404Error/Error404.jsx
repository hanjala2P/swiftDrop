import React from 'react';
import { Link } from 'react-router';
import { FiAlertTriangle } from 'react-icons/fi';

const Error404 = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16 flex items-center justify-center min-h-[80vh]">
            <div className="bg-white rounded-3xl p-8 sm:p-14 lg:p-20 shadow-sm border border-gray-100 text-center flex flex-col items-center max-w-2xl w-full mx-auto">
                
                {/* Image Placeholder Area (Tumi pore ekhane tomar image ba asset boshiye nite parbe) */}
                <div className="mb-6 w-full flex justify-center">
                    {/* Image tag - image path pore add kore nio */}
                    <img 
                        src="/path-to-your-404-image.png" 
                        alt="Error 404 Illustration" 
                        className="w-48 sm:w-60 h-auto object-contain"
                        onError={(e) => {
                            // Jodi image load na hoy ba path na thake tahole fallback icon/box show korbe
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                        }}
                    />
                    
                    {/* Fallback Placeholder Box */}
                    <div className="hidden w-40 h-40 bg-[#F8F9FA] rounded-2xl border-2 border-dashed border-gray-200 flex-col items-center justify-center text-gray-400 p-4">
                        <FiAlertTriangle className="text-4xl text-amber-500 mb-2" />
                        <span className="text-xs font-medium text-gray-500">404 Illustration</span>
                    </div>
                </div>

                {/* Error Title */}
                <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B1E1B] mb-6 tracking-tight">
                    Error 404
                </h1>

                {/* Go Home Button */}
                <Link 
                    to="/" 
                    className="px-8 py-3 bg-[#D4ED31] hover:bg-[#c3db26] text-[#0B1E1B] font-heading font-semibold rounded-xl transition-all shadow-sm cursor-pointer inline-block text-sm sm:text-base"
                >
                    Go Home
                </Link>

            </div>
        </section>
    );
};

export default Error404;