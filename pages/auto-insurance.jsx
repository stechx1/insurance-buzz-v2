import { useState, useEffect } from 'react';

import { CoverageDetail } from '@/components/CoverageDetail';
import styles from '@/styles/navbar.module.css';
import MainNav from '@/components/Navbar/MainNav';
import TopNav from '@/components/Navbar/TopNav';
import { useRouter } from 'next/router';
import { HeroSection } from '@/components/HeroSection/HeroSection';

const AutoInsurance = () => {
  const router = useRouter();

  const [sticky, setSticky] = useState(false);

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
      {/* <div className={`${sticky ? styles.sticky : styles.notSticky} `}>
        <TopNav />
        <MainNav />
      </div>{' '} */}
      <HeroSection
        img='/images/new/auto-insurance.jpg'
        heading={'Auto Insurance (Coming Soon)'}
        para={`Universal life insurance is a variant of permanent life insurance
            that provides policyholders with premium payment flexibility, a cash
            savings element, and a death benefit. Within universal life
            insurance, individuals have the option to borrow from or withdraw
            funds from the accumulating savings portion, which grows without
            taxation throughout their lifetime.`}
        color='#FF9801CC'
      />
      <div className='relative top-[-165px]'>
        <CoverageDetail />
      </div>
    </>
  );
};

export default AutoInsurance;
