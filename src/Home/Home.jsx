import React from 'react';
import Hero from './Hero/Hero';
import HowItWorks from './HowItWorks/HowItWorks';
import OurServices from './Services/OurServices';
import TrustedBrands from './TrustedBrands/TrustedBrands';
import FeaturesSection from './FeaturesSection/FeaturesSection';
import MerchantCtaSection from './MerchantCtaSection/MerchantCtaSection';
import CustomerSays from './CustomerSays/CustomerSays';
import FaqSection from './FaqSection/FaqSection';

const Home = () => {
    return (
        <div>
           <Hero></Hero>
           <HowItWorks></HowItWorks>
           <OurServices></OurServices>
           <TrustedBrands></TrustedBrands>
           <FeaturesSection></FeaturesSection>
           <MerchantCtaSection></MerchantCtaSection>
           <CustomerSays></CustomerSays>
            <FaqSection></FaqSection>
        </div>
    );
};

export default Home;