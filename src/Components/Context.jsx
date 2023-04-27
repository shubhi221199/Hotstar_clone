import { createContext, useState } from "react";
import React from "react";
import { RecaptchaVerifier,signInWithPhoneNumber ,signOut} from "firebase/auth";
import { auth } from "../firebase";

export const AuthContext = createContext()


export const ContextcustomProvider = ({children})=>{

    function setUpRecaptcha(number){
    const recaptchaverifier = new RecaptchaVerifier('recaptcha-container', {}, auth)

    recaptchaverifier.render();
    return signInWithPhoneNumber(auth, number, recaptchaverifier)
    }
     const [isLogin, setIsLogin] = useState(false)

     const login =()=>{
        setIsLogin(true)
     }
     const logout =()=>{
        setIsLogin(false)
     }

     const fireLogout = ()=>{
          return signOut(auth)
     }


    return (
        <>
        <AuthContext.Provider value={{login,logout,isLogin, setUpRecaptcha, fireLogout}}> 
         {children}
        </AuthContext.Provider>
        </>
    )
}