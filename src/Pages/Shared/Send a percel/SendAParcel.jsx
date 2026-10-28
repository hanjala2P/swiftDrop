import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/userAxiosSecure';
import useAuth from '../../../Hooks/useAuth';

const SendAParcel = () => {
    const { register, handleSubmit, control } = useForm();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    
    const serviceCenters = useLoaderData();
    const allRegions = serviceCenters.map(c => c.region);
    const regions = [...new Set(allRegions)];
    
    const senderRegion = useWatch({ control, name: 'senderRegion' });
    const receiverRegion = useWatch({ control, name: 'receiverRegion' });

    const districtByRegion = region => {
        if (!region) return []; 
        const regionDistricts = serviceCenters.filter(c => c.region === region);
        const districts = regionDistricts.map(d => d.district);
        return districts;
    };
   
    const handleSendParcel = data => {
        const isDocument = data.parcelType === 'document';
        const isSameDistrict = data.senderDistrict === data.receiverDistrict;
        
        const parcelWeight = parseFloat(data.parcelWeight) || 0;
        let cost = 0;
        
        if (isDocument) {
            cost = isSameDistrict ? 60 : 80;
        } else {
            if (parcelWeight < 3) {
                cost = isSameDistrict ? 110 : 150;
            } else {
                const minCharge = isSameDistrict ? 110 : 150;
                const extraWeight = parcelWeight - 3;
                const extraCharge = isSameDistrict ? extraWeight * 40 : (extraWeight * 40) + 40;
                cost = minCharge + extraCharge;
            }
        }

        
        const parcelInfo = {
            ...data,
            cost,
            status: 'pending',
            createdAt: new Date()
        };

        Swal.fire({
            title: "Agree with the cost?",
            text: `You will be charged ${cost} tk`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#D4ED31",
            cancelButtonColor: "#0B1E1B",
            confirmButtonText: "Yes, Take My Parcel",
            customClass: {
                confirmButton: 'custom-confirm-btn'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.post('/parcels', parcelInfo)
                    .then(res => {
                        if (res.data.insertedId || res.data.acknowledged) {
                            Swal.fire({
                                title: "Success!",
                                text: "Your parcel has been booked successfully.",
                                icon: "success",
                                confirmButtonColor: "#D4ED31", 
                                customClass: {
                                    confirmButton: 'custom-confirm-btn' 
                                }
                            }).then(() => {
                                navigate('/dashboard/my-parcels');
                            });
                        }
                    })
                    .catch(error => {
                        console.error(error);
                        Swal.fire({
                            title: "Error!",
                            text: "Something went wrong. Please try again.",
                            icon: "error"
                        });
                    });
            }
        });
    };

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

                <form onSubmit={handleSubmit(handleSendParcel)} className="space-y-8">
                    
                    {/* Parcel Type Radio Buttons */}
                    <div className="flex text-gray-600 items-center gap-8">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input 
                                type="radio" 
                                {...register('parcelType')}
                                value="document"
                                defaultChecked
                                className="w-4 h-4"
                            />
                            Document
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input 
                                type="radio" 
                                {...register('parcelType')}
                                value="non-document"
                                className="w-4 h-4"
                            />
                            Non-Document
                        </label>
                    </div>

                    {/* Parcel Name & Weight Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1">Parcel Name</label>
                            <input 
                                type="text" 
                                {...register('parcelName')}
                                placeholder="Parcel Name" 
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1">Parcel Weight (KG)</label>
                            <input 
                                type="number" 
                                step="any"
                                {...register('parcelWeight')}
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
                                    {...register('senderName')}
                                    defaultValue={user?.displayName}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Sender Email</label>
                                <input 
                                    type="email" 
                                    placeholder="Sender Email" 
                                    {...register('senderEmail')}
                                    defaultValue={user?.email}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Address</label>
                                <input 
                                    type="text" 
                                    placeholder="Address" 
                                    {...register('senderAddress')}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Sender Phone No</label>
                                <input 
                                    type="tel" 
                                    placeholder="Sender Phone No" 
                                    {...register('senderPhoneNo')}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Sender Region</label>
                                <select {...register('senderRegion')} className="select w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white" defaultValue="">
                                    <option value="" disabled>Pick a Region</option>
                                    {
                                        regions.map((r, i) => <option key={i} value={r}>{r}</option>)
                                    }
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Sender District</label>
                                <select {...register('senderDistrict')} className="select w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white" defaultValue="">
                                    <option value="" disabled>Pick a District</option>
                                    {
                                        districtByRegion(senderRegion).map((r, i) => <option key={i} value={r}>{r}</option>)
                                    }
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Pickup Instruction</label>
                                <textarea 
                                    rows="3"
                                    placeholder="Pickup Instruction" 
                                    {...register("pickupInstruction")}
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
                                    placeholder="Receiver Name" 
                                    {...register('receiverName')}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Receiver Email</label>
                                <input 
                                    type="email" 
                                    placeholder="Receiver Email" 
                                    {...register('receiverEmail')}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Receiver Address</label>
                                <input 
                                    type="text" 
                                    placeholder="Address" 
                                    {...register('receiverAddress')}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Receiver Phone No</label>
                                <input 
                                    type="tel" 
                                    placeholder="Receiver Phone No" 
                                    {...register('receiverPhoneNo')}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Receiver Region</label>
                                <select {...register('receiverRegion')} className="select w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white" defaultValue="">
                                    <option value="" disabled>Pick a Region</option>
                                    {
                                        regions.map((r, i) => <option key={i} value={r}>{r}</option>)
                                    }
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Receiver District</label>
                                <select {...register('receiverDistrict')} className="select w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white" defaultValue="">
                                    <option value="" disabled>Pick a District</option>
                                    {
                                        districtByRegion(receiverRegion).map((r, i) => <option key={i} value={r}>{r}</option>)
                                    }
                                </select>
                            </div>

                            <div>
                                <label className="block text-xs font-semibold text-gray-600 mb-1">Pickup Instruction</label>
                                <textarea 
                                    rows="3"
                                    placeholder="Pickup Instruction" 
                                    {...register("pickupInstructionReceiver")}
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