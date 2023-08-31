"use client"; 

import Image from 'next/image';
import React, { useState } from 'react';

const Menu = () => {
    const[open,setOpen]=useState(false);

    
  return (
    <div>
        {!open ? (
      <Image src="/open.png" alt='' height={20} width={20} onClick={() => setOpen(true)}/>
        ) : (
      <Image src="/close.png" alt='' height={20} width={20} onClick={() => setOpen(false)}/>
        )}
    </div>
  )
}

export default Menu
