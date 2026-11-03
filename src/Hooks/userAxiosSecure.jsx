import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true
});

const useAxiosSecure = () => {
    const { user, logOut } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        // Request Interceptor: Attach Token
        const reqInterceptor = axiosSecure.interceptors.request.use((config) => {
            if (user?.accessToken) {
                config.headers.Authorization = `Bearer ${user.accessToken}`;
            }
            return config;
        }, (error) => {
            return Promise.reject(error);
        });

        // Response Interceptor: Handle 401 & 403
        const resInterceptor = axiosSecure.interceptors.response.use((response) => {
            return response;
        }, async (error) => {
            const statusCode = error.response?.status; // Fixed from error.status to error.response?.status

            if (statusCode === 401 || statusCode === 403) {
                try {
                    await logOut();
                    navigate('/login');
                } catch (err) {
                    console.error("Logout error during interceptor:", err);
                }
            }
            return Promise.reject(error);
        });

        // Cleanup Interceptors
        return () => {
            axiosSecure.interceptors.request.eject(reqInterceptor);
            axiosSecure.interceptors.response.eject(resInterceptor);
        };
    }, [user, logOut, navigate]);

    return axiosSecure;
};

export default useAxiosSecure;