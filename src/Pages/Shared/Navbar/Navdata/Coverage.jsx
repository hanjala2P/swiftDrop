import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useLoaderData } from 'react-router';

const Coverage = () => {
    const position = [23.6850, 90.3563];
    const serviceCenters = useLoaderData();
    const mapRef = useRef(null);

    const handleSearch = (e) => {
        e.preventDefault();
        const location = e.target.location.value;
        const district = serviceCenters.find(c => c.district.toLowerCase().includes(location.toLowerCase()));
        if (district) {
            const coord = [district.latitude, district.longitude];
            mapRef.current.flyTo(coord, 14);
        }
    };

    return (
        <div className='w-full max-w-[1240px] mx-auto min-h-screen bg-slate-100 p-4 sm:p-6 lg:p-12'>
            <div className='p-6 sm:p-8 lg:p-12 bg-white shadow-2xl rounded-3xl'>
                
                {/* Heading Responsive করা হয়েছে */}
                <h2 className='text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#112d31] tracking-tighter'>
                    We are available in 64 districts
                </h2>
                
                {/* Search Bar Responsive করা হয়েছে (মোবাইলে বাটন নিচে বা ফ্লেক্স র‍্যাপ) */}
                <div className='w-full max-w-lg mt-8 sm:mt-12'>
                    <form onSubmit={handleSearch}>
                        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-0 relative">
                            <input 
                                type="search" 
                                name='location' 
                                placeholder="Search here..." 
                                className="w-full px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-xl font-semibold placeholder:text-gray-400 placeholder:font-normal text-black bg-white rounded-full border border-gray-200 focus:ring-0 focus:border-gray-300 shadow-md"
                            />
                            <button className='w-full sm:w-auto sm:absolute right-2 top-2 px-8 py-3.5 sm:py-3 text-lg sm:text-xl font-bold rounded-full bg-[#D4F151] text-[#112d31] shadow-md'>
                                Search
                            </button>
                        </div>
                    </form>
                </div>

                {/* Sub-heading Responsive */}
                <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold text-[#112d31] mt-12 sm:mt-20 mb-8 sm:mb-12 tracking-tight'>
                    We deliver almost all over Bangladesh
                </h3>

                {/* Map Container Responsive */}
                <div className='w-full h-[400px] sm:h-[500px] lg:h-[600px] border-2 sm:border-4 border-[#112d31] rounded-2xl mt-8 overflow-hidden shadow-2xl'>
                    <MapContainer ref={mapRef} className='h-full w-full' center={position} zoom={7} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {
                            serviceCenters.map((center, index) => (
                                <Marker key={index} position={[center.latitude, center.longitude]}>
                                    <Popup>
                                        <strong>{center.district}</strong> <br /> Service Area : {center.covered_area.join(', ')}
                                    </Popup>
                                </Marker>
                            ))
                        }
                    </MapContainer>
                </div>
            </div>
        </div>
    );
};

export default Coverage;