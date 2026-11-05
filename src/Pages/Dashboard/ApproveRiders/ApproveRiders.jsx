import { useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/userAxiosSecure";
import { FaCheck, FaEye, FaUser, FaEnvelope, FaPhone, FaCalendarAlt, FaShieldAlt } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";

const ApproveRiders = () => {
    const axiosSecure = useAxiosSecure();
    const queryClient = useQueryClient();

    // Fetch riders
    const {
        data: riders = [],
        isLoading,
        isError,
        error,
        refetch,
    } = useQuery({
        queryKey: ["riders"],
        queryFn: async () => {
            const res = await axiosSecure.get("/riders");
            return res.data;
        },
    });

    // Common function to update rider status (video-style)
    const updateRiderStatus = (rider, status) => {
        const updateInfo = { status: status, email: rider.email };
        axiosSecure.patch(`/riders/${rider._id}`, updateInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        icon: "success",
                        title: `Rider status is set to ${status}.`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(err => {
                console.error(err);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            });
    };

    // Handle View Click with a beautifully redesigned modal
    const handleView = (rider) => {
        const statusColor = 
            rider.status === 'approved' ? 'bg-emerald-50 text-emerald-600 border-emerald-200' : 
            rider.status === 'rejected' ? 'bg-red-50 text-red-600 border-red-200' : 
            'bg-amber-50 text-amber-600 border-amber-200';

        Swal.fire({
            title: `<div style="display: flex; align-items: center; gap: 10px; border-bottom: 2px solid #F1F5F9; padding-bottom: 12px; text-align: left;">
                        <div style="background: #0B1E1B; color: white; padding: 10px; border-radius: 12px; display: flex; align-items: center; justify-content: center;">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 400H48V80h480v352zM224 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm136 125.8c0-32.7-26.8-59.8-59.8-59.8H147.8c-33 0-59.8 27.1-59.8 59.8v5.2h272v-5.2z"></path></svg>
                        </div>
                        <div>
                            <span style="font-size: 18px; font-weight: 700; color: #0F172A; display: block;">Rider Profile</span>
                            <span style="font-size: 12px; font-weight: 400; color: #64748B;">Detailed application information</span>
                        </div>
                    </div>`,
            html: `
                <div style="text-align: left; font-size: 14px; margin-top: 15px; display: flex; flex-direction: column; gap: 12px;">
                    
                    <div style="display: flex; align-items: center; justify-content: space-between; background: #F8FAFC; padding: 12px 16px; border-radius: 12px; border: 1px solid #E2E8F0;">
                        <span style="color: #64748B; font-weight: 500; font-size: 13px;">Full Name</span>
                        <span style="color: #0F172A; font-weight: 700;">${rider.name || "N/A"}</span>
                    </div>

                    <div style="display: flex; align-items: center; justify-content: space-between; background: #F8FAFC; padding: 12px 16px; border-radius: 12px; border: 1px solid #E2E8F0;">
                        <span style="color: #64748B; font-weight: 500; font-size: 13px;">Email Address</span>
                        <span style="color: #0F172A; font-weight: 600; word-break: break-all;">${rider.email}</span>
                    </div>

                    <div style="display: flex; align-items: center; justify-content: space-between; background: #F8FAFC; padding: 12px 16px; border-radius: 12px; border: 1px solid #E2E8F0;">
                        <span style="color: #64748B; font-weight: 500; font-size: 13px;">Phone Number</span>
                        <span style="color: #0F172A; font-weight: 600;">${rider.phone || "N/A"}</span>
                    </div>

                    <div style="display: flex; align-items: center; justify-content: space-between; background: #F8FAFC; padding: 12px 16px; border-radius: 12px; border: 1px solid #E2E8F0;">
                        <span style="color: #64748B; font-weight: 500; font-size: 13px;">Application Status</span>
                        <span style="text-transform: uppercase; font-size: 11px; font-weight: 800; padding: 4px 10px; border-radius: 9999px; border: 1px solid;" class="${statusColor}">${rider.status}</span>
                    </div>

                    <div style="display: flex; align-items: center; justify-content: space-between; background: #F8FAFC; padding: 12px 16px; border-radius: 12px; border: 1px solid #E2E8F0;">
                        <span style="color: #64748B; font-weight: 500; font-size: 13px;">Applied On</span>
                        <span style="color: #334155; font-weight: 600; font-size: 13px;">${rider.createdAt ? new Date(rider.createdAt).toLocaleString() : "N/A"}</span>
                    </div>

                </div>
            `,
            showCloseButton: true,
            confirmButtonText: "Close Details",
            confirmButtonColor: "#0B1E1B",
            buttonsStyling: true,
            customClass: {
                popup: 'rounded-3xl shadow-2xl border border-gray-100 p-6',
                confirmButton: 'rounded-xl px-6 py-2.5 font-bold text-xs tracking-wide shadow-md hover:opacity-90 transition-all cursor-pointer'
            },
            showClass: {
                popup: 'animate__animated animate__fadeInDown animate__faster'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp animate__faster'
            }
        });
    };

    // Handle Approve Click
    const handleApprove = async (rider) => {
        const result = await Swal.fire({
            title: "Approve Rider?",
            text: "Do you want to approve this rider?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#10B981",
            cancelButtonColor: "#0B1E1B",
            confirmButtonText: "Yes, approve!",
        });

        if (result.isConfirmed) {
            updateRiderStatus(rider, "approved");
        }
    };

    // Handle Reject Click
    const handleReject = async (rider) => {
        const result = await Swal.fire({
            title: "Reject Rider?",
            text: "This rider will be marked as rejected.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#DC2626",
            cancelButtonColor: "#0B1E1B",
            confirmButtonText: "Yes, reject!",
        });

        if (result.isConfirmed) {
            updateRiderStatus(rider, "rejected");
        }
    };

    // Loading state
    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-[60vh]">
                <div className="flex flex-col items-center gap-3 text-center">
                    <span className="loading loading-spinner loading-lg text-primary"></span>
                    <p className="text-gray-500 font-medium text-sm">
                        Loading riders...
                    </p>
                </div>
            </div>
        );
    }

    // Error state
    if (isError) {
        return (
            <div className="flex justify-center items-center min-h-[50vh]">
                <div className="text-center">
                    <p className="text-red-500 font-semibold">
                        Failed to load riders.
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                        {error?.message || "Something went wrong."}
                    </p>
                </div>
            </div>
        );
    }

    // Date formatting
    const formatDate = (date) => {
        if (!date) return "N/A";
        return new Date(date).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });
    };

    const formatTime = (date) => {
        if (!date) return "";
        return new Date(date).toLocaleTimeString("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        });
    };

    // Status styling
    const getStatusClass = (status) => {
        const classes = {
            approved: "bg-emerald-50 text-emerald-600 border-emerald-100",
            pending: "bg-amber-50 text-amber-600 border-amber-100",
            rejected: "bg-red-50 text-red-600 border-red-100",
        };
        return classes[status] || "bg-gray-50 text-gray-600 border-gray-100";
    };

    return (
        <div className="p-3 sm:p-6 w-full max-w-full overflow-hidden">
            <style>{`
                @keyframes slideInFromLeft {
                    0% {
                        opacity: 0;
                        transform: translateX(-30px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                .animate-slide-in {
                    animation: slideInFromLeft 0.4s ease-out forwards;
                }
            `}</style>

            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                    <h2 className="text-xl md:text-2xl font-bold font-heading text-gray-900">
                        Approve Riders
                    </h2>
                    <p className="text-xs md:text-sm text-gray-500 mt-0.5">
                        Manage rider requests and applications seamlessly.
                    </p>
                </div>
                <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-xl text-xs md:text-sm font-bold shadow-xs">
                    Total Riders: {riders.length}
                </span>
            </div>

            {/* Mobile Cards */}
            <div className="grid grid-cols-1 gap-4 md:hidden">
                {riders.map((rider, index) => (
                    <div
                        key={rider._id}
                        className="bg-white p-4 rounded-2xl border border-gray-100 shadow-xs space-y-3 animate-slide-in opacity-0"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="flex justify-between items-start">
                            <div>
                                <span className="text-xs text-gray-400 font-medium">
                                    #{index + 1}
                                </span>
                                <h3 className="font-bold text-gray-900 text-base">
                                    {rider.name || "N/A"}
                                </h3>
                            </div>
                            <span className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase border ${getStatusClass(rider.status)}`}>
                                {rider.status}
                            </span>
                        </div>

                        <div className="grid grid-cols-1 gap-2 text-xs text-gray-600 bg-gray-50/80 p-3 rounded-xl">
                            <div>
                                <span className="text-gray-400 block font-medium">Email</span>
                                <span className="font-semibold text-gray-800 break-all">
                                    {rider.email}
                                </span>
                            </div>
                            <div>
                                <span className="text-gray-400 block font-medium">Phone</span>
                                <span className="font-bold text-gray-900">
                                    {rider.phone || "N/A"}
                                </span>
                            </div>
                            <div className="mt-1 pt-1 border-t border-gray-200/60">
                                <span className="text-gray-400 block font-medium">Applied Date</span>
                                <p className="font-semibold text-gray-700">
                                    {formatDate(rider.createdAt)}
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex justify-end items-center pt-2 border-t border-gray-100 gap-2">
                            <button
                                onClick={() => handleView(rider)}
                                className="btn btn-xs bg-[#0B1E1B] hover:bg-[#13322d] border-none text-white font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 cursor-pointer"
                            >
                                <FaEye className="w-3 h-3" />
                                View
                            </button>
                            
                            <button
                                onClick={() => handleApprove(rider)}
                                disabled={rider.status !== "pending"}
                                className={`btn btn-xs border-none text-white font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 ${
                                    rider.status !== "pending"
                                        ? "bg-gray-300 cursor-not-allowed"
                                        : "bg-emerald-500 hover:bg-emerald-600 cursor-pointer"
                                }`}
                            >
                                <FaCheck className="w-3 h-3" />
                                {rider.status === "approved" ? "Approved" : "Approve"}
                            </button>

                            <button
                                onClick={() => handleReject(rider)}
                                disabled={rider.status !== "pending"}
                                className="btn btn-xs bg-red-500 hover:bg-red-600 border-none text-white font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 cursor-pointer disabled:bg-gray-300"
                            >
                                <FaTrashCan className="w-3 h-3" />
                                Reject
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Desktop Table */}
            <div className="hidden md:block bg-white rounded-2xl border border-gray-100 shadow-xs w-full overflow-hidden">
                <div className="w-full overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-[700px]">
                        <thead>
                            <tr className="bg-gray-50/80 border-b border-gray-100 text-gray-500 text-xs font-bold uppercase tracking-wider">
                                <th className="py-3 px-4 w-12">#</th>
                                <th className="py-3 px-4">Name</th>
                                <th className="py-3 px-4">Email</th>
                                <th className="py-3 px-4">Phone</th>
                                <th className="py-3 px-4">Status</th>
                                <th className="py-3 px-4">Applied Date</th>
                                <th className="py-3 px-4 text-center">Action</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-100 text-sm">
                            {riders.map((rider, index) => (
                                <tr
                                    key={rider._id}
                                    className="hover:bg-gray-50/60 transition-colors group animate-slide-in opacity-0"
                                    style={{ animationDelay: `${index * 0.08}s` }}
                                >
                                    <td className="py-3.5 px-4 text-gray-400 font-semibold">
                                        {index + 1}
                                    </td>
                                    <td className="py-3.5 px-4 font-bold text-gray-800">
                                        {rider.name || "N/A"}
                                    </td>
                                    <td className="py-3.5 px-4 font-medium text-gray-600">
                                        {rider.email}
                                    </td>
                                    <td className="py-3.5 px-4 font-medium text-gray-600">
                                        {rider.phone || "N/A"}
                                    </td>
                                    <td className="py-3.5 px-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold uppercase border ${getStatusClass(rider.status)}`}>
                                            {rider.status}
                                        </span>
                                    </td>
                                    <td className="py-3.5 px-4 text-xs whitespace-nowrap">
                                        {rider.createdAt ? (
                                            <div className="flex flex-col">
                                                <span className="font-semibold text-gray-700">
                                                    {formatDate(rider.createdAt)}
                                                </span>
                                                <span className="text-[11px] text-gray-400 font-medium">
                                                    {formatTime(rider.createdAt)}
                                                </span>
                                            </div>
                                        ) : (
                                            <span className="text-gray-400">N/A</span>
                                        )}
                                    </td>
                                    <td className="py-3.5 px-4">
                                        <div className="flex items-center justify-center gap-2">
                                            <button
                                                onClick={() => handleView(rider)}
                                                title="View Rider Details"
                                                className="btn btn-sm bg-[#0B1E1B] hover:bg-[#13322d] border-none text-white font-bold px-3 rounded-xl shadow-xs flex items-center gap-1 text-xs h-8 min-h-0 cursor-pointer"
                                            >
                                                <FaEye className="w-3 h-3" />
                                                View
                                            </button>

                                            <button
                                                onClick={() => handleApprove(rider)}
                                                disabled={rider.status !== "pending"}
                                                title="Approve Rider"
                                                className={`btn btn-sm border-none text-white font-bold px-3 rounded-xl shadow-xs flex items-center gap-1 text-xs h-8 min-h-0 ${
                                                    rider.status !== "pending"
                                                        ? "bg-gray-300 cursor-not-allowed opacity-70"
                                                        : "bg-emerald-500 hover:bg-emerald-600 cursor-pointer"
                                                }`}
                                            >
                                                <FaCheck className="w-3 h-3" />
                                                {rider.status === "approved" ? "Approved" : "Approve"}
                                            </button>

                                            <button
                                                onClick={() => handleReject(rider)}
                                                disabled={rider.status !== "pending"}
                                                title="Reject Rider"
                                                className="code btn btn-sm bg-red-500 hover:bg-red-600 border-none text-white font-bold px-3 rounded-xl shadow-xs flex items-center gap-1 cursor-pointer text-xs h-8 min-h-0 disabled:bg-gray-300"
                                            >
                                                <FaTrashCan className="w-3 h-3" />
                                                Reject
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Empty State */}
            {riders.length === 0 && (
                <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center text-gray-400 mt-4 shadow-xs">
                    <p className="text-base font-semibold text-gray-600">
                        No riders found.
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                        There are no riders available yet.
                    </p>
                </div>
            )}
        </div>
    );
};

export class ApproveRidersContainer {}

export default ApproveRiders;