import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LoginPage = () => {
  return (
    <div>
      {/* BOX */}
      <div className=''>
        {/* IMAGE CONTAINER */}
        <div className='relative'>
          <Image src="/loginBg.png" alt='' fill />
        </div>
        {/* FORM CONTAINER */}
        <div className=''>
          <h1>Welcome</h1>
          <p>Log into your account or create a new one using social button</p>
          <button className='flex gap-4 p-4 ring-1 ring-orange-100 rounded-md '>
            <Image src="/google.png " alt='' width={20} height={20} className='object-contain'/>
            <span>Sign in with Google</span>
          </button>
          <button className='flex gap-4 p-4 ring-1 ring-blue-100 rounded-md '>
            <Image src="/facebook.png " alt='' width={20} height={20} className='object-contain'/>
            <span>Sign in with Facebook</span>
          </button>
          <p>Have a problem? <Link href='/'>Contact us</Link>
           </p>
        </div>
      </div>
    </div>
  )
} 

export default LoginPage
