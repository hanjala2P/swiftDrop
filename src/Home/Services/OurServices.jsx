import React from 'react';
import { FiClock, FiGlobe, FiPackage, FiDollarSign, FiBriefcase, FiRotateCcw } from 'react-icons/fi';

const OurServices = () => {
    const services = [
        {
            id: 1,
            title: "Express & Standard Delivery",
            description: "We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6 hours from pick-up to drop-off.",
            icon: <FiClock className="text-2xl text-tertiary" />,
            isActive: false,
        },
        {
            id: 2,
            title: "Nationwide Delivery",
            description: "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48-72 hours.",
            icon: <FiGlobe className="text-2xl text-tertiary" />,
            isActive: true, // Active/highlighted card
        },
        {
            id: 3,
            title: "Fulfillment Solution",
            description: "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
            icon: <FiPackage className="text-2xl text-tertiary" />,
            isActive: false,
        },
        {
            id: 4,
            title: "Cash on Home Delivery",
            description: "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
            icon: <FiDollarSign className="text-2xl text-tertiary" />,
            isActive: false,
        },
        {
            id: 5,
            title: "Corporate Service / Contract In Logistics",
            description: "Customized corporate services which includes warehouse and inventory management support.",
            icon: <FiBriefcase className="text-2xl text-tertiary" />,
            isActive: false,
        },
        {
            id: 6,
            title: "Parcel Return",
            description: "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
            icon: <FiRotateCcw className="text-2xl text-tertiary" />,
            isActive: false,
        },
    ];

    return (
        <section className='bg-tertiary2 py-16 px-4 lg:px-12 rounded-3xl my-8 max-w-7xl mx-auto text-white'>
            {/* Header Title & Subtitle */}
            <div className='text-center max-w-2xl mx-auto mb-12 space-y-3'>
                <h2 className='text-3xl sm:text-4xl font-extrabold font-heading'>
                    Our Services
                </h2>
                <p className='text-gray-300 text-sm sm:text-base font-body'>
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                </p>
            </div>

            {/* Services Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {services.map((service) => (
                    <div 
                        key={service.id} 
                        className={`rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 shadow-md ${
                            service.isActive 
                                ? 'bg-primary text-secondary' 
                                : 'bg-white text-secondary'
                        }`}
                    >
                        {/* Icon Circle */}
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${
                            service.isActive ? 'bg-white/60' : 'bg-[#F4F7ED]'
                        }`}>
                            {service.icon}
                        </div>

                        {/* Title */}
                        <h3 className='text-xl text-tertiary font-bold mb-3 font-heading'>
                            {service.title}
                        </h3>

                        {/* Description */}
                        <p className={`text-sm font-body leading-relaxed ${
                            service.isActive ? 'text-gray-800' : 'text-gray-500'
                        }`}>
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurServices;