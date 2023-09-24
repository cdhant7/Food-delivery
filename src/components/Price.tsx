"use client";
import React ,{useState} from 'react';


type Props={
    price:number;
    id:number;
    options? : {title:string; additonalPrice:number;}[];
};

const Price = ({price,id,options }:Props ) => {
const [total ,setTotal]= useState(price);
const [quantity ,setQuantity]= useState(1);
const [selected ,setSelected]= useState(0);

  return (
    <div className='flex flex-col gap-4 '>
      <h2 className='text-2xl font-bold ' >${price.toFixed(2)}</h2>
      {/* Options container */}
      <div className='flex gap-4 '>
        {options?.map(option=>(
          <button key={option.title} className=' p-2 ring-1 ring-red-400 rounded-md ' >{option.title}</button>
        ))}
      </div>
      {/* Quantity and add button container */}
      <div className='flex items-center justify-between '>
        {/* Quantity */}
        <div className='flex justify-between w-full p-3 ring-1 ring-red-500 '>
          <span>Quantity</span>
          <div className='flex gap-4 items-center '>
            <button>{'<'}</button>
            <span>1</span>
            <button>{'>'}</button>
          </div>
        </div>
        {/* Cart button */}
        <button className='uppercase width-56 bg-red-500 text-white p-3  ring-1 ring-red-500 ' >Add to cart</button>
      </div>
    </div>
  )
}

export default Price;