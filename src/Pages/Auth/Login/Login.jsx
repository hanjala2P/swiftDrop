
import { Link, useLocation, useNavigate } from 'react-router';
import authImage from '../../../assets/others/authImage.png'; 
import { FiEye, FiEyeOff } from 'react-icons/fi';

import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import Logo from '../../../Components/Logo/Logo';
import GoogleSignIn from '../SocialLogin/GoogleSign';
import { useState } from 'react';

const Login = () => {
   const {signInUser}=useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const {register,handleSubmit,formState:{errors}}=useForm();
    const location=useLocation();
    const navigate = useNavigate();


    // Handle Login Submit Logic
    const handleLogin = (data) => {
      console.log(data)
      signInUser(data.email, data.password)
      .then(result=>{
        console.log(result)
        navigate(location?.state || '/')
      }).catch(error=> {
        console.log(error)
      })

    };

    return (
        <section className="min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-white">
            
            {/* Left Side: Login Form (6 Columns) */}
            <div className="lg:col-span-6 px-6 sm:px-12 lg:px-20 py-10 flex flex-col justify-between">
                
                {/* Top Logo */}
                <div>
                    <Link to="/" className="inline-block">
                    <Logo></Logo>
                    </Link>
                </div>

                {/* Form Container */}
                <div className="max-w-md w-full mx-auto my-auto py-8">
                    <div className="mb-8">
                        <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#0B1E1B] mb-2">
                            Welcome Back
                        </h1>
                        <p className="text-gray-500 text-sm font-body">
                            Login with Swift Drop
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(handleLogin)} className="space-y-5">
                        
                        {/* Email Field */}
                        <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1">Email</label>
                            <input 
                                type="email" 
                                {...register('email',{required:true})}
                                
                                placeholder="Email" 
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0B1E1B] focus:outline-none text-sm text-gray-700 bg-white"
                                required
                            />
                            {
                                errors.email?.type ==='required' && <p> Email is required</p>
                            }
                        </div>

                        {/* Password Field with Toggle Icon */}
                        <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1">Password</label>
                            <div className="relative">
                                <input 
                                    type={showPassword ? "text" : "password"} 
                                    {...register('password',{required:true , minLength:8})}
                                    placeholder="Password" 
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
                        </div>

                       {errors.password?.type === 'required' && <p className='text-red-600'>Password must be 8 charecters or longer</p>}

                        {/* Forgot Password */}
                        <div className="text-left">
                            <Link to="/forgot-password" className="text-xs font-medium text-gray-500 hover:text-[#0B1E1B] underline">
                                Forget Password?
                            </Link>
                        </div>

                        {/* Login Button */}
                        <button 
                            type="submit" 
                            className="w-full py-3.5 bg-[#D4ED31] hover:bg-[#c3db26] text-[#0B1E1B] font-heading font-semibold rounded-xl transition-all shadow-sm cursor-pointer"
                        >
                            Login
                        </button>

                        {/* Register Link */}
                        <p className="text-center text-xs text-gray-500">
                            Don’t have any account? <Link state={location.state} to="/register" className="text-[#0B1E1B] font-bold hover:underline">Register</Link>
                        </p>

                        <div className="relative flex py-2 items-center">
                            <div className="flex-grow border-t border-gray-200"></div>
                            <span className="flex-shrink mx-4 text-gray-400 text-xs">Or</span>
                            <div className="flex-grow border-t border-gray-200"></div>
                        </div>

                        {/* Google Login Button */}
                     <GoogleSignIn></GoogleSignIn>

                    </form>
                </div>

                <div></div>
            </div>

            {/* Right Side: Image / Illustration Area (6 Columns) */}
            <div className="hidden lg:col-span-6 bg-[#F8F9FA] lg:flex items-center justify-center p-12 border-l border-gray-100">
                <div className="max-w-lg w-full">
                 
                    <img 
                        src={authImage}
                        alt="Login Illustration" 
                        className="w-full h-auto object-contain"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                        }}
                    />
                    
                    {/* Fallback Box if image path is missing */}
                    <div className="hidden w-full h-96 bg-emerald-50/40 rounded-3xl border-2 border-dashed border-emerald-200 flex-col items-center justify-center text-emerald-700 p-6 text-center">
                        <span className="text-sm font-semibold">Login Illustration Area</span>
                        <span className="text-xs text-emerald-600 mt-1">(Replace with your image path)</span>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Login;