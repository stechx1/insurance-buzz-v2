import React from 'react'

const WhyChooseBox = ({ image, text1, text2 }) => {
  return (
    <div className="flex flex-col gap-2 pr-5 py-5">
      <img src={image} alt="face" className='w-[50px] mb-3' />
      <span className="font-semibold">{text1}</span>
      <span>{text2}</span>
    </div>
  )
}

export default WhyChooseBox
