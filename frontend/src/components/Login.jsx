import React from 'react'
import { json, Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';
function Login ()  {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit=async (data)=>{
   let userinfo={
    Email:data.Email,
    Password:data.Password
   };
   await axios.post('http://localhost:4001/user/login',userinfo).then((res)=>{
console.log(res.data);
if(res.data){
  toast.success('Login Successfully');
  document.getElementById('my_modal_3').close();
  setTimeout(()=>{
    
    window.location.reload();
    localStorage.setItem("users",JSON.stringify(res.data.user))
  },1000)
 
}

   }).catch((err)=>{
  if(err.response){
console.log(err);
toast.error(err.response.data.message);
setTimeout(()=>{},3000)
  }
    
   })
  };
  
  return (
   <div>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} >
      {/* if there is a button in form, it will close the modal */}
      <Link to='/'
      onClick={()=>document.getElementById('my_modal_3').close()}
      className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
    <h3 className="font-bold text-lg">Login</h3>
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
        {errors.Password && <span className='text-sm text-red-400' >This field is required</span>}
    </div>
    <div className='flex justify-between items-center mt-6'>
        <button className='bg-pink-400 rounded-md px-3 py-1'>Submit</button>
        <div className='flex space-x-0'>
         <h3>Not Registered?</h3> 
        <a className='text-blue-900 underline cursor-pointer' href='/signup'>sign up</a>
        </div>
    </div>
    </form>
  </div>
</dialog>

   </div>
  )
  console.log();
  
}

export default Login;
