import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext=createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  
    const [user,setUser]=useState([]);
    const [loading,setLoading]=useState(true);


    const emailRegister=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }
    
    const emailLogin=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }


    const providerLogin=(provider)=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const logOut=()=>{
        return signOut(auth);
    }


    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            console.log(currentUser);
            setLoading(false);
        })

        return ()=>unsubscribe();
    },[])


    

    const authInfo={user,setUser,emailLogin,emailRegister,providerLogin,logOut};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;