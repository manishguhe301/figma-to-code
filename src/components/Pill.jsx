import React from 'react'

const Pill = ({
  activeIndex,
  t,
  index,
  handlClick }) => {
  return (
    <div
      onClick={handlClick}
      className={`px-3 py-1 border-2 border-[#F2F2F2] rounded-full text-[#999999] text-sm font-normal flex items-center gap-2 hover:bg-[#F2F2F2] cursor-pointer ${index === activeIndex &&
        'bg-[#F3E8FF] !text-[#8134AF] '} `}
      key={t.duration}
    >
      <p>{t.text}</p>
      {t?.img && (
        <img src={t.img} alt={t.text} className='h-5 w-5' />
      )}
    </div>
  )
}

export default Pill