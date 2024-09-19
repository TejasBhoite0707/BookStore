import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar';
import Banner from '../Banner';
import Freebooks from '../Freebooks';
import Footer from '../Footer';

function Home () {
  let [filteredbooks,setfilteredBooks]=useState([])
  let [books,setBooks]=useState([])
  let[search,setSearch]=useState("")
  
  console.log(search);

  
  
  
  
  return (
   <>
<Navbar search={search} setSearch={setSearch} />
<Banner/>
<Freebooks filteredbooks={filteredbooks} setfilteredBooks={setfilteredBooks} search={search} books={books} setBooks={setBooks}/>
<Footer/>
   </>
  )
}

export default Home;
