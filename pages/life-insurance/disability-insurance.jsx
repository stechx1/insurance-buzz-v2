import { CoverageDetail } from '@/components/CoverageDetail';
import { HeroSection } from '@/components/HeroSection/HeroSection';
const DisabilityPage = () => {
  return (
    <>
      <HeroSection
        heading={'Disability Insurance'}
        para={` Disability insurance offers protection against income loss caused by
            the inability to work due to either permanent or temporary
            disabilities. This type of insurance assists by replacing a portion
            of your lost income and covering medical expenses in the event of an
            accident resulting in disability.`}
        img={'/images/new/disability-insurance.jpeg'}
        color={'#62B1BCCC'} position='top'
      />

      <div className='relative top-[-165px]'>
        <CoverageDetail />
      </div>
    </>
  );
};

export default DisabilityPage;
