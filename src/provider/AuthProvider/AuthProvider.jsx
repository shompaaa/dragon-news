import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../../firebase/firebase.config";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading] = useState(true)

 
  //Register User
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Get Current User
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  //Sign In User
  const loginUser = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  const updateUser = (updatedData)=>{
    return updateProfile(auth.currentUser, updatedData)
  }

  //Signout User
  const signOutUser = ()=>{
    return signOut(auth)
  }

  const authInfo = {
    user,
    setUser,
    createUser,
    loginUser,
    signOutUser,
    loading,
    setLoading,
    updateUser
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
