import React from 'react';
import { motion } from 'framer-motion';
import bgImage from '../../assets/others/be-a-merchant-bg.png';
import boxImage from '../../assets/others/location-merchant.png';

const MerchantCtaSection = () => {
    return (
        <section className='my-12 max-w-8xl mx-auto px-4 lg:px-12 overflow-hidden'>
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7 }}
                className='relative rounded-3xl overflow-hidden py-12 px-6 sm:px-12 lg:px-16 bg-tertiary2 bg-no-repeat bg-top text-white shadow-lg'
                style={{ 
                    backgroundImage: `url(${bgImage})`, 
                    backgroundSize: '100% auto' 
                }}
            >
                <div className='flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10'>
                    
                    {/* Left Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='flex flex-col space-y-6 lg:w-7/12 text-left'
                    >
                        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading leading-tight'>
                            Merchant and Customer Satisfaction is Our First Priority
                        </h2>
                        
                        <p className='text-gray-300 text-sm sm:text-base font-body max-w-xl leading-relaxed'>
                            We offer the lowest delivery charge with the highest value along with 100% safety of your product. SwiftDrop courier delivers your parcels in every corner of Bangladesh right on time.
                        </p>

                        {/* Action Buttons with Hover Scale */}
                        <div className='flex flex-wrap items-center gap-4 pt-2'>
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn bg-primary hover:bg-[#b8da55] text-secondary border-none rounded-full px-7 py-3 font-heading font-semibold shadow-none cursor-pointer"
                            >
                                Become a Merchant
                            </motion.button>
                            
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn bg-transparent hover:bg-white/10 text-white border border-primary rounded-full px-7 py-3 font-heading font-semibold shadow-none cursor-pointer"
                            >
                                Earn with SwiftDrop Courier
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Right Image (Box / Illustration with floating effect) */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className='lg:w-5/12 flex justify-center'
                    >
                        <motion.img 
                            animate={{ y: [0, -10, 0] }}
                            transition={{ 
                                repeat: Infinity, 
                                duration: 4, 
                                ease: "easeInOut" 
                            }}
                            src={boxImage} 
                            alt="Box Illustration" 
                            className='w-full max-w-sm lg:max-w-md h-auto object-contain' 
                        />
                    </motion.div>

                </div>
            </motion.div>
        </section>
    );
};

export default MerchantCtaSection;