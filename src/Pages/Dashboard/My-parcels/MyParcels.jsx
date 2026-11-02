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
        return <div className="text-center py-10 font-medium">Loading your parcels...</div>;
    }

    const handleParcelDlt = (id) => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#D4ED31",
            cancelButtonColor: "#0B1E1B",
            confirmButtonText: "Yes, delete it!",
            customClass: {
                confirmButton: 'custom-confirm-btn'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/parcels/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your parcel has been deleted.",
                                icon: "success",
                                confirmButtonColor: "#D4ED31",
                                customClass: {
                                    confirmButton: 'custom-confirm-btn'
                                }
                            });
                        }
                    });
            }
        });
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">All of my parcels</h2>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    Total: {parcels.length}
                </span>
            </div>
            
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 text-gray-600 text-sm">
                                <th className="p-4 font-semibold">#</th>
                                <th className="p-4 font-semibold">Parcel Name</th>
                                <th className="p-4 font-semibold">Type</th>
                                <th className="p-4 font-semibold">Weight</th>
                                <th className="p-4 font-semibold">Cost</th>
                                <th className="p-4 font-semibold">Date</th>
                                <th className="p-4 font-semibold">Payment Status</th>
                                <th className="p-4 font-semibold">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-sm">
                            {
                                parcels.map((parcel, index) => (
                                    <tr key={parcel._id} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="p-4 text-gray-500 font-medium">{index + 1}</td>
                                        <td className="p-4 font-bold text-gray-800">{parcel.parcelName || "Untitled Parcel"}</td>
                                        <td className="p-4 text-gray-600 capitalize">{parcel.parcelType}</td>
                                        <td className="p-4 text-gray-600">{parcel.parcelWeight} KG</td>
                                        <td className="p-4 font-semibold text-primary">{parcel.cost || 0} TK</td>
                                        <td className="p-4 text-gray-500">
                                            {parcel.createdAt ? new Date(parcel.createdAt).toLocaleDateString('en-GB', {
                                                day: 'numeric',
                                                month: 'short',
                                                year: 'numeric'
                                            }) : 'N/A'}
                                        </td>
                                    <td className="p-4">
                                            {
                                                parcel.paymentStatus === 'paid' ?
                                                    <span className="text-green-600 font-medium">paid</span>
                                                :
                                                <Link to={`/dashboard/payment/${parcel._id}`}>
                                                    <button className="border-none btn text-secondary btn-primary">Pay</button>
                                                </Link>
                                            }
                                        </td>
                                        <td className="p-4 space-x-1">
                                            <button className="p-3 text-gray-600 hover:bg-primary/20 rounded"><FaSearch /></button>
                                            <button className="p-3 text-gray-600 hover:bg-primary/20 rounded"><FaEdit /></button>
                                            <button onClick={() => handleParcelDlt(parcel._id)} className="p-3 text-gray-600 hover:bg-red-100 hover:text-red-600 rounded"><FaTrashCan /></button>
                                        </td>
                                    </tr>
                                ))
                            }
                            {parcels.length === 0 && (
                                <tr>
                                    <td colSpan="8" className="text-center py-8 text-gray-400">
                                        No parcels found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyParcels;