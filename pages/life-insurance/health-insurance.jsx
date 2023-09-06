import { CoverageDetail } from '@/components/CoverageDetail';
import { HeroSection } from '@/components/HeroSection/HeroSection';
const HealthPage = () => {
  return (
    <>
      <HeroSection
        heading={'Health Insurance - Drug and Dental Plans'}
        para={` Disability insurance offers protection against income loss caused by
            the inability to work due to either permanent or temporary
            disabilities. This type of insurance assists by replacing a portion
            of your lost income and covering medical expenses in the event of an
            accident resulting in disability.`}
        img={'/images/sub/health.jpeg'}
        color={'#eabd03cc'}
        position='10% 40%'
      />

      <div className='relative top-[-165px]'>
        <CoverageDetail />
      </div>
    </>
  );
};

export default HealthPage;
