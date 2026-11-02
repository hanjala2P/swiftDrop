import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import useAxiosSecure from "../../../../Hooks/userAxiosSecure";
import Loading from "../../../../Components/Loading/Loading";
import { ShieldCheck, ArrowRight, ReceiptText, Mail, Tag, DollarSign } from "lucide-react";

const Payment = () => {
    const { parcelId } = useParams();
    const axiosSecure = useAxiosSecure();

    const { data: parcel, isLoading } = useQuery({
        queryKey: ['parcel', parcelId],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels/${parcelId}`);
            return res.data;
        }
    });

    const handlePayment = async () => {
        try {
            const paymentInfo = {
                cost: parcel.cost,
                parcelId: parcel._id,
                senderEmail: parcel.senderEmail,
                parcelName: parcel.parcelName
            };
            
            const res = await axiosSecure.post('/create-checkout-session', paymentInfo);

            
            if (res.data?.url) {
                window.location.replace(res.data.url);
            }
        } catch (error) {
            console.error("Payment Error:", error);
        }
    };

    if (isLoading) {
        return <Loading></Loading>;
    }

    return (
        <div className="max-w-xl mx-auto px-4 py-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                
                {/* Top Banner Header */}
                <div className="bg-gray-50 px-6 py-5 border-b border-gray-100 flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-bold text-gray-800">Payment Summary</h2>
                        <p className="text-xs text-gray-500 mt-0.5">Review your parcel details before proceeding</p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-gray-700">
                        <ReceiptText className="w-5 h-5 text-gray-800" />
                    </div>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-4">
                    
                    {/* Parcel Name */}
                    <div className="flex items-center justify-between p-3.5 bg-gray-50/70 rounded-xl border border-gray-100">
                        <div className="flex items-center gap-3 text-gray-600">
                            <Tag className="w-4 h-4 text-gray-400" />
                            <span className="text-sm font-medium">Parcel Name</span>
                        </div>
                        <span className="text-sm font-bold text-gray-900">{parcel?.parcelName}</span>
                    </div>

                    {/* Sender Email */}
                    <div className="flex items-center justify-between p-3.5 bg-gray-50/70 rounded-xl border border-gray-100">
                        <div className="flex items-center gap-3 text-gray-600">
                            <Mail className="w-4 h-4 text-gray-400" />
                            <span className="text-sm font-medium">Sender Email</span>
                        </div>
                        <span className="text-sm font-medium text-gray-800">{parcel?.senderEmail}</span>
                    </div>

                    {/* Total Amount */}
                    <div className="flex items-center justify-between p-4 bg-primary/5 rounded-xl border border-primary/20">
                        <div className="flex items-center gap-3 text-gray-700">
                            <DollarSign className="w-5 h-5 text-primary" />
                            <span className="text-sm font-bold">Total Payable</span>
                        </div>
                        <span className="text-lg font-black text-gray-900">{parcel?.cost} TK</span>
                    </div>

                    {/* Security Notice */}
                    <div className="flex items-center gap-2 text-xs text-emerald-700 bg-emerald-50/80 px-3.5 py-2.5 rounded-lg border border-emerald-100">
                        <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-600" />
                        <span>Secure checkout powered by Stripe encryption.</span>
                    </div>

                    {/* Action Button */}
                    <button 
                        onClick={handlePayment} 
                        className="w-full mt-2 btn bg-[#0B1E1B] hover:bg-[#122e2a] text-[#D4ED31] font-bold py-3.5 rounded-xl border-none shadow-sm flex items-center justify-center gap-2 cursor-pointer transition-all"
                    >
                        <span>Proceed to Secure Pay</span>
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Payment;