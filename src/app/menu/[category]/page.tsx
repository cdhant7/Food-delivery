import { pizzas } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoryPage = () => {
  return (
    <div className='flex flex-wrap text-red-500'>
      {pizzas.map(item =>(
        <Link className='w-full h-[60vh] border-b-2 border-r-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group even:bg-fuchsia-50 ' href={`/product/${item.id}`} key={item.id}>
          {/* Image container */}
          {item.img &&( 
          <div className='relative h-[80%]'>
            <Image src={item.img} alt='' fill className='object-contain'/>
          </div>
          )}
          {/* Text conatiner */}
          <div className='flex items-center justify-between font-bold '>
          <h1 className='uppercase p-2 text-2xl'>{item.title}</h1>
          <h2 className='group-hover:hidden text-xl'>${item.price}</h2>
          <button className='hidden group-hover:block bg-red-500 p-2 uppercase text-white rounded-md '>Add to cart</button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CategoryPage
