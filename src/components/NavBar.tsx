import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import Carticon from './Carticon'

const NavBar = () => {
  const user=false
  return (
    <div className=' h-12 text-red-500 p-4 flex items-center justify-between border-b-2 border-b-red-500 uppercase '>
    {/* Left Links */}
     <div className='hidden md:flex gap-4 '>
      <Link href="/">Homepage</Link>
      <Link href="/menu">Menu</Link>
      <Link href="/">contact</Link>

     </div>
      {/* Logo */}
      <div className=' text-xl '>
        <Link href="/">CDHANT</Link>
      </div>
      {/* Mobile Menu */}
      <div className='md: hidden '>
        <Menu/>
        {/* Right Links */}
        <div className='hidden md:flex gap-4 '></div>
       {user ? <Link href="/login">Login</Link> 
       :<Link href="/orders">Orders</Link>}

      <Carticon/>
      </div>
    </div>
  )
}

export default NavBar
