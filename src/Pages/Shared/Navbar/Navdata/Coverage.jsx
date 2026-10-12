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
                
                {/* Main Heading - রেসপন্সিভ সাইজ */}
                <h2 className='text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#112d31] tracking-tight leading-tight'>
                    We are available in 64 districts
                </h2>
                
                {/* Search Bar - সাইজ ছোট করা হয়েছে (max-w-md) এবং দেখতে প্রিমিয়াম করা হয়েছে */}
                <div className='w-full max-w-md mt-6 sm:mt-8'>
                    <form onSubmit={handleSearch}>
                        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-0 relative">
                            <input 
                                type="search" 
                                name='location' 
                                placeholder="Search district..." 
                                className="w-full px-5 py-3.5 sm:py-4 text-sm sm:text-base font-medium placeholder:text-gray-400 text-black bg-white rounded-full border border-gray-200 focus:outline-none focus:border-[#112d31] shadow-sm"
                            />
                            <button className='w-full sm:w-auto sm:absolute right-1.5 top-1.5 px-6 py-2.5 sm:py-2.5 text-sm sm:text-base font-bold rounded-full bg-[#D4F151] text-[#112d31] hover:bg-[#c3df26] transition-all shadow-sm'>
                                Search
                            </button>
                        </div>
                    </form>
                </div>

                {/* Sub-heading - রেসপন্সিভ সাইজ */}
                <h3 className='text-lg sm:text-2xl lg:text-2xl font-bold text-[#112d31] mt-10 sm:mt-14 mb-6 sm:mb-8 tracking-tight'>
                    We deliver almost all over Bangladesh
                </h3>

                {/* Map Container - রেসপন্সিভ হাইট */}
                <div className='w-full h-[380px] sm:h-[480px] lg:h-[580px] border-2 sm:border-4 border-[#112d31] rounded-2xl overflow-hidden shadow-xl'>
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