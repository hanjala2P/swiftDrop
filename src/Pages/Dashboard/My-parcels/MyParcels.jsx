import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/userAxiosSecure";

const MyParcels = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    
    const { data: parcels = [], isLoading } = useQuery({
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

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">All of my parcels : {parcels.length}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {
                    parcels.map((parcel) => (
                        <div key={parcel._id} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm space-y-2">
                            <h3 className="font-bold text-lg text-gray-800">{parcel.parcelName || "Untitled Parcel"}</h3>
                            <p className="text-sm text-gray-500">Type: <span className="capitalize">{parcel.parcelType}</span></p>
                            <p className="text-sm text-gray-500">Weight: {parcel.parcelWeight} KG</p>
                            <p className="text-sm font-semibold text-primary">Cost: {parcel.cost} TK</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default MyParcels;