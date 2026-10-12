import React, { useState } from 'react';

const PricingCalculator = () => {
    // State management for form inputs and calculated cost
    const [parcelType, setParcelType] = useState('');
    const [destination, setDestination] = useState('');
    const [weight, setWeight] = useState('');
    const [cost, setCost] = useState(null);

    // Calculate cost logic based on inputs
    const handleCalculate = (e) => {
        e.preventDefault();
        
        // Base price calculation rule (can be customized)
        let basePrice = 50; // default minimum cost in Tk

        if (parcelType === 'document') {
            basePrice = 60;
        } else if (parcelType === 'fragile') {
            basePrice = 100;
        } else if (parcelType === 'heavy') {
            basePrice = 150;
        }

        // Destination multiplier or additional fee
        let destinationFee = 0;
        if (destination === 'outside-city') {
            destinationFee = 60;
        } else if (destination === 'international') {
            destinationFee = 500;
        }

        // Weight fee calculation (e.g., 20 Tk per KG)
        const weightNum = parseFloat(weight) || 1;
        const weightFee = weightNum * 20;

        const totalCost = basePrice + destinationFee + weightFee;
        setCost(totalCost);
    };

    // Reset fields logic
    const handleReset = () => {
        setParcelType('');
        setDestination('');
        setWeight('');
        setCost(null);
    };

    return (
        <section className="max-w-7xl mx-auto px-4 py-12">
            <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-16 shadow-sm border border-gray-100">
                
                {/* Header Title & Subtitle */}
                <div className="mb-8">
                    <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B1E1B] mb-2">
                        Pricing Calculator
                    </h2>
                    <p className="text-gray-500 text-xs sm:text-sm font-body max-w-xl">
                        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                    </p>
                    <div className="w-full border-t border-gray-200 mt-6"></div>
                </div>

                {/* Subheading */}
                <div className="text-center my-8">
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#0B1E1B]">
                        Calculate Your Cost
                    </h3>
                </div>

                {/* Main Content: Form & Result Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Left Side: Form Inputs (7 Columns) */}
                    <div className="lg:col-span-7">
                        <form onSubmit={handleCalculate} className="space-y-4">
                            
                            {/* Parcel Type */}
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Parcel type</label>
                                <select 
                                    value={parcelType}
                                    onChange={(e) => setParcelType(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white"
                                    required
                                >
                                    <option value="" disabled>Select Parcel type</option>
                                    <option value="document">Document (Standard)</option>
                                    <option value="fragile">Fragile Item</option>
                                    <option value="heavy">Heavy Package</option>
                                </select>
                            </div>

                            {/* Delivery Destination */}
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Delivery Destination</label>
                                <select 
                                    value={destination}
                                    onChange={(e) => setDestination(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white"
                                    required
                                >
                                    <option value="" disabled>Select Delivery Destination</option>
                                    <option value="inside-city">Inside City</option>
                                    <option value="outside-city">Outside City</option>
                                    <option value="international">International</option>
                                </select>
                            </div>

                            {/* Weight (KG) */}
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Weight (KG)</label>
                                <input 
                                    type="number" 
                                    step="0.1"
                                    min="0.1"
                                    placeholder="e.g. 1.5" 
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white"
                                    required
                                />
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center gap-4 pt-2">
                                <button 
                                    type="button" 
                                    onClick={handleReset}
                                    className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-medium text-sm hover:bg-gray-50 transition-all cursor-pointer"
                                >
                                    Reset
                                </button>
                                <button 
                                    type="submit" 
                                    className="flex-1 sm:flex-none px-10 py-3 bg-[#D4ED31] hover:bg-[#c3db26] text-[#0B1E1B] font-heading font-semibold rounded-xl transition-all shadow-sm cursor-pointer"
                                >
                                    Calculate
                                </button>
                            </div>

                        </form>
                    </div>

                    {/* Right Side: Cost Output Display (5 Columns) */}
                    <div className="lg:col-span-5 flex flex-col justify-center items-center bg-gray-50/50 rounded-3xl p-10 border border-dashed border-gray-200">
                        <span className="text-gray-400 font-medium text-sm mb-2">Estimated Cost</span>
                        <div className="text-5xl sm:text-6xl font-extrabold font-heading text-[#0B1E1B] tracking-tight">
                            {cost !== null ? `${cost} Tk` : '50 Tk'}
                        </div>
                        <p className="text-xs text-gray-400 mt-3 text-center">
                            *Final charge may vary based on actual dimensions and exact weight.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default PricingCalculator;