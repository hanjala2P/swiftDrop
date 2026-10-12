import { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.init';
 const googleProvider =new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)


     const registerUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
     }
     const signInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
     }

     const googleSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
     }
     const logOut =()=>{
        setLoading(true)
       return signOut(auth)
     }

     const updateUserProfile =(profile)=>{
        setLoading(true)
        return updateProfile(auth.currentUser, profile)
     }
    // observer
     useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{unsubscribe()}
     },[])


    const authInfo ={
        registerUser,
        signInUser,
        googleSignIn,
        user,
        loading,
        logOut,
        updateUserProfile

    }
    return (
       <AuthContext value={authInfo}>
            {
                children
            }
       </AuthContext>
    );
};

export default AuthProvider;