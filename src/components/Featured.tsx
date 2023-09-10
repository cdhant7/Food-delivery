import Image from 'next/image'
import React from 'react'

const Featured = () => {
  return (
    <div className='w-screen overflow-x-scroll text-red-500 '>
      {/* Wrapper */}
     <div className='w-max'>
      {/* Single item */}
      <div className=''>
    {/* Image container */}
    <div className="relative">
    <Image src="" alt='' fill />
    </div>
    {/* text container */}
    <div className=''>
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
