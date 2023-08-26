import React from 'react'
import Slider from "react-slick";

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: '1343px', }
    ]
  };
  return (

    <div className='bg-[#45A1D3CC]'>

      <div className=" h-full max-w-7xl m-auto flex flex-col gap-5 py-20 xl:px-0 px-10 pb-44 ">
        {/* 
        <span className="sm:text-[50px] text-[40px] font-semibold text-white">Life Insurance</span>

        <span className="text-[#EDEDED] text-base w-[40%]">We have access to majority of the first-rate insurance companies in Texas to offer you the best coverage at the lowest available price</span>
        <div className="flex gap-2 mt-6">
          <button style={{ fontSize: '15px' }} className='p-3 text-white bg-[#FF9801] rounded'>Request Quote</button>



        </div> 
*/}
        <div>

          <Slider {...settings}>
            <div className='flex px-[24px] flex-col gap-5'>
              <h1 className="sm:text-[50px] text-[40px] font-semibold text-white">Life Insurance</h1>

              <h3 className="text-[#EDEDED] text-base lg:w-[40%] w-full">We have access to majority of the first-rate insurance companies in Texas to offer you the best coverage at the lowest available price</h3>
              <div className="flex gap-2 mt-6">
                <button style={{ fontSize: '15px' }} className='p-3 text-white bg-[#FF9801] rounded'>Request Quote</button>



              </div>
            </div>

            <div className='flex px-[24px] flex-col gap-5'>
              <h1 className="sm:text-[50px] text-[40px] font-semibold text-white">Life Insurance</h1>

              <h3 className="text-[#EDEDED] text-base lg:w-[40%] w-full">We have access to majority of the first-rate insurance companies in Texas to offer you the best coverage at the lowest available price</h3>
              <div className="flex gap-2 mt-6">
                <button style={{ fontSize: '15px' }} className='p-3 text-white bg-[#FF9801] rounded'>Request Quote</button>



              </div>
            </div>

            <div className='flex px-[24px] flex-col gap-5'>
              <h1 className="sm:text-[50px] text-[40px] font-semibold text-white">Life Insurance</h1>

              <h3 className="text-[#EDEDED] text-base lg:w-[40%] w-full">We have access to majority of the first-rate insurance companies in Texas to offer you the best coverage at the lowest available price</h3>
              <div className="flex gap-2 mt-6">
                <button style={{ fontSize: '15px' }} className='p-3 text-white bg-[#FF9801] rounded'>Request Quote</button>



              </div>
            </div>

          </Slider>
        </div>
      </div>
    </div>

  )
}

export default Hero
