import React from 'react';
import tiny from '../../assets/others/tiny-deliveryman.png'
import heroIcon from '../../assets/others/big-deliveryman.png'
import { BsArrowUpRightCircleFill } from 'react-icons/bs';

const FirstBanner = () => {
    return (
        <section className='bg-white rounded-2xl p-6 lg:p-12 my-6'>
            <div className='flex flex-col lg:flex-row items-center justify-between gap-8'>
                
                {/* Left Content */}
                <div className='flex flex-col space-y-6 lg:w-7/12'>
                    {/* Tiny Image & Line */}
                    <div className='flex items-center gap-3'>
                        <img className='h-10 w-auto object-contain' src={tiny} alt="" />
                        <div className='h-[2px] w-20 bg-gray-300'></div>
                    </div>

                    {/* Heading */}
                    <div>
                        <h1 className=' text-3xl text-left sm:text-4xl lg:text-5xl font-extrabold text-tertiary leading-tight font-heading'>
                        We Make Sure Your <span className='text-primary'> Parcel Arrives</span> On Time <h1> – No Fuss.</h1>
                    </h1>
                    </div>

                    {/* Description */}
                    <p className='text-left text-gray-600 text-sm sm:text-base font-body max-w-xl'>
                        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                    </p>

                    {/* Buttons */}
                    <div className='flex flex-wrap items-center gap-4'>
                        <button className="btn bg-[#CAEB66] hover:bg-[#b8da55] text-[#0B0B0B] border-none rounded-full px-6 py-3 font-heading font-semibold">Track Your Parcel</button>
                         <BsArrowUpRightCircleFill className='btn border-none text-secondary' />
                        <button className="btn bg-white hover:bg-gray-50 text-[#0B0B0B] border border-gray-300 rounded-full px-6 py-3 font-heading font-semibold">Be A Rider</button>
                      
                    </div>

                    {/* Indicators */}
                    
                </div>

                {/* Right Image */}
                <div className='lg:w-5/12 flex justify-center'>
                    <img className='w-full max-w-md h-auto object-contain' src={heroIcon} alt="" />
                </div>

            </div>
        </section>
    );
};

export default FirstBanner;