import React from 'react'
import battery from '../assets/battery.svg'
import net from '../assets/net.svg'
import Wifi from '../assets/Wifi.svg'


const NavBar = () => {
  const currentTime = new Date().toLocaleTimeString().slice(0, 4);
  return (
    <div className='px-14 py-4 flex items-center justify-between w-full'>
      <p className='text-lg font-semibold leading-6'>{currentTime}</p>
      <div className="flex items-center gap-2 h-3 ">
        {[net, Wifi, battery].map((src)=>{
          return <img src={src} alt={src} key={src} className='h-full w-full'/>
        })}
      </div>
    </div>
  )
}

export default NavBar