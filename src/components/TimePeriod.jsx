import React, { useState } from 'react'
import CardWrapper from './CardWrapper'
import { timePeriods } from '../../utils/constants'
import Pill from './Pill'
import Heading from './Heading'

const TimePeriod = () => {
  const [activeIndex, setActiveIndex] = useState(1)

  return (
    <CardWrapper className='flex flex-col gap-2'>
      <div className="flex items-center w-full justify-between">
        <Heading>Time Period</Heading>
        <Heading className='text-xs'>dd:mm:yyyy - dd:mm:yyyy</Heading>
      </div>
      <div className="flex items-center gap-2 flex-wrap">
        {timePeriods.map((t, index) => {
          return (
            <Pill
              key={t.text}
              activeIndex={activeIndex}
              index={index}
              t={t}
              handlClick={() => setActiveIndex(index)}
            />
          )
        })}
      </div>
    </CardWrapper >
  )
}

export default TimePeriod