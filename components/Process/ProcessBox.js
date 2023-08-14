import React from 'react'

const ProcessBox = ({ text1, text2, point1, point2 }) => {
  return (
    <div className='flex flex-col gap-5 flex-1'>
      <span>{text1}</span>

      <span>{text2}</span>

      <div className='flex gap-1 items-center'>
        <i style={{ fontSize: "19px", color: '#3A6B33' }} class="fa fa-check-circle" aria-hidden="true"></i>

        <span>{point1}</span>
      </div>
      <div className='flex gap-1 items-center'>
        <i style={{ fontSize: "19px", color: '#3A6B33' }} class="fa fa-check-circle" aria-hidden="true"></i>

        <span>{point2}</span>
      </div>
    </div>
  )
}

export default ProcessBox
