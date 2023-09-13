import React from 'react';
import { Input, Button } from '@material-tailwind/react';
import { useRouter } from 'next/router';

const Prefooter = () => {
  const router = useRouter();
  return (
    <div className='bg-[#315FA9] py-16 pb-28 px-5 '>
      <div className='flex lg:flex-row flex-col justify-between gap-5 max-w-7xl  m-auto'>
        <div className='flex flex-col gap-2 flex-1'>
          <span className='font-semibold text-[32px] text-white '>
            Get Started with us today.
          </span>
          <span className='text-base font-normal text-white'>
            We're committed to safeguarding your present and future. Our
            comprehensive coverage and passionate professionals prioritize your
            protection.
          </span>
        </div>

        <div className='flex relative items-center justify-center flex-1'>
          <div className='relative flex w-full max-w-[24rem]'>
            <Button onClick={() => router.push("/contact")}
              className='!absolute text-black bg-[#FFD700] py-5 right-1 top-1 rounded'
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prefooter;
