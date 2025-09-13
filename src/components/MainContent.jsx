import React from 'react'
import CreateNewInvoiceBtn from './CreateNewInvoiceBtn'
import CardWrapper from './CardWrapper'
import TimePeriod from './TimePeriod'
import Payments from './Payments'
import Invoices from './Invoices'
import Footer from './Footer'
import IncomeTrend from './IncomeTrend'

const MainContent = () => {
  return (
    <div
      className='flex flex-col items-center w-full gap-3'
    >
      <CreateNewInvoiceBtn />
      <p className='py-3 text-xs font-normal text-[#8134AF]'>
        Or Upload an existing invoice and set payment reminder
      </p>
      <TimePeriod />
      <Payments />
      <IncomeTrend />
      <Invoices />
    </div>
  )
}

export default MainContent