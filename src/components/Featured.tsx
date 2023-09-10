import Image from 'next/image'
import React from 'react'

const Featured = () => {
  return (
    <div className='w-screen overflow-x-scroll text-red-500 '>
      {/* Wrapper */}
     <div className='w-max flex'>
      {/* Single item */}
      <div className='w-screen h-[60vh] flex flex-col items-center jusstify-around'>
    {/* Image container */}
    <div className="relative flex-1 w-full">
    <Image src="/temporary/p1.png" alt='' fill />
    </div>
    {/* text container */}
    <div className='flex-1'>
      <h1 className=''>title</h1>
      <p>Desc</p>
      <span>123</span>
      <button>Add to Cart</button>
    </div>
      </div>
     </div>
    </div>
  )
}

export default Featured
