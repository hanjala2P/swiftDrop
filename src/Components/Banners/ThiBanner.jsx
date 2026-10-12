import React from 'react';
import heroIcon from '../../assets/others/bike-del.png'
import { BsArrowUpRight } from 'react-icons/bs';

const ThiBanner = () => {
    return (
        <section className='bg-white rounded-2xl p-6 lg:p-12 my-6'>
            <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
                
                {/* Left Content */}
                <div className='flex flex-col space-y-3  lg:w-7/12'>

                    {/* Heading (Chobir moto alada line ebong color fix kora hoyeche) */}
                    <div>
                        <h1 className='text-left text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B0B0B] leading-[1.15] font-heading'>
                            <span className="text-[#0B0B0B]">Delivery in</span> <span className="text-[#CAEB66]">30</span> <br />
                            <span className="text-[#CAEB66]">Minutes</span> <span className="text-[#0B0B0B]">at your</span> <br />
                            <span className="text-[#0B0B0B]">doorstep</span>
                        </h1>
                    </div>

                    {/* Description */}
                    <p className='text-gray-500 text-left text-sm sm:text-base font-body max-w-xl'>
                        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                    </p>

                    {/* Buttons & Circular Arrow Icon */}
                    <div className='flex flex-wrap items-center gap-3 pt-2'>
                        <button className="btn bg-[#CAEB66] hover:bg-[#b8da55] text-[#0B0B0B] border-none rounded-full px-6 py-3 font-heading font-semibold shadow-none">
                            Track Your Parcel
                        </button>
                        
                        {/* Circular Arrow Button */}
                        <div className="w-10 h-10 rounded-full bg-[#0B0B0B] text-[#CAEB66] flex items-center justify-center cursor-pointer hover:opacity-90 transition-all">
                            <BsArrowUpRight className="text-lg" />
                        </div>

                        <button className="btn bg-white hover:bg-gray-50 text-[#0B0B0B] border border-gray-300 rounded-full px-6 py-3 font-heading font-semibold shadow-none">
                            Be A Rider
                        </button>
                    </div>

                </div>

                {/* Right Image */}
                <div className='lg:w-5/12 flex justify-center'>
                    <img className='w-full max-w-md lg:max-w-lg h-auto object-contain' src={heroIcon} alt="bike delivery" />
                </div>

            </div>
        </section>
    );
};

export default ThiBanner;