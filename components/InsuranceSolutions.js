import React from 'react'

const InsuranceSolutions = ({ image, text1, text2 }) => {
  return (
    <div className='flex gap-2 items-center'>

      <div className='flex item-center justify-center'>
        <img src={image} alt="boximg" />
      </div>

      <div className='flex flex-col'>
        <span className='text-[29px] font-semibold'>{text1}</span>
        <span className='text-[16px]'>{text2}</span>
      </div>

    </div>
  )
}

export default InsuranceSolutions
