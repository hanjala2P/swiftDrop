import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const CoverageAvailability = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState(null);

    // Sample districts list for search functionality
    const districts = [
        "Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna", 
        "Barisal", "Rangpur", "Mymensingh", "Chandpur", "Comilla"
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        const found = districts.find(d => d.toLowerCase() === searchTerm.toLowerCase());
        if (found) {
            setSelectedDistrict(found);
        } else {
            setSelectedDistrict("District not found or currently out of zone");
        }
    };

    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
            <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-16 shadow-sm border border-gray-100">
                
                {/* Header Title */}
                <div className="mb-8">
                    <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B1E1B] mb-6">
                        We are available in 64 districts
                    </h2>

                    {/* Search Bar Form */}
                    <form onSubmit={handleSearch} className="flex flex-wrap items-center gap-3">
                        <div className="relative flex-1 min-w-[280px] max-w-md">
                            <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                <FiSearch className="text-lg" />
                            </span>
                            <input 
                                type="text" 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search here" 
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

                    {/* Search Result Feedback */}
                    {selectedDistrict && (
                        <p className="mt-3 text-sm font-medium text-gray-600">
                            Result for <span className="text-[#0B1E1B] font-bold">"{searchTerm}"</span>: {selectedDistrict}
                        </p>
                    )}

                    <div className="w-full border-t border-gray-200 mt-8"></div>
                </div>

                {/* Subtitle */}
                <div className="mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0B1E1B]">
                        We deliver almost all over Bangladesh
                    </h3>
                </div>

                {/* Map/Image Display Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Map Box 1 */}
                    <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 h-64 flex items-center justify-center">
                        <img 
                            src="/path-to-map-image.png" 
                            alt="Bangladesh Coverage Map" 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                            }}
                        />
                        <div className="hidden w-full h-full bg-blue-50/50 flex flex-col items-center justify-center text-gray-400 p-4 text-center">
                            <span className="text-xs font-semibold">Coverage Map View 1</span>
                        </div>
                    </div>

                    {/* Map Box 2 */}
                    <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 h-64 flex items-center justify-center">
                        <img 
                            src="/path-to-map-image.png" 
                            alt="Bangladesh Coverage Map" 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.divStyle = 'flex';
                            }}
                        />
                        <div className="hidden w-full h-full bg-blue-50/50 flex flex-col items-center justify-center text-gray-400 p-4 text-center">
                            <span className="text-xs font-semibold">Coverage Map View 2</span>
                        </div>
                    </div>

                    {/* Map Box 3 */}
                    <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 h-64 flex items-center justify-center">
                        <img 
                            src="/path-to-map-image.png" 
                            alt="Bangladesh Coverage Map" 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.divStyle = 'flex';
                            }}
                        />
                        <div className="hidden w-full h-full bg-blue-50/50 flex flex-col items-center justify-center text-gray-400 p-4 text-center">
                            <span className="text-xs font-semibold">Coverage Map View 3</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CoverageAvailability;