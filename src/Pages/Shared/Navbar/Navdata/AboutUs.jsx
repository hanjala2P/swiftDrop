import React, { useState } from 'react';

const AboutUs = () => {
    // State to track active tab
    const [activeTab, setActiveTab] = useState('story');

    // Content data for different tabs
    const tabContent = {
        story: [
            "We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.",
            "We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time.",
            "We started with a simple promise — to make parcel delivery fast, reliable, and stress-free. Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service has made us a trusted partner for thousands. Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination — on time, every time."
        ],
        mission: [
            "Our mission is to revolutionize logistics through cutting-edge technology and a seamless user experience. We empower local businesses and individuals by connecting them with a dependable delivery network.",
            "We strive to reduce carbon footprints by optimizing delivery routes and leveraging smart tracking systems, ensuring sustainability is at the core of our operations."
        ],
        success: [
            "Over 1 million successful deliveries completed nationwide with a 99.4% on-time delivery rate.",
            "Recognized as one of the fastest-growing parcel delivery networks, serving over 64 districts with absolute reliability and client satisfaction."
        ],
        team: [
            "Our team consists of passionate logistics experts, software engineers, and dedicated customer support professionals working 24/7 to keep things moving.",
            "We believe in continuous innovation, teamwork, and empowering our riders to deliver excellence on every single trip."
        ]
    };

    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
            <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-16 shadow-sm border border-gray-100">
                
                {/* Header Title & Subtitle */}
                <div className="mb-8">
                    <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B1E1B] mb-2">
                        About Us
                    </h2>
                    <p className="text-gray-500 text-xs sm:text-sm font-body max-w-xl">
                        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                    </p>
                    <div className="w-full border-t border-gray-200 mt-6"></div>
                </div>

                {/* Navigation Tabs */}
                <div className="flex flex-wrap items-center gap-6 sm:gap-10 mb-10 border-b border-gray-100 pb-4">
                    <button 
                        onClick={() => setActiveTab('story')}
                        className={`text-base sm:text-lg font-bold transition-colors pb-1 cursor-pointer ${
                            activeTab === 'story' 
                                ? 'text-[#0B1E1B] border-b-2 border-[#0B1E1B]' 
                                : 'text-gray-400 hover:text-gray-600'
                        }`}
                    >
                        Story
                    </button>
                    <button 
                        onClick={() => setActiveTab('mission')}
                        className={`text-base sm:text-lg font-bold transition-colors pb-1 cursor-pointer ${
                            activeTab === 'mission' 
                                ? 'text-[#0B1E1B] border-b-2 border-[#0B1E1B]' 
                                : 'text-gray-400 hover:text-gray-600'
                        }`}
                    >
                        Mission
                    </button>
                    <button 
                        onClick={() => setActiveTab('success')}
                        className={`text-base sm:text-lg font-bold transition-colors pb-1 cursor-pointer ${
                            activeTab === 'success' 
                                ? 'text-[#0B1E1B] border-b-2 border-[#0B1E1B]' 
                                : 'text-gray-400 hover:text-gray-600'
                        }`}
                    >
                        Success
                    </button>
                    <button 
                        onClick={() => setActiveTab('team')}
                        className={`text-base sm:text-lg font-bold transition-colors pb-1 cursor-pointer ${
                            activeTab === 'team' 
                                ? 'text-[#0B1E1B] border-b-2 border-[#0B1E1B]' 
                                : 'text-gray-400 hover:text-gray-600'
                        }`}
                    >
                        Team & Others
                    </button>
                </div>

                {/* Content Body Based on Active Tab */}
                <div className="space-y-6 max-w-5xl">
                    {tabContent[activeTab].map((paragraph, index) => (
                        <p key={index} className="text-gray-600 text-sm sm:text-base font-body leading-relaxed">
                            {paragraph}
                        </p>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AboutUs;