import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../../Hooks/useAuth';
import { useLocation, useNavigate } from 'react-router';

const GoogleSignIn = () => {
    const {googleSignIn} =useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const handleGoogleLogin =()=>{
        googleSignIn()
        .then(result =>{
            console.log(result.user)
            navigate(location?.state || '/')
        })
        .catch(error=>{console.log(error)})
    }
    return (
        <div>
             <button 
                                        type="button" 
                                        onClick={handleGoogleLogin}
                                        className="w-full py-3 px-4 rounded-xl border border-gray-200 bg-gray-50/50 hover:bg-gray-100 text-gray-700 font-medium text-sm flex items-center justify-center gap-3 transition-all cursor-pointer shadow-sm"
                                    >
                                        <FcGoogle className="text-xl" />
                                        Login with google
                                    </button>
        </div>
    );
};

export default GoogleSignIn;