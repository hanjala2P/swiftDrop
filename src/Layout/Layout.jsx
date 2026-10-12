import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Layout = () => {
    return (
        <div className='bg-[#EAECED] min-h-screen px-4 sm:px-8 md:px-12 lg:px-16'>
            <div className='max-w-[1440px] mx-auto'>
                <Navbar></Navbar>
                <main className='min-h-[calc(100vh-200px)] py-6'>
                    <Outlet></Outlet>
                </main>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Layout;