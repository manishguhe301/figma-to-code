import React from 'react'

const CardWrapper = ({ children }) => {
  return (
    <div className='h-full w-full py-4 px-3 rounded-2xl border-2 border-[#F2F2F2]'>{children}</div>
  )
}

export default CardWrapper