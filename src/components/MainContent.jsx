import React from 'react'
import CreateNewInvoiceBtn from './CreateNewInvoiceBtn'
import CardWrapper from './CardWrapper'
import TimePeriod from './TimePeriod'
import Payments from './Payments'
import Invoices from './Invoices'

const MainContent = () => {
  return (
    <div
      className=" min-h-full rounded-t-[40px] bg-white px-4 py-6 flex flex-col items-center w-full gap-3"
    >
      <CreateNewInvoiceBtn />
      <p className='py-3 text-xs font-normal text-[#8134AF]'>
        Or Upload an existing invoice and set payment reminder
      </p>
      <TimePeriod />
      <Payments />
      <Invoices />
    </div>
  )
}

export default MainContent