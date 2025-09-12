import React from 'react'
import CardWrapper from './CardWrapper'
import Heading from './Heading'

const Payments = () => {
  return (
    <div className='flex flex-col gap-3 w-full'>
      <CardWrapper className={'flex flex-col gap-2'}>
        <Heading>Total Earnings</Heading>
        <p className='text-xl font-semibold text-[#8134AF]'>$1,25,000</p>
      </CardWrapper>
      <div className="flex items-center gap-3 w-full">
        <CardWrapper className={'flex flex-col gap-2 w-1/2'}>
          <Heading>
            Payment Awaited
          </Heading>
          <p className='text-base font-semibold text-[#8134AF]'>$25,000</p>
        </CardWrapper>
        <CardWrapper className={'flex flex-col gap-2 w-1/2'}>
          <Heading>
            Payment Overdue
          </Heading>
          <p className='text-base font-semibold text-[#8134AF]'>$25,000</p>
        </CardWrapper>
      </div>
    </div>
  )
}

export default Payments