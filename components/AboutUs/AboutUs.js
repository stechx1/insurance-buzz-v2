import React from 'react'
import AboutSpecs from './AboutSpecs'

const AboutUs = () => {
  return (
    <div className='max-w-7xl flex lg:flex-row flex-col lg:px-0 px-5 gap-14 mt-10 m-auto'>

      <div className='flex items-center'>
        <img src="/images/about.png" alt="aboutus" />


      </div>

      <div className='flex flex-col gap-3 flex-1'>

        <span className='bg-[#CAD28F] w-fit p-1 mb-2'>About Us</span>

        <span className='font-[700] text-[30px] text-black leading-tight'>Meet Vidya Kittur - a licensed LLQP  Life License Qualification Programme</span>
        <span className='text-black text-base'>A professional who holds a degree in commerce and boasts substantial experience in customer service. With her deep understanding of the insurance industry and a passion for helping others, she is dedicated to offering tailor-made insurance advisory services that cater to your unique needs.</span>

        <AboutSpecs heading={"Customer Satisfaction"} para={"Vidya places great emphasis on customer satisfaction, acknowledging the importance of putting clients first."} />
        <AboutSpecs heading={"Business Philosophy"} para={"At the heart of her business philosophy lies the goal of providing a positive and enriching experience, fostering long-lasting relationships with every individual she serves."} />

      </div>

    </div>
  )
}

export default AboutUs
