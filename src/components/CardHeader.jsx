import React from 'react'

const CardHeader = ({ children, className }) =>
  <p className={`text-[#999999] text-sm font-medium ${className}`}>
    {children}
  </p>


export default CardHeader