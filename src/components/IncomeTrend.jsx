import CardWrapper from './CardWrapper'
import Heading from './Heading'
import MultipleAxes from './MultipleAxes'

const IncomeTrend = () => {

  return (
    <CardWrapper>
      <Heading>Income Trend</Heading>
      <p className='text-xs text-[#6B7280] pr-16 py-1 pb-4'>Your monthly income and growth for the last 6 months.</p>

      <MultipleAxes/>
    </CardWrapper>
  )
}

export default IncomeTrend