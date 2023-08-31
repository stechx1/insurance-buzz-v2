'use client';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { useRouter } from 'next/router';

const Hero = () => {
  const [sticky, setSticky] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts or route changes
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [router.asPath]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{ breakpoint: '1343px' }],
  };
  return (
    <>
      <div className='bg-[#45A1D3CC] pt-44'>
        <div className=' h-full max-w-7xl m-auto flex flex-col gap-5 py-20 xl:px-0 px-10 pb-44 '>
          <div>
            <Slider {...settings}>
              <div className='flex px-[24px] flex-col gap-5'>
                <h1 className='sm:text-[70px] text-[40px] font-bold text-white'>
                  Life Insurance
                </h1>

                <h3 className='text-[#EDEDED] text-base lg:w-[40%] w-full'>
                  We have access to majority of the first-rate insurance
                  companies in Texas to offer you the best coverage at the
                  lowest available price
                </h3>
                <div className='flex gap-2 mt-6'>
                  <button
                    style={{ fontSize: '15px' }}
                    className='p-3 text-white bg-[#FF9801] rounded'
                  >
                    Request Quote
                  </button>
                </div>
              </div>

              <div className='flex px-[24px] flex-col gap-5'>
                <h1 className='sm:text-[70px] text-[40px] font-bold text-white'>
                  Travel Insurance
                </h1>

                <h3 className='text-[#EDEDED] text-base lg:w-[40%] w-full'>
                  We have access to majority of the first-rate insurance
                  companies in Texas to offer you the best coverage at the
                  lowest available price
                </h3>
                <div className='flex gap-2 mt-6'>
                  <button
                    style={{ fontSize: '15px' }}
                    className='p-3 text-white bg-[#FF9801] rounded'
                  >
                    Request Quote
                  </button>
                </div>
              </div>

              <div className='flex px-[24px] flex-col gap-5'>
                <h1 className='sm:text-[70px] text-[40px] font-bold text-white'>
                  Super Visa Insurance
                </h1>

                <h3 className='text-[#EDEDED] text-base lg:w-[40%] w-full'>
                  We have access to majority of the first-rate insurance
                  companies in Texas to offer you the best coverage at the
                  lowest available price
                </h3>
                <div className='flex gap-2 mt-6'>
                  <button
                    style={{ fontSize: '15px' }}
                    className='p-3 text-white bg-[#FF9801] rounded'
                  >
                    Request Quote
                  </button>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
