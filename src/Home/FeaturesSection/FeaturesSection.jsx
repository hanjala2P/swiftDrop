import React from 'react';
import { motion } from 'framer-motion';

import trackingImg from '../../assets/others/live-tracking.png'; 
import safeDeliveryImg from '../../assets/others/customer-top.png'; 
import supportImg from '../../assets/others/safe-delivery.png'; 

const FeaturesSection = () => {
    const features = [
        {
            id: 1,
            title: "Live Parcel Tracking",
            description: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
            image: trackingImg,
        },
        {
            id: 2,
            title: "100% Safe Delivery",
            description: "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
            image: safeDeliveryImg,
        },
        {
            id: 3,
            title: "24/7 Call Center Support",
            description: "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
            image: supportImg,
        },
    ];

    return (
        <section className='py-16 px-4 lg:px-12 max-w-7xl mx-auto border-y border-dashed border-tertiary2 overflow-hidden'>
            <div className='flex flex-col gap-6'>
                {features.map((feature, index) => (
                    <motion.div 
                        key={feature.id} 
                        initial={{ opacity: 0, y: 50 }} // প্রথমে লুকিয়ে থাকবে এবং নিচে থাকবে
                        whileInView={{ opacity: 1, y: 0 }} // স্ক্রিনে আসলে ভেসে উঠবে
                        viewport={{ once: true, amount: 0.2 }} // একবারই অ্যানিমেশন হবে যখন ২০% দেখা যাবে
                        transition={{ duration: 0.6, delay: index * 0.2 }} // প্রতিটা কার্ডে একটু করে ডিলে হবে
                        whileHover={{ scale: 1.02 }} // মাউস নিলে হালকা জুম হবে
                        className='bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8 transition-shadow duration-300 hover:shadow-xl'
                    >
                        {/* Left Side: Image / Illustration with floating animation */}
                        <motion.div 
                            whileHover={{ y: -5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className='w-full md:w-5/12 flex justify-center'
                        >
                            <img 
                                src={feature.image} 
                                alt={feature.title} 
                                className='w-full max-w-[280px] sm:max-w-[340px] h-40 object-contain' 
                            />
                        </motion.div>

                        {/* Middle Divider */}
                        <div className='hidden md:block h-32 border-l border-dashed border-gray-300'></div>

                        {/* Right Side: Title & Description */}
                        <div className='w-full md:w-6/12 text-left space-y-3'>
                            <h3 className='text-xl sm:text-2xl font-bold font-heading text-tertiary2'>
                                {feature.title}
                            </h3>
                            <p className='text-gray-500 text-sm sm:text-base font-body leading-relaxed'>
                                {feature.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default FeaturesSection;