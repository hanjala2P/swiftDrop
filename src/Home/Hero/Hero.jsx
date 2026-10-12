import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bannerImg2 from '../../assets/banner/banner2.png'
import bannerImg3 from '../../assets/banner/banner3.png'

import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import FirstBanner from '../../Components/Banners/FirstBanner';
import SecBanner from '../../Components/Banners/SecBanner copy';
import ThiBanner from '../../Components/Banners/ThiBanner';

const Hero = () => {
    return (
        <div>
             <Carousel
             autoPlay={true}
             infiniteLoop={true}
             >
                <div>
                    <FirstBanner></FirstBanner>
                    
                </div>
                <div>
                    <SecBanner></SecBanner>
                </div>
                <div>
                  <ThiBanner></ThiBanner>
                </div>
            </Carousel>
        </div>
    );
};

export default Hero;