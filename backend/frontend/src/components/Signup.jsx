import React from 'react'
import Login from './Login';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';
function Signup () {
  let location=useLocation()
  let navigate=useNavigate();
let from=location.state?.from?.pathname || '/';

  const {
    register,
    handleSubmit,
    formState: { errors },  
  } = useForm()
  const onSubmit=(data)=>{
    let userInfo={
      Email:data.Email,
      Fullname:data.Fullname,
      Password:data.Password
    }
    //console.log(data);
    axios.post('/user/signup',userInfo).then((res)=>{
      console.log(res.data);
      if(res.data){
      toast.success('Signup Successfully')
      navigate(from,{replace:true})
      }
      localStorage.setItem("Users",JSON.stringify(res.data.user))
    }).catch((err)=>{
      if(err.response){
        toast.error("Error "+err.response.data.message)
        
      }
    })
    
  }
  return (
    <div className='flex h-screen justify-center items-center '>
      <div  className="w-[600px]">
  <div className='modal-box '>
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
  
    <h3 className="font-bold text-lg">Signup</h3>
    <div className='mt-3'>
        <span>Name</span><br/>
        <input type='text' placeholder='Enter your Name' className='px-3 py-1 outline-none border-2 rounded-md w-96'
        {...register("Fullname", { required: true })}
        />
          <br/>
          {errors.Fullname && <span className='text-sm text-red-400'>This field is required</span>}
    </div>
    <div className='mt-3'>
        <span>Email</span><br/>
        <input type='email' placeholder='Enter your Email' className='px-3 py-1 outline-none border-2 rounded-md w-96'
        {...register("Email", { required: true })}
        />
          <br/>
          {errors.Email && <span className='text-sm text-red-400'>This field is required</span>}
    </div>
    <div className='mt-4'>
        <span>Password</span><br/>
        <input type='password' placeholder='Enter your password' className='px-3 py-1 outline-none border-2 rounded-md w-96'
        {...register("Password", { required: true })}
        />
          <br/>
          {errors.Password && <span className='text-sm text-red-400'>This field is required</span>}
    </div>
    <div className='flex justify-between items-center mt-6'>
        <button className='bg-pink-400 rounded-md px-3 py-1'>Signup</button>
        <div className='flex space-x-0'>
         <h3>Registered?</h3> 
        <button className='text-blue-900 underline cursor-pointer'
        onClick={()=>document.getElementById('my_modal_3').showModal()}
        >Login</button>
        <Login/>
        </div>
    </div>
    </form>
  </div>
</div>
    </div>
  )
}

export default Signup;
