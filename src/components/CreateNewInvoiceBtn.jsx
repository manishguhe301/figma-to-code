
import React from 'react'
import add from '../assets/add.svg'

const CreateNewInvoiceBtn = () => {
  return (
    <button className='cursor-pointer h-[160px] w-full bg-[#F2F2F2] rounded-4xl flex flex-col items-center justify-between px-3 py-4'>
      <img src={add} alt="add" className='w-[50px] h-[50px] mt-2' />
      <div className="flex flex-col gap-1">
        <p className='gradient-text font-semibold text-2xl '>Create New Invoice</p>
        <p className='text-xs font-normal text-[#999999]'>Start by creating and sending new invoice</p>
      </div>
    </button>
  )
}

export default CreateNewInvoiceBtn