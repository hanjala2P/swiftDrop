import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import rider from '../../../../assets/others/agent-pending.png';

import useAxiosSecure from '../../../../Hooks/userAxiosSecure';
import useAuth from '../../../../Hooks/useAuth';

const BeARider = () => {
    const { 
        register, 
        handleSubmit, 
        control, 
        reset, 
        formState: { errors } 
    } = useForm();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();


    const serviceCenters = useLoaderData() || [];
    const allRegions = serviceCenters.map(c => c.region);
    const regions = [...new Set(allRegions)];

  
    const selectedRegion = useWatch({ control, name: 'region' });

   
    const districtByRegion = (region) => {
        if (!region) return [];
        const regionDistricts = serviceCenters.filter(c => c.region === region);
        return regionDistricts.map(d => d.district);
    };

    const handleBeARider = async (data) => {
        const riderInfo = {
            ...data,
            email: user?.email || data.email,
            status: 'pending', // pending, approved, or rejected
            appliedAt: new Date()
        };
        console.log(riderInfo)

        try {
            const res = await axiosSecure.post('/riders', riderInfo);
            if (res.data.insertedId || res.data.acknowledged) {
                Swal.fire({
                    title: "Application Submitted!",
                    text: "Your application to become a rider has been received. We will review it soon.",
                    icon: "success",
                    confirmButtonColor: "#CAEB66",
                    confirmButtonText: "Okay"
                });
                
                reset();
                navigate('/');
            }
        } catch (error) {
            console.error(error);
            Swal.fire("Error!", error.response?.data?.message || "Something went wrong. Please try again.", "error");
        }
    };

    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
            <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-16 shadow-sm border border-gray-100">
                
                {/* Header Title & Subtitle */}
                <div className="mb-8">
                    <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B1E1B] mb-2">
                        Be a Rider
                    </h2>
                    <p className="text-gray-500 text-xs sm:text-sm font-body max-w-xl">
                        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                    </p>
                    <div className="w-full border-t border-gray-200 mt-6"></div>
                </div>

                {/* Main Content: Form & Illustration Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Left Side: Form Fields (7 Columns) */}
                    <div className="lg:col-span-7">
                        <h3 className="text-xl font-bold font-heading text-[#0B1E1B] mb-6">
                            Tell us about yourself
                        </h3>

                        <form onSubmit={handleSubmit(handleBeARider)} className="space-y-4">
                            
                            {/* Your Name */}
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Your Name</label>
                                <input 
                                    type="text" 
                                    {...register('name', { required: 'Name is required' })}
                                    defaultValue={user?.displayName}
                                    placeholder="Your Name" 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white"
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                            </div>

                            {/* Driving License Number (Allows any text/string now) */}
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Driving License Number</label>
                                <input 
                                    type="number" 
                                    {...register('drivingLicense', { required: 'Driving License is required' })}
                                    placeholder="Driving License Number" 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white"
                                />
                                {errors.drivingLicense && <p className="text-red-500 text-xs mt-1">{errors.drivingLicense.message}</p>}
                            </div>

                            {/* Your Email */}
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Your Email</label>
                                <input 
                                    type="email" 
                                    {...register('email', { required: 'Email is required' })}
                                    defaultValue={user?.email}
                                    placeholder="Your Email" 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white"
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                            </div>

                            {/* Region & District Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1">Your Region</label>
                                    <select 
                                        {...register('region', { required: 'Region is required' })} 
                                        className="select w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white" 
                                        defaultValue=""
                                    >
                                        <option value="" disabled>Pick a Region</option>
                                        {regions.map((r, i) => <option key={i} value={r}>{r}</option>)}
                                    </select>
                                    {errors.region && <p className="text-red-500 text-xs mt-1">{errors.region.message}</p>}
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-gray-600 mb-1">Your District</label>
                                    <select 
                                        {...register('district', { required: 'District is required' })} 
                                        className="select w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white" 
                                        defaultValue=""
                                    >
                                        <option value="" disabled>Pick a District</option>
                                        {districtByRegion(selectedRegion).map((d, i) => <option key={i} value={d}>{d}</option>)}
                                    </select>
                                    {errors.district && <p className="text-red-500 text-xs mt-1">{errors.district.message}</p>}
                                </div>
                            </div>

                            {/* NID No (Allows text/string) */}
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">NID No</label>
                                <input 
                                    type="number" 
                                    {...register('nid', { required: 'NID Number is required' })}
                                    placeholder="NID" 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white"
                                />
                                {errors.nid && <p className="text-red-500 text-xs mt-1">{errors.nid.message}</p>}
                            </div>

                            {/* Phone Number (Changed to text type so any format or string works without strict pattern restrictions) */}
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Phone Number</label>
                                <input 
                                    type="number" 
                                    {...register('phone', { required: 'Phone Number is required' })}
                                    placeholder="Phone Number" 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white"
                                />
                                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                            </div>

                            {/* Bike Brand Model and Year */}
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Bike Brand Model and Year</label>
                                <input 
                                    type="number" 
                                    {...register('bikeInfo', { required: 'Bike info is required' })}
                                    placeholder="Bike Brand Model and Year" 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white"
                                />
                                {errors.bikeInfo && <p className="text-red-500 text-xs mt-1">{errors.bikeInfo.message}</p>}
                            </div>

                            {/* Bike Registration Number */}
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Bike Registration Number</label>
                                <input 
                                    type="number" 
                                    {...register('bikeRegistration', { required: 'Bike Registration Number is required' })}
                                    placeholder="Bike Registration Number" 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white"
                                />
                                {errors.bikeRegistration && <p className="text-red-500 text-xs mt-1">{errors.bikeRegistration.message}</p>}
                            </div>

                            {/* Tell Us About Yourself */}
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Tell Us About Yourself</label>
                                <textarea 
                                    rows="3"
                                    {...register('about')}
                                    placeholder="Tell Us About Yourself" 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white resize-none"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-2">
                                <button 
                                    type="submit" 
                                    className="w-full sm:w-auto px-12 py-3.5 bg-[#D4ED31] hover:bg-[#c3db26] text-[#0B1E1B] font-heading font-semibold rounded-xl transition-all shadow-sm cursor-pointer"
                                >
                                    Submit Application
                                </button>
                            </div>

                        </form>
                    </div>

                    {/* Right Side: Illustration (5 Columns) */}
                    <div className="lg:col-span-5 flex justify-center items-center">
                        <div className="w-full max-w-md">
                            <img 
                                src={rider} 
                                alt="Be a Rider Illustration" 
                                className="w-full h-auto object-contain"
                                onError={(e)=>{
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                            <div className="hidden w-full h-80 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex-col items-center justify-center text-gray-400 p-6 text-center">
                                <span className="text-sm font-medium">Rider Illustration Image</span>
                                <span className="text-xs text-gray-400 mt-1">(Place your image asset here)</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default BeARider;