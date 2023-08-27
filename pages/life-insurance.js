import { CoverageDetail } from '@/components/CoverageDetail'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import TopNav from '@/components/Navbar/TopNav';
import MainNav from '@/components/Navbar/MainNav';

const LifeInsurance = () => {
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
  return (
    <>

      <div className='flex flex-col '>

        {/* <img src="/images/lifeinsurance.png" alt='lifeinsurance' className='w-full' /> */}

        <div className='  ' style={{ background: `url(${'/images/lifeinsurance.png'})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
          {!sticky && <> <TopNav />
            <MainNav /></>}
          <div className='flex flex-col gap-3 py-44 bg-[#45A1D3CC]'>
            <span className='text-[48px] text-white text-center font-bold'>Life Insurance</span>
            <span className='lg:w-[50%] sm:w-[70%] text-white w-[100%] text-center m-auto'>Ensure your family's future even when you're not there - life insurance offers the peace of mind that your loved ones will be financially secure. It's a lasting gift that guarantees protection and support, no matter what life brings.</span>
          </div>
        </div>
        <CoverageDetail />

      </div></>
  )
}

export default LifeInsurance
