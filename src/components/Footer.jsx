import React from 'react'
import logo from '../assets/logo.svg'

const Footer = () => {
  return (
    <div
      className='border-t-2 mx-5 mt-15  py-4 flex flex-col items-center gap-2 border-[#F2F2F2]'
    >
    <img src={logo} alt={logo}  className='w-20 h-full'/>
    <p className='text-[#999999] text-xs font-normal'>sparking the creator economy</p>
    </div>
  )
}

export default Footer