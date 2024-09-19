import React from 'react'
import  { createContext, useContext, useState } from 'react';

export const AuthContext=createContext()
export default function Authprovider({children}) {
 const initialAuthuser=localStorage.getItem('users')
 let [authuser,setAuthuser]=useState(
    initialAuthuser? JSON.parse(initialAuthuser):undefined
 )
 return(
    <AuthContext.Provider value={[authuser,setAuthuser]}>
    {children}
    </AuthContext.Provider>
 );
}
export let useAuth=()=>useContext(AuthContext)




