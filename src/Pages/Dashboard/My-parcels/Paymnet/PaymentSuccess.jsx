import React from 'react';
import { Link } from 'react-router';
import { CheckCircle2, ArrowRight, Package, LayoutDashboard } from 'lucide-react';

const PaymentSuccess = () => {
    return (
        <div className="max-w-md mx-auto my-16 px-4">
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 text-center space-y-6">
                
                {/* Clean Static Success Icon */}
                <div className="w-20 h-20 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto text-emerald-600 shadow-sm border border-emerald-100">
                    <CheckCircle2 className="w-10 h-10" />
                </div>

                {/* Heading & Subtitle */}
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Payment Successful!</h2>
                    <p className="text-sm text-gray-500 max-w-xs mx-auto leading-relaxed">
                        Your transaction has been completed successfully. Your parcel is now confirmed for delivery.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-2">
                    <Link 
                        to="/dashboard/my-parcels" 
                        className="w-full btn bg-[#0B1E1B] hover:bg-[#122e2a] text-[#D4ED31] font-bold py-3.5 rounded-xl border-none shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all"
                    >
                        <Package className="w-4 h-4" />
                        <span>View My Parcels</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>

                    <Link 
                        to="/dashboard" 
                        className="w-full btn bg-gray-50 hover:bg-gray-100 text-gray-700 font-semibold py-3.5 rounded-xl border border-gray-200 flex items-center justify-center gap-2 cursor-pointer transition-all"
                    >
                        <LayoutDashboard className="w-4 h-4 text-gray-500" />
                        <span>Back to Dashboard</span>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default PaymentSuccess;