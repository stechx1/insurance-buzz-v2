import React from 'react'

const CoverageBox = ({ image, text }) => {
  return (
    <div className='flex flex-col bg-white'>
      <img src={image} alt="coverageimg" />
      <span className='px-3 py-5'>{text}</span>

    </div>
  )
}

export default CoverageBox
