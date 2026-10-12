import React, { useState } from 'react';

const SendAParcel = () => {
    const [parcelType, setParcelType] = useState('document');

    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
            <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-16 shadow-sm border border-gray-100">
                
                {/* Header Title & Subtitle */}
                <div className="mb-8">
                    <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B1E1B] mb-2">
                        Send A Parcel
                    </h2>
                    <p className="text-gray-500 text-xs sm:text-sm font-body">
                        Enter your parcel details
                    </p>
                    <div className="w-full border-t border-gray-200 mt-6"></div>
                </div>

                <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
                    
                    {/* Parcel Type Radio Buttons */}
                    <div className="flex items-center gap-8">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input 
                                type="radio" 
                                name="parcelType" 
                                checked={parcelType === 'document'}
                                onChange={() => setParcelType('document')}
                                className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                            />
                            <span className="text-sm font-medium text-gray-700">Document</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input 
                                type="radio" 
                                name="parcelType" 
                                checked={parcelType === 'non-document'}
                                onChange={() => setParcelType('non-document')}
                                className="w-4 h-4 text-emerald-600 focus:ring-emerald-500"
                            />
                            <span className="text-sm font-medium text-gray-700">Non-Document</span>
                        </label>
                    </div>

                    {/* Parcel Name & Weight Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1">Parcel Name</label>
                            <input 
                                type="text" 
                                placeholder="Parcel Name" 
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1">Parcel Weight (KG)</label>
                            <input 
                                type="text" 
                                placeholder="Parcel Weight (KG)" 
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white"
                            />
                        </div>
                    </div>

                    {/* Sender & Receiver Details Section (Two Columns) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pt-4">
                        
                        {/* Sender Details */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold font-heading text-[#0B1E1B]">
                                Sender Details
                            </h3>

                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Sender Name</label>
                                <input 
                                    type="text" 
                                    placeholder="Sender Name" 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Address</label>
                                <input 
                                    type="text" 
                                    placeholder="Address" 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Sender Phone No</label>
                                <input 
                                    type="tel" 
                                    placeholder="Sender Phone No" 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Your District</label>
                                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-500 bg-white">
                                    <option value="">Select your District</option>
                                    <option value="dhaka">Dhaka</option>
                                    <option value="chittagong">Chittagong</option>
                                    <option value="chandpur">Chandpur</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Pickup Instruction</label>
                                <textarea 
                                    rows="3"
                                    placeholder="Pickup Instruction" 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white resize-none"
                                ></textarea>
                            </div>
                        </div>

                        {/* Receiver Details */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold font-heading text-[#0B1E1B]">
                                Receiver Details
                            </h3>

                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Receiver Name</label>
                                <input 
                                    type="text" 
                                    placeholder="Sender Name" 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Receiver Address</label>
                                <input 
                                    type="text" 
                                    placeholder="Address" 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Receiver Contact No</label>
                                <input 
                                    type="tel" 
                                    placeholder="Sender Contact No" 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Receiver District</label>
                                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-500 bg-white">
                                    <option value="">Select your District</option>
                                    <option value="dhaka">Dhaka</option>
                                    <option value="chittagong">Chittagong</option>
                                    <option value="chandpur">Chandpur</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Delivery Instruction</label>
                                <textarea 
                                    rows="3"
                                    placeholder="Delivery Instruction" 
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white resize-none"
                                ></textarea>
                            </div>
                        </div>

                    </div>

                    {/* Footer Note & Submit Button */}
                    <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <p className="text-xs text-gray-400 font-medium">
                            * PickUp Time 4pm-7pm Approx.
                        </p>
                        <button 
                            type="submit" 
                            className="w-full sm:w-auto px-10 py-3.5 bg-[#D4ED31] hover:bg-[#c3db26] text-[#0B1E1B] font-heading font-semibold rounded-xl transition-all shadow-sm cursor-pointer"
                        >
                            Proceed to Confirm Booking
                        </button>
                    </div>

                </form>

            </div>
        </section>
    );
};

export default SendAParcel;