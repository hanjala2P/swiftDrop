import React, { useState } from 'react';
import { FiSearch, FiCheckCircle } from 'react-icons/fi';

const CoverageSection = () => {
    const [searchCode, setSearchCode] = useState('');
    const [hasSearched, setHasSearched] = useState(false);

    // Handle search form submit
    const handleSearch = (e) => {
        e.preventDefault();
        if (searchCode.trim() !== '') {
            setHasSearched(true);
        }
    };

    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
            <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-16 shadow-sm border border-gray-100">
                
                {/* Header Title & Subtitle */}
                <div className="mb-8">
                    <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B1E1B] mb-2">
                        Track Your Consignment
                    </h2>
                    <p className="text-gray-500 text-xs sm:text-sm font-body">
                        Now you can easily track your consignment
                    </p>
                </div>

                {/* Search Bar Container */}
                <form onSubmit={handleSearch} className="flex flex-wrap items-center gap-3 mb-12">
                    <div className="relative flex-1 min-w-[280px] max-w-md">
                        <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                            <FiSearch className="text-lg" />
                        </span>
                        <input 
                            type="text" 
                            value={searchCode}
                            onChange={(e) => setSearchCode(e.target.value)}
                            placeholder="Search tracking code here" 
                            className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-gray-50 border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700"
                            required
                        />
                    </div>
                    <button 
                        type="submit" 
                        className="px-8 py-3.5 bg-[#D4ED31] hover:bg-[#c3db26] text-[#0B1E1B] font-heading font-semibold rounded-2xl transition-all shadow-sm cursor-pointer"
                    >
                        Search
                    </button>
                </form>

                {/* Tracking Results Grid (Appears after searching) */}
                {hasSearched ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        
                        {/* Left Box: Product Details */}
                        <div className="bg-[#F8F9FA] rounded-3xl p-6 sm:p-8 border border-gray-100 space-y-6">
                            <h3 className="text-xl font-bold font-heading text-[#0B1E1B]">
                                Product details
                            </h3>
                            
                            <div className="space-y-4 text-sm text-gray-600 font-body">
                                <div>
                                    <span className="text-gray-400 text-xs block mb-0.5">May 31, 2025 03:41 pm</span>
                                    <p><strong className="text-gray-800">Id:</strong> 148976175</p>
                                    <p><strong className="text-gray-800">Invoice:</strong> 24227</p>
                                    <p><strong className="text-gray-800">Tracking Code:</strong> <span className="text-[#0B1E1B] font-semibold">DUWEXW29823Q7HSH3YV7</span></p>
                                </div>

                                <div className="pt-2 border-t border-gray-200">
                                    <p><strong className="text-gray-800">Name:</strong> Zahed Hossain</p>
                                    <p className="mt-1"><strong className="text-gray-800">Address:</strong> Madrasha Road, Chandpur sadar, Chandpur, Chandpur, 3600, BD</p>
                                    <p className="mt-1"><strong className="text-gray-800">Phone Number:</strong> 01780448866</p>
                                </div>

                                <div className="pt-2 border-t border-gray-200">
                                    <p><strong className="text-gray-800">Approved:</strong> N/A</p>
                                    <p><strong className="text-gray-800">Weight:</strong> KG</p>
                                    <p><strong className="text-gray-800">COD:</strong> ৳ 0</p>
                                    <p className="mt-1"><span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full">Pending</span></p>
                                </div>
                            </div>
                        </div>

                        {/* Right Box: Tracking Updates (Timeline) */}
                        <div className="bg-[#F8F9FA] rounded-3xl p-6 sm:p-8 border border-gray-100 space-y-6">
                            <h3 className="text-xl font-bold font-heading text-[#0B1E1B]">
                                Tracking Updates
                            </h3>

                            <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-[11px] before:w-0.5 before:bg-gray-200">
                                
                                {[...Array(4)].map((_, index) => (
                                    <div key={index} className="flex items-start gap-4 relative z-10">
                                        <div className="w-6 h-6 rounded-full bg-[#EBF3F2] text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                                            <FiCheckCircle className="text-sm" />
                                        </div>
                                        <div className="flex-1 flex items-center justify-between">
                                            <div>
                                                <span className="text-xs text-gray-400 block">Jun 02, 2025 <br />12:21 am</span>
                                            </div>
                                            <span className="text-sm font-medium text-gray-700">Assigned to rider</span>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>

                    </div>
                ) : (
                    // Initial State Placeholder before search
                    <div className="text-center py-16 bg-gray-50/50 rounded-3xl border border-dashed border-gray-200">
                        <p className="text-gray-400 text-sm">Enter your tracking code above and click search to view consignment status.</p>
                    </div>
                )}

            </div>
        </section>
    );
};

export default CoverageSection;