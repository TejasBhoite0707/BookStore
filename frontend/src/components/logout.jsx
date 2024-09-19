import React from 'react'
import { useAuth } from './context/Authprovider';
import toast from 'react-hot-toast';

function Logout () {
const[authuser,setAuthuser]=useAuth()
    const handleLogout=()=>{
        try {
           setAuthuser({
            ...authuser,
            user:null
           }) 
           localStorage.removeItem('users');
           toast.success('Logout SuccessFully');
        //    document.getElementById('my_modal_3').close();
           
           setTimeout(()=>{
            window.location.reload(); 
           },2000);
           
        } catch (error) {
            toast.error("error"+error);
            setTimeout(()=>{},3000)
        }
    }
  return (
    <div>
 <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handleLogout}>Logout</button>     
    </div>
  )
}

export default Logout;
