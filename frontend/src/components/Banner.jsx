import React from 'react'
import banner from '../assets/Banner.jpg'
function Banner () {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10 dark:bg-slate-900 dark:text-white'>

<div className='md:w-1/2 w-full mt-4 md:mt-32 md:order-1 order-2 '>
<div className='space-y-12 '>
<h1 className='text-4xl font-bold'>Hello, welcome Here to learn Something{" "}<span className='text-pink-500'>new Everyday!!!</span></h1>
<p className='text-xl'>Discover your next favorite book with our Bookstore App. Browse, search, and shop across genres with personalized recommendations and user reviews for a seamless buying experience.</p>

</div>

</div>


<div className='md:w-1/2 w-full md:order-2 order-1 '>
<img src={banner} className=''></img>
</div>

    </div>
    
    </>
  )
}

export default Banner
