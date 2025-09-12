import React from 'react'
import CardWrapper from './CardWrapper'
import Heading from './Heading'
import { getStatusColors } from '../../utils/helpers'

const InvoiceBill = ({ invoice }) => {
  return (
    <CardWrapper className='flex items-center justify-between'>
      <div className="flex flex-col gap-1">
        <Heading className='text-[#6B7280]'>{invoice.name}</Heading>
        <p className='text-[#999999] text-xs font-normal'>{invoice.price}, Due: {invoice.due}</p>
      </div>
      <div>
        {!invoice.isUpdated ? (
          <div
            className='bg-[#8134AF] px-4 py-[10px] text-white rounded-full text-xs font-medium flex items-center gap-2'
          >
            Update Status
            <i className={`ri-arrow-down-s-fill text-sm`}></i>

          </div>
        ) : (
          <div className='flex items-center gap-2'>
            <div
              className={`px-4 py-2 capitalize rounded-full text-sm font-medium
            ${getStatusColors(invoice.status).text}
            ${getStatusColors(invoice.status).bg}`}>
              {invoice.status}
            </div>
            {
              invoice.img && (
                <img src={invoice.img} alt={invoice.status} className='h-6 w-6' />
              )
            }
          </div>
        )}
      </div>
    </CardWrapper>
  )
}

export default InvoiceBill