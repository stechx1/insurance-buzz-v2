import { CoverageDetail } from '@/components/CoverageDetail';
import { HeroSection } from '@/components/HeroSection/HeroSection';
const LifeInsurance = () => {
  return (
    <>
      <HeroSection
        img='/images/new/term-life-insurance.jpeg'
        heading={'Term Life Insurance'}
        para={`Term insurance is a type of life insurance that provides financial
            protection to the policyholder for a predetermined duration. If the
            insured person passes away within the policy's timeframe, the
            company disburses a death benefit to the designated beneficiary.`}
        color='#45A1D3CC'
      />
      
      <div className='relative top-[-165px]'>
        <CoverageDetail />
      </div>
    </>
  );
};

export default LifeInsurance;
