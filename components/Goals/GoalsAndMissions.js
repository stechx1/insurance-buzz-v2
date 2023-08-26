import React from 'react'
import GoalsBox from './GoalsBox'

const GoalsAndMissions = () => {
  return (
    <div className='bg-[#62B1BCE5] px-3 py-5 pb-10'>

      <div className='flex flex-col mt-10  max-w-7xl m-auto'>
        <span className='bg-[#000080] text-white w-fit p-[0.35rem]'>Our Goals and Mission</span>
        <span className='font-[700] text-[30px]  leading-tight sm:w-1/2 text-white'>Securing Your Today and Tomorrow Through Expert Insurance Guidance</span>

        <div className='flex lg:flex-row flex-col justify-between  mt-5 gap-4'>

          <div className='flex flex-col mt-10 gap-3 flex-1'>
            <GoalsBox text1={"At our core"} text2={"At our core, we prioritize unwavering integrity and professionalism in our interactions with you, our valued client."} />
            <GoalsBox text1={"Primary Goal"} text2={"Our primary goal is to gain a comprehensive understanding of your financial situation, enabling us to offer top-notch information, services, and products of the utmost quality. Together, we strive to assist you in achieving your financial objectives."} diff />
            <GoalsBox text1={"Our Customers"} text2={"Our main focus is on ensuring customer success and contributing to a better world along with aiming to eleva. Our ultimate goal is to be the most customer-centric company in the industryte the overall customer service experience"} />
          </div>

          <div className='flex  relative flex-1 justify-center'>
            <div className='absolute top-0 right-[16%] z-0'>
              <img src="/images/dots.png" alt="dots" />
            </div>
            <img className=' z-10' src="/images/goals.png" alt="our-goal-and-mission" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default GoalsAndMissions
