import React, { useState } from 'react'
import Heading from './Heading'
import InvoiceBill from './InvoiceBill'
import { invoices } from '../../utils/constants'

const Invoices = () => {
  const [isInvoicesFolded, setIsInvoicesFolded] = useState(false)

  return (
    <div className="py-3 flex flex-col gap-[10px] w-full">
      <div
        className="w-full flex flex-col cursor-pointer"
        onClick={() => setIsInvoicesFolded(!isInvoicesFolded)}
      >
        <div className="flex items-center justify-between">
          <Heading className="text-base font-semibold">Your Invoices</Heading>
          <i
            className={`ri-arrow-${isInvoicesFolded ? 'up' : 'down'}-s-fill transition-transform duration-300`}
          ></i>
        </div>
        {isInvoicesFolded && <span className="text-xs uppercase text-gray-500">
          click to open invoices
        </span>
        }
      </div>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden`}
        style={{
          maxHeight: isInvoicesFolded ? '0px' : '1000px',
          opacity: isInvoicesFolded ? 0 : 1,
        }}
      >
        <div className="flex flex-col gap-[10px] w-full pt-2">
          {invoices.map((i, index) => (
            <InvoiceBill key={`${i.due}-${index}`} invoice={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Invoices
