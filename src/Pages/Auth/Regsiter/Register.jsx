import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import Logo from '../../../Components/Logo/Logo'; 
import authImage from '../../../assets/others/authImage.png'; 
import { FiEye, FiEyeOff, FiUserPlus } from 'react-icons/fi';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import GoogleSignIn from '../SocialLogin/GoogleSign';
import axios from 'axios';
import useAxiosSecure from '../../../Hooks/userAxiosSecure';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [registerError, setRegisterError] = useState('');

    const { registerUser, updateUserProfile } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const axiosSecure =useAxiosSecure()
 
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleRegister = async (data) => {
        setLoading(true);
        setRegisterError('');

        try {
            let photoURL = "";
            const profileImg = data.photo?.[0]; // Safe check if photo exists
       
            // Upload Image to ImgBB if provided
            if (profileImg) {
                const formData = new FormData();
                formData.append('image', profileImg); 
                
                const imgAPIURL = `https://api.imgbb.com/1/upload?expiration=600&key=${import.meta.env.VITE_IMAGE_HOST_KEY}`;
                
                const res = await axios.post(imgAPIURL, formData);
                
                if (res?.data?.success) {
                    photoURL = res.data.data.url;
                    console.log("Image Uploaded URL:", photoURL);
                }
            }

            // Register User in Firebase
            const result = await registerUser(data.email, data.password);
            console.log("Firebase User:", result.user);

            // CREATE USER PROFILE IN DB
            const userInfo={
                email:data.email,
                displayName:data.name,
                photoURL: photoURL
            }
            axiosSecure.post('/users',userInfo).then( res =>{
                if(res.data.insertedId){
                    console.log('user created in the databse')
                }
            })

            // Update User Profile
            const userProfile = {
                displayName: data.name,
                photoURL: photoURL
            };

            await updateUserProfile(userProfile);
            console.log("User profile updated successfully");
            navigate(location?.state || '/');

        } catch (error) {
            console.error("Registration or Upload Error:", error.response?.data || error.message);
            setRegisterError(error.response?.data?.error?.message || error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-white">
            
            {/* Left Side: Register Form (6 Columns) */}
            <div className="lg:col-span-6 px-6 sm:px-12 lg:px-20 py-10 flex flex-col justify-between">
                
                {/* Top Logo Component */}
                <div>
                    <Link to="/" className="inline-block">
                        <Logo />
                    </Link>
                </div>

                {/* Form Container */}
                <div className="max-w-md w-full mx-auto my-auto py-6">
                    <div className="mb-6">
                        <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B1E1B] mb-2">
                            Create an Account
                        </h1>
                        <p className="text-gray-500 text-sm font-body">
                            Register with ZapShift
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
                        
                        {/* Profile Picture Upload Avatar Option */}
                        <div className="mb-2">
                            <label className="block text-xs font-semibold text-gray-600 mb-1">
                                Profile Photo <span className="text-gray-400 font-normal">(Optional)</span>
                            </label>
                            <div className="flex items-center gap-4">
                                <div className="relative w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center border-2 border-dashed border-gray-300 overflow-hidden group cursor-pointer">
                                    <FiUserPlus className="text-xl text-gray-400 group-hover:text-gray-600" />
                                    <input 
                                        type="file" 
                                        accept="image/*"
                                        {...register('photo')} 
                                        className="absolute inset-0 opacity-0 cursor-pointer"
                                        title="Upload Profile Picture"
                                    />
                                </div>
                                <div className="text-xs text-gray-500 font-medium">
                                    <span>Upload Profile Photo</span>
                                    <p className="text-[10px] text-gray-400">JPG, PNG format</p>
                                </div>
                            </div>
                        </div>

                        {/* Name Field */}
                        <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1">Name</label>
                            <input 
                                type="text" 
                                {...register('name', { required: true })}
                                placeholder="Name" 
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white"
                            />
                            {errors.name && <p className='text-red-600 text-xs mt-1'>Name is required</p>}
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1">Email</label>
                            <input 
                                type="email" 
                                {...register('email', { required: true })}
                                placeholder="Email" 
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white"
                            />
                            {errors.email && <p className='text-red-600 text-xs mt-1'>Email is required</p>}
                        </div>

                        {/* Password Field with Toggle Icon */}
                        <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1">Password</label>
                            <div className="relative">
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    placeholder="Password" 
                                    {...register('password', { 
                                        required: true, 
                                        minLength: 8, 
                                        pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/ 
                                    })}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white pr-10"
                                />
                                <button 
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
                                >
                                    {showPassword ? <FiEyeOff className="text-lg" /> : <FiEye className="text-lg" />}
                                </button>
                            </div>
                            {errors.password?.type === 'required' && <p className='text-red-600 text-xs mt-1'>Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className='text-red-600 text-xs mt-1'>Password min length 8 characters</p>}
                            {errors.password?.type === 'pattern' && <p className='text-red-600 text-xs mt-1'>Password must include uppercase, lowercase & number.</p>}
                        </div>

                        {/* Register Error Message */}
                        {registerError && (
                            <div className="bg-red-50 border border-red-200 text-red-600 text-xs p-3 rounded-xl">
                                {registerError}
                            </div>
                        )}

                        {/* Register Button */}
                        <button 
                            type="submit" 
                            disabled={loading}
                            className="w-full py-3.5 bg-[#D4ED31] hover:bg-[#c3db26] disabled:opacity-60 text-[#0B1E1B] font-heading font-semibold rounded-xl transition-all shadow-sm cursor-pointer mt-2"
                        >
                            {loading ? 'Creating Account...' : 'Register'}
                        </button>

                        {/* Already have an account Login Link */}
                        <p className="text-center text-xs text-gray-500 pt-1">
                            Already have an account? <Link to="/login" className="text-[#0B1E1B] font-bold hover:underline">Login</Link>
                        </p>

                        <div className="relative flex py-2 items-center">
                            <div className="flex-grow border-t border-gray-200"></div>
                            <span className="flex-shrink mx-4 text-gray-400 text-xs">Or</span>
                            <div className="flex-grow border-t border-gray-200"></div>
                        </div>

                        {/* Google Register Button */}
                        <GoogleSignIn />

                    </form>
                </div>

                <div></div>
            </div>

            {/* Right Side: Image / Illustration Area (6 Columns) */}
            <div className="hidden lg:col-span-6 bg-[#F8F9FA] lg:flex items-center justify-center p-12 border-l border-gray-100">
                <div className="max-w-lg w-full">
                    <img src={authImage} alt="Register Illustration" className="w-full h-auto object-contain" />
                </div>
            </div>

        </section>
    );
};

export default Register;