import React, { useState } from 'react'
import Heading from './Heading'
import InvoiceBill from './InvoiceBill'
import { invoices } from '../../utils/constants'

const Invoices = () => {
  const [isInvoicesFolded, setIsInvoicesFolded] = useState(false)
  return (
    <div className='py-3 flex flex-col gap-[10px] w-full'>
      <div
        className='w-full flex items-center justify-between'
        onClick={() => setIsInvoicesFolded(!isInvoicesFolded)}
      >
        <Heading className='text-base font-semibold'>
          Your Invoices
        </Heading>
        <i className={`ri-arrow-${isInvoicesFolded ? "up" : 'down'}-s-fill`}></i>
      </div>
      <div className='w-full'>
        {
          !isInvoicesFolded && (
            <div
              className="transition-all ease-in-out duration-300 flex flex-col gap-[10px] w-full"
            >
              {
                invoices.map((i, index) => {
                  return <InvoiceBill key={`${i.due}-${index}`} invoice={i} />
                })
              }
            </div>
          )
        }
      </div>

    </div>
  )
}

export default Invoices