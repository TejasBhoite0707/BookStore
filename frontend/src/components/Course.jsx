import React, { useState,useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Courses from './CourseContent/Courses.jsx'

function Course ()  {
 
  let [filteredbooks,setfilteredBooks]=useState([])
  let [books,setBooks]=useState([])
  let[search,setSearch]=useState("")
  
  console.log(search);
  
  return (
   <>
   <Navbar search={search} setSearch={setSearch}/>
   <div className='min-h-screen'>

   <Courses filteredbooks={filteredbooks} setfilteredBooks={setfilteredBooks} search={search} books={books} setBooks={setBooks} />
   </div>
   
    <Footer />
   </>
  )
}

export default Course;
