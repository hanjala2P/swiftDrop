import React from 'react';
import logo from '../../assets/logo.png'
import { FaSwift } from 'react-icons/fa';

const Logo = () => {
    return (
        <div className='flex items-center gap-2'>
            <FaSwift className='text-primary text-4xl'/>
            <h3 className="lg:text-2xl font-bold md:text-2xl sm:text-xl whitespace-nowrap">Swift <span className='text-primary'>Drop</span></h3>
        </div>
    );
};
export default Logo;