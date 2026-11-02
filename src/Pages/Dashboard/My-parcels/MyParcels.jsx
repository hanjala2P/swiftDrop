import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/userAxiosSecure";
import { FaEdit, FaSearch } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";
import { Link } from "react-router";

const MyParcels = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    
    const { data: parcels = [], isLoading, refetch } = useQuery({
        queryKey: ['myParcels', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
            return res.data;
        },
        enabled: !!user?.email 
    });

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-[60vh]">
                <div className="flex flex-col items-center gap-3">
                    <span className="loading loading-spinner loading-lg text-primary"></span>
                    <p className="text-gray-500 font-medium text-sm">Loading your parcels...</p>
                </div>
            </div>
        );
    }

    const handleParcelDlt = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#CAEB66",
            cancelButtonColor: "#0B1E1B",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/parcels/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your parcel has been deleted.",
                                icon: "success",
                                confirmButtonColor: "#CAEB66",
                            });
                        }
                    });
            }
        });
    };

    return (
        <div className="p-4 md:p-6 lg:p-2 max-w-1xl mx-auto">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                    <h2 className="text-xl md:text-2xl font-bold font-heading text-gray-900">
                        All of my parcels
                    </h2>
                    <p className="text-xs md:text-sm text-gray-500 mt-0.5">
                        Manage and track your delivery history seamlessly.
                    </p>
                </div>
                <span className="bg-[var(--color-primary-light)] text-[var(--color-dark-text)] px-3.5 py-1.5 rounded-xl text-xs md:text-sm font-bold shadow-xs">
                    Total Parcels: {parcels.length}
                </span>
            </div>
            
            {/* ================= MOBILE VIEW (CARDS) ================= */}
            <div className="grid grid-cols-1 gap-4 md:hidden">
                {parcels.map((parcel, index) => (
                    <div key={parcel._id} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-xs space-y-3">
                        <div className="flex justify-between items-start">
                            <div>
                                <span className="text-xs text-gray-400 font-medium">#{index + 1}</span>
                                <h3 className="font-bold text-gray-900 text-base">{parcel.parcelName || "Untitled Parcel"}</h3>
                            </div>
                            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 capitalize">
                                {parcel.parcelType}
                            </span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-xs text-gray-600 bg-gray-50 p-3 rounded-xl">
                            <div>
                                <span className="text-gray-400 block">Weight:</span>
                                <span className="font-semibold text-gray-800">{parcel.parcelWeight} KG</span>
                            </div>
                            <div>
                                <span className="text-gray-400 block">Cost:</span>
                                <span className="font-semibold text-gray-900">{parcel.cost || 0} TK</span>
                            </div>
                            <div className="col-span-2 mt-1">
                                <span className="text-gray-400 block">Date:</span>
                                <span className="font-medium text-gray-700">
                                    {parcel.createdAt ? new Date(parcel.createdAt).toLocaleDateString('en-GB', {
                                        day: 'numeric', month: 'short', year: 'numeric'
                                    }) : 'N/A'}
                                </span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                            <div>
                                {parcel.paymentStatus === 'paid' ? (
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-600 border border-emerald-100">
                                        Paid
                                    </span>
                                ) : (
                                    <Link to={`/dashboard/payment/${parcel._id}`}>
                                        <button className="btn btn-xs bg-primary hover:bg-primary/80 border-none text-[var(--color-dark-text)] font-bold px-3 rounded-lg">
                                            Pay Now
                                        </button>
                                    </Link>
                                )}
                            </div>

                            <div className="flex items-center gap-1">
                                <button className="p-2 text-gray-500 hover:text-primary hover:bg-gray-100 rounded-lg">
                                    <FaSearch className="w-3.5 h-3.5" />
                                </button>
                                <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg">
                                    <FaEdit className="w-3.5 h-3.5" />
                                </button>
                                <button onClick={() => handleParcelDlt(parcel._id)} className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg">
                                    <FaTrashCan className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* ================= DESKTOP & TABLET VIEW (TABLE) ================= */}
            <div className="hidden md:block bg-white rounded-2xl border border-gray-100 shadow-xs overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50/70 border-b border-gray-100 text-gray-500 text-xs font-semibold uppercase tracking-wider">
                                <th className="p-4">#</th>
                                <th className="p-4">Parcel Name</th>
                                <th className="p-4">Type</th>
                                <th className="p-4">Weight</th>
                                <th className="p-4">Cost</th>
                                <th className="p-4">Date</th>
                                <th className="p-4">Payment Status</th>
                                <th className="p-4 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-sm">
                            {
                                parcels.map((parcel, index) => (
                                    <tr key={parcel._id} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="p-4 text-gray-400 font-medium">{index + 1}</td>
                                        <td className="p-4 font-bold text-gray-800">{parcel.parcelName || "Untitled Parcel"}</td>
                                        <td className="p-4">
                                            <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 capitalize">
                                                {parcel.parcelType}
                                            </span>
                                        </td>
                                        <td className="p-4 text-gray-600">{parcel.parcelWeight} KG</td>
                                        <td className="p-4 font-semibold text-gray-900">{parcel.cost || 0} TK</td>
                                        <td className="p-4 text-gray-500 text-xs">
                                            {parcel.createdAt ? new Date(parcel.createdAt).toLocaleDateString('en-GB', {
                                                day: 'numeric',
                                                month: 'short',
                                                year: 'numeric'
                                            }) : 'N/A'}
                                        </td>
                                        <td className="p-4">
                                            {
                                                parcel.paymentStatus === 'paid' ?
                                                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-600 border border-emerald-100">
                                                        Paid
                                                    </span>
                                                :
                                                <Link to={`/dashboard/payment/${parcel._id}`}>
                                                    <button className="btn btn-sm bg-primary hover:bg-primary/80 border-none text-[var(--color-dark-text)] font-bold px-4 rounded-xl">
                                                        Pay Now
                                                    </button>
                                                </Link>
                                            }
                                        </td>
                                        <td className="p-4">
                                            <div className="flex items-center justify-center gap-1">
                                                <button title="View" className="p-2 text-gray-500 hover:text-primary hover:bg-gray-100 rounded-xl transition-all cursor-pointer">
                                                    <FaSearch className="w-4 h-4" />
                                                </button>
                                                <button title="Edit" className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all cursor-pointer">
                                                    <FaEdit className="w-4 h-4" />
                                                </button>
                                                <button onClick={() => handleParcelDlt(parcel._id)} title="Delete" className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all cursor-pointer">
                                                    <FaTrashCan className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            {parcels.length === 0 && (
                <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center text-gray-400 mt-4">
                    <p className="text-base font-medium">No parcels found.</p>
                    <p className="text-xs text-gray-400 mt-1">You haven't booked any shipments yet.</p>
                </div>
            )}
        </div>
    );
};

export default MyParcels;