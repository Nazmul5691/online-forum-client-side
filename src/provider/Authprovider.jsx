/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";


export const AuthContext = createContext(null);
const auth = getAuth(app)


const AuthProvider = ({children}) => {


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const axiosPublic = useAxiosPublic();

   

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, GoogleAuthProvider);
      };

    const updateUserProfile = (name, photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

   
    

    // useEffect( () =>{
    //     const unSubscribe =  onAuthStateChanged(auth, createUser =>{
    //         console.log('user in the auth state changed', createUser);
    //         setUser(createUser)
    //         setLoading(false)
    //     })
    //     return () =>{
    //         unSubscribe();
    //     }
    // },[])


    useEffect( () => {
        const unsubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            // console.log('current user', currentUser);
            if(currentUser){
                //get token and store client
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                .then(res =>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token);
                    }
                })
            }
            else{
                localStorage.removeItem('access-token')
            }
            setLoading(false);
        })  
        return () =>{
            return unsubscribe();
        }
    },[axiosPublic])




    const authInfo = {
        user,
        loading,
        createUser,
        login,
        logOut,
        googleSignIn,
        updateUserProfile
        

    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;