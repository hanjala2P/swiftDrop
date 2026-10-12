import React from 'react';
import { FiBox, FiTruck, FiHome, FiBriefcase } from 'react-icons/fi';

const HowItWorks = () => {
    const steps = [
        {
            id: 1,
            title: "Booking Pick & Drop",
            description: "From personal packages to business shipments — we deliver on time, every time.",
            icon: <FiBox className="text-3xl text-[#0B0B0B]" />
        },
        {
            id: 2,
            title: "Cash On Delivery",
            description: "From personal packages to business shipments — we deliver on time, every time.",
            icon: <FiTruck className="text-3xl text-[#0B0B0B]" />
        },
        {
            id: 3,
            title: "Delivery Hub",
            description: "From personal packages to business shipments — we deliver on time, every time.",
            icon: <FiHome className="text-3xl text-[#0B0B0B]" />
        },
        {
            id: 4,
            title: "Booking SME & Corporate",
            description: "From personal packages to business shipments — we deliver on time, every time.",
            icon: <FiBriefcase className="text-3xl text-[#0B0B0B]" />
        }
    ];

    return (
        <section className=' -mt-6 pb-16 px-4 lg:px-12 rounded-3xl my-8 max-w-8xl mx-auto'>
            {/* Section Title */}
            <div className='mb-10'>
                <h2 className='text-3xl sm:text-4xl font-extrabold text-tertiary2 font-heading'>
                    How it Works
                </h2>
            </div>

            {/* Cards Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {steps.map((step) => (
                    <div 
                        key={step.id} 
                        className='bg-white rounded-2xl p-6 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md'
                    >
                        {/* Icon Box */}
                        <div className='w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6'>
                            {step.icon}
                        </div>

                        {/* Text Content */}
                        <div>
                            <h3 className='text-xl font-bold text-tertiary mb-3 font-heading'>
                                {step.title}
                            </h3>
                            <p className='text-gray-500 text-sm font-body leading-relaxed'>
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HowItWorks;