import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from '../Cards'
import {Link} from 'react-router-dom'
function Courses ({filteredbooks,setfilteredBooks, search, books, setBooks})  {

   
     useEffect(()=>{
       const getserachedBook=async()=>{
         try {
           let res=await axios.get(`http://localhost:4001/book`)
           setBooks(res.data)
          setfilteredBooks(res.data)
          console.log(filteredbooks.map((book)=>book.name));
          console.log(books.map((book)=>book.name));
         } catch (error) {
           console.log(error);
           
         }
           }
           getserachedBook();
      },[])
   
     useEffect(()=>{
       if(search.trim()===' '){
         setfilteredBooks(books);
       }
       else{
         setfilteredBooks(
           books.filter((book)=>book.name.toLowerCase().includes(search.toLowerCase()))
         )
       }
     },[search,books])
  return (
    <>
 <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
<div className='mt-28 justify-center items-center text-center'>
  <h1 className='text-2xl  md:text-4xl dark:text-white'>We're thrilled to welcome you to our literary <span className='text-pink-500'> haven!</span></h1>
  <p className='mt-12 dark:text-white'>
  Discover a world of stories, knowledge, and imagination. Whether you’re searching for a classic novel, the latest bestseller, or a hidden gem, we have something for every book lover. Dive in and let your next great read find you!
  </p>
  <Link to='/'>
  <button className='bg-pink-600 text-white p-3 rounded-md mt-5 hover:bg-green-700 transition-all ease-in-out duration-200 '>back</button>
  </Link>
 
</div>
<div className='grid grid-cols-1 md:grid-cols-3 gap-3 mt-14'>
  {
    filteredbooks.map((item)=>(
      <Cards key={item.id} item={item}/>
    ))
  }
</div>
 </div>
    </>
  )
}

export default Courses;