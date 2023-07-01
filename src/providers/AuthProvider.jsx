import React, {createContext, useEffect, useState } from 'react'
import { 
  getAuth,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  onAuthStateChanged ,  
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  } from "firebase/auth";

import app from '../../Firebase/Firebase';
export const AuthContext=createContext(null);


const AuthProvider = ({children}) => {
const [user,setUser]=useState(null);
const auth=getAuth(app);

// create account using google 
const createAccountUsingGoogle=()=>{
  const googleProvider=new GoogleAuthProvider();
  signInWithPopup(auth,googleProvider)
  .then((result)=>{
    const user = result.user;
    console.log(user)
    userEmailVerification(user)
  })
  .catch((error)=>{
    console.log(error.message)
  })
  
};

// create account using Github
const createAccountUsingGithub=()=>{
  const githubProvider=new GithubAuthProvider();
  signInWithPopup(auth,githubProvider)
  .then((result)=>{
    const user = result.user;
    console.log(user)
    // userEmailVerification(user)
  })
  .catch((error)=>{
    console.log(error.message)
  })
};

// create account using email and password
const createAccountUsingEmail=(email,password)=>{
  return createUserWithEmailAndPassword(auth,email,password);
};

// user login
const signIn=(email,password)=>{
  return signInWithEmailAndPassword(auth,email,password)
};

// send user verification email
const userEmailVerification=(user)=>{
  sendEmailVerification(user)
  .then((result)=>{
    console.log(result)
  })
  .catch((error)=>{
    console.log(error.message)
  })
};

// logout 
const logOut=()=>{
 return signOut(auth)
};

// forget password
const resetPassword=(email)=>{
  return sendPasswordResetEmail(auth,email)
};

useEffect(()=>{
  const unSubscribe = onAuthStateChanged(auth,currentUser=>{
    setUser(currentUser)
  })
  return ()=>{
    unSubscribe();
  }
},[])

const userInfo={
  user,
  signIn,
  resetPassword,
  createAccountUsingGoogle,
  createAccountUsingEmail,
  createAccountUsingGithub,
  userEmailVerification,
  logOut

}

  return (
      <AuthContext.Provider value={userInfo}>
            {children}
      </AuthContext.Provider>
  )
}

export default AuthProvider