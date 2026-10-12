import React from 'react';
import rider from '../../../../assets/others/agent-pending.png'
const BeARider = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
            <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-16 shadow-sm border border-gray-100">
                
                {/* Header Title & Subtitle */}
                <div className="mb-10">
                    <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-tertiary2 mb-2">
                        Be a Rider
                    </h2>
                    <p className="text-gray-500 text-xs sm:text-sm font-body max-w-xl">
                        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                    </p>
                    <div className="w-full border-t border-gray-200 mt-6"></div>
                </div>

                {/* Main Content: Form & Illustration Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Left Side: Form Fields (7 Columns) */}
                    <div className="lg:col-span-7">
                        <h3 className="text-xl font-bold font-heading  text-tertiary2 mb-6">
                            Tell us about yourself
                        </h3>

                        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                            
                            {/* Your Name */}
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Your Name</label>
                                <input 
                                    type="text" 
                                    placeholder="Your Name" 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white"
                                />
                            </div>

                            {/* Driving License Number */}
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Driving License Number</label>
                                <input 
                                    type="text" 
                                    placeholder="Driving License Number" 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white"
                                />
                            </div>

                            {/* Your Email */}
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Your Email</label>
                                <input 
                                    type="email" 
                                    placeholder="Your Email" 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white"
                                />
                            </div>

                            {/* Region & District Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1">Your Region</label>
                                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-500 bg-white">
                                        <option value="">Select your Region</option>
                                        <option value="region1">Region 1</option>
                                        <option value="region2">Region 2</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1">Your District</label>
                                    <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-500 bg-white">
                                        <option value="">Select your District</option>
                                        <option value="district1">District 1</option>
                                        <option value="district2">District 2</option>
                                    </select>
                                </div>
                            </div>

                            {/* NID No */}
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">NID No</label>
                                <input 
                                    type="text" 
                                    placeholder="NID" 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white"
                                />
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Phone Number</label>
                                <input 
                                    type="tel" 
                                    placeholder="Phone Number" 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white"
                                />
                            </div>

                            {/* Bike Brand Model and Year */}
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Bike Brand Model and Year</label>
                                <input 
                                    type="text" 
                                    placeholder="Bike Brand Model and Year" 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white"
                                />
                            </div>

                            {/* Bike Registration Number */}
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Bike Registration Number</label>
                                <input 
                                    type="text" 
                                    placeholder="Bike Registration Number" 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white"
                                />
                            </div>

                            {/* Tell Us About Yourself */}
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Tell Us About Yourself</label>
                                <input 
                                    type="text" 
                                    placeholder="Tell Us About Yourself" 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="pt-2">
                                <button 
                                    type="submit" 
                                    className="w-full sm:w-auto px-12 py-3.5 bg-primary hover:bg-[#c3db26] text-[#0B1E1B] font-heading font-semibold rounded-xl transition-all shadow-sm cursor-pointer"
                                >
                                    Submit
                                </button>
                            </div>

                        </form>
                    </div>

                    {/* Right Side: Illustration (5 Columns) */}
                    <div className="lg:col-span-5 flex justify-center items-center">
                        <div className="w-full max-w-md">
                            {/* Ekhane tomar rider-er image ba SVG path boshiye nio */}
                            <img 
                                src={rider} 
                                alt="Be a Rider Illustration" 
                                className="w-full h-auto object-contain"
                                onError={(e)=>{
                                    // Fallback to placeholder box jodi image na thake
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                            {/* Fallback placeholder box if image asset is missing */}
                            <div className="hidden w-full h-80 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex-col items-center justify-center text-gray-400 p-6 text-center">
                                <span className="text-sm font-medium">Rider Illustration Image</span>
                                <span className="text-xs text-gray-400 mt-1">(Place your image asset here)</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default BeARider;