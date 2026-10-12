import React from 'react';
import Logo from '../../../Components/Logo/Logo';
import { FaLinkedinIn, FaFacebookF, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='max-w-8xl mx-auto px-4 py-8'>
            <footer className="bg-[#121212] text-white rounded-3xl py-12 px-6 flex flex-col items-center text-center shadow-lg">
                
                {/* Logo & Slogan Section */}
                <div className="flex flex-col items-center max-w-lg mb-8">
                    <div className="mb-3">
                        <Logo />
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm font-body leading-relaxed">
                        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                    </p>
                </div>

                {/* Top Dashed Divider Line */}
                <div className="w-full max-w-4xl border-t border-dashed border-gray-800 mb-8"></div>

                {/* Navigation Links */}
                <nav className="flex flex-wrap justify-center gap-6 sm:gap-10 text-gray-300 font-medium text-sm sm:text-base mb-8">
                    <a href="#services" className="hover:text-white transition-colors">Services</a>
                    <a href="#coverage" className="hover:text-white transition-colors">Coverage</a>
                    <a href="#about" className="hover:text-white transition-colors">About Us</a>
                    <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
                    <a href="#blog" className="hover:text-white transition-colors">Blog</a>
                    <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                </nav>

                {/* Bottom Dashed Divider Line */}
                <div className="w-full max-w-4xl border-t border-dashed border-gray-800 mb-8"></div>

                {/* Social Media Icons */}
                <div className="flex items-center gap-4">
                    {/* LinkedIn */}
                    <a 
                        href="https://linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-[#0077b5] flex items-center justify-center text-white hover:opacity-80 transition-all cursor-pointer"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedinIn className="text-base" />
                    </a>

                    {/* Twitter / X */}
                    <a 
                        href="https://twitter.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:opacity-80 transition-all cursor-pointer"
                        aria-label="Twitter"
                    >
                        <FaXTwitter className="text-base" />
                    </a>

                    {/* Facebook */}
                    <a 
                        href="https://facebook.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-[#1877f2] flex items-center justify-center text-white hover:opacity-80 transition-all cursor-pointer"
                        aria-label="Facebook"
                    >
                        <FaFacebookF className="text-base" />
                    </a>

                    {/* YouTube */}
                    <a 
                        href="https://youtube.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-[#ff0000] flex items-center justify-center text-white hover:opacity-80 transition-all cursor-pointer"
                        aria-label="YouTube"
                    >
                        <FaYoutube className="text-lg" />
                    </a>
                </div>

            </footer>
        </div>
    );
};

export default Footer;