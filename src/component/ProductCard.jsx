import React from 'react'

function ProductCard({id,image,title,price}) {
  return (
    <div className='bg-white dark:text-blue-800 dark:font-bold p-3 rounded-lg flex flex-col items-center justify-start gap-4 shadow-sm shadow-black'>
      <img className='w-full cursor-pointer' src={image} alt="" />
      <h2>{title}</h2>
      <h3>narxi :{price}</h3>
    </div>
  )
}

export default ProductCard
