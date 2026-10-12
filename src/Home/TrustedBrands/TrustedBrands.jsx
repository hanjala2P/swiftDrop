import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper modules
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

import casio from '../../assets/brands/casio.png';
import amazon from '../../assets/brands/amazon.png';
import moonstar from '../../assets/brands/moonstar.png';
import randstad from '../../assets/brands/randstad.png';
import star from '../../assets/brands/star.png';
import start_people from '../../assets/brands/start_people.png';

const TrustedBrands = () => {
    const brands = [
        { id: 1, name: "CASIO", logo: casio },
        { id: 2, name: "Amazon", logo: amazon },
        { id: 3, name: "Moonstar", logo: moonstar },
        { id: 4, name: "Star+", logo: star },
        { id: 5, name: "Startpeople", logo: start_people },
        { id: 6, name: "Randstad", logo: randstad },
    ];

    return (
        <section className='py-12 px-4 lg:px-12 my-8 max-w-7xl mx-auto text-center overflow-hidden'>
            {/* Section Title */}
            <h3 className='text-xl sm:text-2xl font-bold font-heading text-tertiary2 mb-8'>
                We've helped thousands of sales teams
            </h3>

            {/* Swiper Slider */}
            <Swiper
                modules={[Autoplay]}
                spaceBetween={30}
                slidesPerView={2}
                loop={true}
                speed={3000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 5 },
                }}
                className='opacity-80 flex items-center'
            >
                {brands.map((brand) => (
                    <SwiperSlide key={brand.id} className='flex items-center justify-center'>
                        <div className='flex items-center justify-center'>
                            <img 
                                src={brand.logo} 
                                alt={brand.name} 
                                className='h-7 sm:h-8 w-auto object-contain' 
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default TrustedBrands;