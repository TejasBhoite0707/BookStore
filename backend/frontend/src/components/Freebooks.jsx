import React, { useEffect, useState } from 'react'

import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Cards from './Cards';
function Freebooks({filteredbooks,setfilteredBooks, search, books, setBooks}) {
  console.log(filteredbooks)
  const [book,setBook]=useState([])

  
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      useEffect(()=>{
        const getserachedBook=async()=>{
          try {
            let res=await axios.get(`/book`)
            setBooks((res.data).filter((data)=>data.category==='free'))
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
        <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:text-white dark:bg-slate-900'>
<h1 className='pb-2 font-semibold text-xl'>Free books offered</h1>
<div><p>Explore a treasure trove of classic literature at no cost! Enjoy timeless works from renowned authors across genres, including thrilling adventures, heartfelt dramas, and classic poetry. Dive into these literary gems and enrich your reading experience today! </p>
</div>
<div className='slider-spacing'>
      <Slider {...settings}>
  {filteredbooks.map((item)=>(
    <Cards item={item} key={item.id}/>
  ))}
      </Slider>
    </div>     
 </div>
        
        </>
    )
}

export default Freebooks;
