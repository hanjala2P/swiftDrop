import { useQuery } from '@tanstack/react-query';
import useAuth from '../../../../Hooks/useAuth';
import useAxiosSecure from '../../../../Hooks/userAxiosSecure';
import { FiEye, FiCopy } from 'react-icons/fi';
import Swal from 'sweetalert2';

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [], isLoading, error } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments?email=${user?.email}`);
            return res.data;
        },
        enabled: !!user?.email
    });

    // Copy to clipboard helper function
    const handleCopy = (text, type) => {
        if (!text) return;
        navigator.clipboard.writeText(text);
        Swal.fire({
            toast: true,
            position: 'top-end',
            icon: 'success',
            title: `${type} copied to clipboard!`,
            showConfirmButton: false,
            timer: 1500
        });
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-[60vh]">
                <div className="flex flex-col items-center gap-3">
                    <span className="loading loading-spinner loading-lg text-primary"></span>
                    <p className="text-gray-500 font-medium text-sm">Loading your payment history...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-[60vh] text-red-500 font-medium">
                Failed to load payment history. Please try again later.
            </div>
        );
    }

    return (
        <div className="p-4 md:p-6 lg:p-2 max-w-7xl mx-auto overflow-hidden">
            {/* Inline CSS Animation Keyframes */}
            <style>{`
                @keyframes slideInFromLeft {
                    0% {
                        opacity: 0;
                        transform: translateX(-50px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                .animate-slide-in {
                    animation: slideInFromLeft 0.5s ease-out forwards;
                }
            `}</style>

            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                    <h2 className="text-xl md:text-2xl font-bold font-heading text-gray-900">
                        Payment History
                    </h2>
                    <p className="text-xs md:text-sm text-gray-500 mt-0.5">
                        View and manage all your secure transaction logs.
                    </p>
                </div>
                <span className="bg-[var(--color-primary-light)] text-[var(--color-dark-text)] px-4 py-2 rounded-xl text-xs md:text-sm font-bold shadow-xs">
                    Total Transactions: {payments.length}
                </span>
            </div>

            {/* ================= MOBILE VIEW (CARDS) ================= */}
            <div className="grid grid-cols-1 gap-4 md:hidden">
                {payments.map((payment, index) => (
                    <div 
                        key={payment._id} 
                        className="bg-white p-4 rounded-2xl border border-gray-100 shadow-xs space-y-3 animate-slide-in opacity-0"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="flex justify-between items-start">
                            <div>
                                <span className="text-xs text-gray-400 font-medium">#{index + 1}</span>
                                <h3 className="font-bold text-gray-900 text-base">{payment.parcelName || "Untitled Parcel"}</h3>
                            </div>
                            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-600 border border-emerald-100 capitalize">
                                {payment.paymentStatus || "Paid"}
                            </span>
                        </div>

                        <div className="space-y-2 text-xs text-gray-600 bg-gray-50/80 p-3 rounded-xl">
                            <div>
                                <span className="text-gray-400 block font-medium">Recipient Info</span>
                                <p className="font-semibold text-gray-800">{payment.recipientName || "N/A"}</p>
                                <p className="text-gray-500">{payment.recipientAddress || "N/A"}</p>
                                <p className="text-gray-400">{payment.recipientPhone || "N/A"}</p>
                            </div>

                            {/* Tracking Number with Copy */}
                            <div className="pt-2 border-t border-gray-200/60 flex items-center justify-between">
                                <div>
                                    <span className="text-gray-400 block font-medium">Tracking Number</span>
                                    <span className="font-mono font-semibold text-gray-800">{payment.trackingId || "N/A"}</span>
                                </div>
                                {payment.trackingId && (
                                    <button 
                                        onClick={() => handleCopy(payment.trackingId, 'Tracking ID')}
                                        className="p-1.5 text-gray-500 hover:text-primary hover:bg-gray-200 rounded-lg transition-all"
                                        title="Copy Tracking ID"
                                    >
                                        <FiCopy className="w-4 h-4" />
                                    </button>
                                )}
                            </div>

                            {/* Transaction ID with Copy */}
                            <div className="pt-2 border-t border-gray-200/60 flex items-center justify-between">
                                <div className="overflow-hidden mr-2">
                                    <span className="text-gray-400 block font-medium">Transaction ID</span>
                                    <span className="font-mono text-gray-700 break-all block text-[11px]" title={payment.transectionId}>
                                        {payment.transectionId || "N/A"}
                                    </span>
                                </div>
                                {payment.transectionId && (
                                    <button 
                                        onClick={() => handleCopy(payment.transectionId, 'Transaction ID')}
                                        className="p-1.5 text-gray-500 hover:text-primary hover:bg-gray-200 rounded-lg transition-all shrink-0"
                                        title="Copy Transaction ID"
                                    >
                                        <FiCopy className="w-4 h-4" />
                                    </button>
                                )}
                            </div>

                            <div className="pt-1 flex justify-between items-center border-t border-gray-200/60">
                                <span className="text-gray-400 font-medium">Amount</span>
                                <span className="font-bold text-gray-900">৳ {payment.amount || 0}</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                            <span className="text-xs text-gray-400 font-medium">
                                {payment.payedAt ? new Date(payment.payedAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : 'N/A'}
                            </span>

                            <button 
                                onClick={() => alert(`Viewing details for transaction: ${payment.transectionId}`)}
                                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#E6F4F1] hover:bg-[#d0ece7] text-[#0B1E1B] text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                            >
                                <FiEye className="w-3.5 h-3.5" />
                                <span>View</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* ================= DESKTOP & TABLET VIEW (TABLE) ================= */}
            <div className="hidden md:block bg-white rounded-2xl border border-gray-100 shadow-xs overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50/80 border-b border-gray-100 text-gray-500 text-xs font-bold uppercase tracking-wider">
                                <th className="py-4 px-5">#</th>
                                <th className="py-4 px-5">Parcel Info</th>
                                <th className="py-4 px-5">Recipient Info</th>
                                <th className="py-4 px-5">Tracking Number</th>
                                <th className="py-4 px-5">Transaction ID</th>
                                <th className="py-4 px-5">Payment Info</th>
                                <th className="py-4 px-5 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-sm">
                            {
                                payments.map((payment, index) => (
                                    <tr 
                                        key={payment._id} 
                                        className="hover:bg-gray-50/60 transition-colors group animate-slide-in opacity-0"
                                        style={{ animationDelay: `${index * 0.08}s` }}
                                    >
                                        <td className="py-4 px-5 text-gray-400 font-semibold">{index + 1}</td>
                                        
                                        <td className="py-4 px-5 font-bold text-gray-800">
                                            {payment.parcelName || "N/A"}
                                        </td>
                                        
                                        <td className="py-4 px-5">
                                            <div className="space-y-0.5">
                                                <p className="font-semibold text-gray-900">{payment.recipientName || "N/A"}</p>
                                                <p className="text-xs text-gray-500">{payment.recipientAddress || "N/A"}</p>
                                                <p className="text-xs text-gray-400 font-medium">{payment.recipientPhone || "N/A"}</p>
                                            </div>
                                        </td>
                                        
                                        {/* Tracking Number with Copy Button */}
                                        <td className="py-4 px-5 font-mono text-gray-600 font-semibold">
                                            <div className="flex items-center gap-2">
                                                <span>{payment.trackingId || "N/A"}</span>
                                                {payment.trackingId && (
                                                    <button 
                                                        onClick={() => handleCopy(payment.trackingId, 'Tracking ID')}
                                                        className="text-gray-400 hover:text-primary p-1 rounded transition-colors"
                                                        title="Copy Tracking ID"
                                                    >
                                                        <FiCopy className="w-3.5 h-3.5" />
                                                    </button>
                                                )}
                                            </div>
                                        </td>

                                        {/* Transaction ID with wrap & Copy Button */}
                                        <td className="py-4 px-5 font-mono text-xs text-gray-600">
                                            <div className="flex items-center gap-2 max-w-[220px]">
                                                <span className="break-all">{payment.transectionId || "N/A"}</span>
                                                {payment.transectionId && (
                                                    <button 
                                                        onClick={() => handleCopy(payment.transectionId, 'Transaction ID')}
                                                        className="text-gray-400 hover:text-primary p-1 rounded transition-colors shrink-0"
                                                        title="Copy Transaction ID"
                                                    >
                                                        <FiCopy className="w-3.5 h-3.5" />
                                                    </button>
                                                )}
                                            </div>
                                        </td>
                                        
                                        <td className="py-4 px-5 font-medium text-gray-700">
                                            ৳ {payment.amount || 0} 
                                            <span className="block text-xs text-emerald-600 font-semibold">
                                                ({payment.paymentStatus || "Paid"})
                                            </span>
                                        </td>

                                        <td className="py-4 px-5 text-center">
                                            <button 
                                                onClick={() => alert(`Viewing details for transaction: ${payment.transectionId}`)}
                                                title="View Details" 
                                                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#E6F4F1] hover:bg-[#d0ece7] text-[#0B1E1B] text-xs font-semibold rounded-xl transition-all cursor-pointer shadow-2xs"
                                            >
                                                <FiEye className="w-4 h-4" />
                                                <span>View</span>
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            {payments.length === 0 && (
                <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center text-gray-400 mt-4 shadow-xs">
                    <p className="text-base font-semibold text-gray-600">No payment history found!</p>
                    <p className="text-xs text-gray-400 mt-1">You haven't made any transactions yet.</p>
                </div>
            )}
        </div>
    );
};

export default PaymentHistory;