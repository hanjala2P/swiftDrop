import React from 'react';
import { Link } from 'react-router';
import { XCircle, ArrowLeft, RefreshCw } from 'lucide-react';

const PaymentCancel = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4">
            <div className="max-w-md w-full bg-white dark:bg-gray-900 shadow-xl rounded-2xl p-8 text-center border border-gray-100 dark:border-gray-800">
                
                {/* Cancel Icon Animation/Wrapper */}
                <div className="mx-auto flex items-center justify-center w-20 h-20 bg-red-50 dark:bg-red-950/30 rounded-full mb-6">
                    <XCircle className="w-12 h-12 text-red-500 animate-pulse" />
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Payment Cancelled
                </h2>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-8">
                    Your payment session was cancelled or interrupted. No charges were made to your account. You can try making the payment again whenever you're ready.
                </p>

                {/* Action Buttons */}
                <div className="space-y-3">
                    <Link 
                        to="/dashboard/my-parcels" 
                        className="w-full flex items-center justify-center gap-2 bg-[#0B1E1B] text-[#D4ED31] hover:opacity-95 font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-md"
                    >
                        <RefreshCw className="w-4 h-4" />
                        Try Again / My Parcels
                    </Link>

                    <Link 
                        to="/" 
                        className="w-full flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 font-medium py-3 px-6 rounded-xl transition-all duration-200 text-sm"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </div>
                
            </div>
        </div>
    );
};

export default PaymentCancel;