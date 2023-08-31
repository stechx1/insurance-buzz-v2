import { CoverageDetail } from '@/components/CoverageDetail';
import { HeroSection } from '@/components/HeroSection/HeroSection';
const RRSP = () => {
  return (
    <>
      <HeroSection
        heading={'Registered Retirement Saving Plan (RRSP)'}
        para={`  A Registered Retirement Savings Plan (RRSP) is a Canadian retirement
            savings and investment tool available to both employees and
            self-employed individuals. Contributions made to an RRSP are
            deducted from your pre-tax income and the funds grow tax-free until
            withdrawal. Upon withdrawal, the amount is subject to taxation at
            the applicable marginal rate.`}
        img={'/images/new/rrsp.jpg'}
        color={'#A94443CC'}
      />
      
      <div className='relative top-[-165px]'>
        <CoverageDetail />
      </div>
    </>
  );
};

export default RRSP;
