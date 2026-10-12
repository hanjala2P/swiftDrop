import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { FaQuoteLeft } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';

// Tomar nirdisto path theke image import kora holo
import safeDeliveryImg from '../../assets/others/customer-top.png'; 

const CustomerSays = () => {
    const testimonials = [
        {
            id: 1,
            name: "Rasel Ahamed",
            designation: "CTO",
            comment: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
        },
        {
            id: 2,
            name: "Awlad Hossin",
            designation: "Senior Product Designer",
            comment: "SwiftDrop courier service is amazing! They deliver parcels on time with absolute safety and lowest delivery charges possible.",
        },
        {
            id: 3,
            name: "Nasir Uddin",
            designation: "CEO",
            comment: "Customer satisfaction is their main priority. I am really impressed by their professionalism and fast delivery network across Bangladesh.",
        },
        {
            id: 4,
            name: "Tanvir Ahmed",
            designation: "Software Engineer",
            comment: "The tracking system and merchant support make our e-commerce business run smoothly every single day without any hassle.",
        },
    ];

    return (
        <section className='py-12 px-4 lg:px-12 max-w-8xl mx-auto text-center overflow-hidden'>
            
            {/* Top Illustration / Icon */}
            <div className='flex justify-center mb-6'>
                <img 
                    src={safeDeliveryImg} 
                    alt="Safe Delivery" 
                    className='h-28 w-auto object-contain' 
                />
            </div>

            {/* Section Header */}
            <div className='max-w-xl mx-auto mb-12 space-y-3'>
                <h2 className='text-3xl sm:text-4xl font-extrabold font-heading text-tertiary2'>
                    What our customers are sayings
                </h2>
                <p className='text-gray-500 text-sm sm:text-base font-body'>
                    Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
                </p>
            </div>

            {/* Swiper Testimonials Slider */}
            <div className='mb-8 relative'>
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={24}
                    slidesPerView={1}
                    loop={true}
                    centeredSlides={true}
                    speed={800}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: '.custom-next',
                        prevEl: '.custom-prev',
                    }}
                    pagination={{
                        el: '.custom-pagination',
                        clickable: true,
                    }}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className='pb-12'
                >
                    {testimonials.map((item) => (
                        <SwiperSlide key={item.id} className='py-4'>
                            {({ isActive }) => (
                                <div 
                                    className={`rounded-3xl p-8 text-left transition-all duration-500 shadow-sm flex flex-col justify-between h-full ${
                                        isActive 
                                            ? 'bg-white shadow-xl scale-105 border border-gray-100 py-10 z-10' 
                                            : 'bg-white/60 opacity-70 hover:opacity-100'
                                    }`}
                                >
                                    {/* Quote Icon */}
                                    <FaQuoteLeft className='text-3xl text-gray-200 mb-4' />

                                    {/* Comment */}
                                    <p className='text-gray-600 text-sm font-body leading-relaxed mb-6'>
                                        {item.comment}
                                    </p>

                                    <div className='border-t border-dashed border-gray-200 pt-4 mt-auto'></div>

                                    {/* User Info */}
                                    <div className='flex items-center gap-3 pt-2'>
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                                            isActive ? 'bg-[#0B1E1B]' : 'bg-gray-400'
                                        }`}>
                                            {item.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className='font-heading font-bold text-[#0B1E1B] text-sm'>
                                                {item.name}
                                            </h4>
                                            <p className='text-xs text-gray-400 font-body'>
                                                {item.designation}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Navigation Controls */}
            <div className='flex items-center justify-center gap-4 mt-4'>
                {/* Previous Arrow */}
                <button 
                    className='custom-prev w-11 h-11 rounded-full bg-white border border-gray-200 flex items-center justify-center text-[#0B1E1B] hover:bg-[#0B1E1B] hover:text-white hover:border-[#0B1E1B] shadow-sm transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer'
                    aria-label="Previous Slide"
                >
                    <BsArrowLeft className='text-lg' />
                </button>

                {/* Custom Dots Pagination */}
                <div className='custom-pagination flex items-center gap-2'></div>

                {/* Next Arrow */}
                <button 
                    className='custom-next w-11 h-11 rounded-full bg-primary flex items-center justify-center text-[#0B1E1B] hover:bg-[#0B1E1B] hover:text-white shadow-sm transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer'
                    aria-label="Next Slide"
                >
                    <BsArrowRight className='text-lg' />
                </button>
            </div>

        </section>
    );
};

export default CustomerSays;