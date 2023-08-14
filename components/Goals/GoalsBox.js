import React from 'react'

const GoalsBox = ({ text1, text2, diff }) => {
  return (
    <div className={`flex flex-col ${diff ? 'text-white' : 'text-black'} gap-1 p-4 ${diff ? 'bg-[#3A6B33]' : 'bg-[#CAD28F]'}`}>
      <span className=' font-semibold text-[18px]'>{text1}</span>
      <span>{text2}</span>
    </div>
  )
}

export default GoalsBox
