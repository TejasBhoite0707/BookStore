import React from 'react'

function Cards ({item}) {

    
  return (
    <>
    <div className='mt-6 my-3'>
    <div className="card w-auto h-96 bg-base-100  shadow-xl hover:scale-90 duration-300 transition-all dark:bg-slate-900 dark:text-white dark:border-2">
  <figure className=''>
  <a href={item.website} target='_blank'>
    <img  src={item.image}
      alt="Books" className='h-40 w-40' /></a> 
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-info">{item.category}</div>
    </h2>
    <p className=''>{item.description}</p>
    <div className="card-actions justify-between items-center">
    <div className="badge badge-outline" >₹{item.price}</div>
      <div className=" cursor-pointer p-4 badge badge-outline hover:bg-pink-500 hover:text-white duration-200" >Buy now</div>
      
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards
