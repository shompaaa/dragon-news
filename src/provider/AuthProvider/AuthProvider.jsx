import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { app } from "../../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //Register User
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Get Current User
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  //Sign In User
  const loginUser = (email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
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
  };
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
