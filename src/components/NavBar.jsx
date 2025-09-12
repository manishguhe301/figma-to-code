import React from 'react'
import battery from '../assets/battery.svg'
import net from '../assets/net.svg'
import Wifi from '../assets/Wifi.svg'
import Arrow from '../assets/arrow-back.svg'
import avatar from '../assets/avatar.svg'

const NavBar = () => {
  const currentTime = new Date().toLocaleTimeString().slice(0, 5);
  return (
    <div className='flex flex-col gap-2' >
      <div className='px-14 py-4 flex items-center justify-between w-full'>
        <p className='text-lg font-semibold leading-6'>{currentTime}</p>
        <div className="flex items-center gap-2 h-3 ">
          {[net, Wifi, battery].map((src) => {
            return <img src={src} alt={src} key={src} className='h-full w-full' />
          })}
        </div>
      </div>
      <div className="flex items-center justify-between w-full px-4 pb-3">
        <button className="flex items-center gap-1 cursor-pointer">
          <img src={Arrow} alt="back" className='h-5 w-5' />
          <p className='font-normal text-base'>Back</p>
        </button>
        <p className='font-semibold text-lg leading-6 tracking-tight'>
          Dashboard
        </p>
        <img src={avatar} alt="avatar" />
      </div>
    </div>
  )
}

export default NavBar