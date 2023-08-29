import { CoverageDetail } from '@/components/CoverageDetail';
import { HeroSection } from '@/components/HeroSection/HeroSection';
const CriticalillnessPage = () => {
  return (
    <>
      <HeroSection
        img='/images/new/critical-illness.jpg'
        heading={'Critical Illness Insurance'}
        para={` Critical illness insurance offers extra protection for unforeseen
            medical crises such as heart attacks, strokes, or cancer. Given that
            these situations often result in higher-than-normal medical
            expenses, these policies provide monetary payouts to assist in
            covering these excess costs when conventional health insurance might
            not be sufficient.`}
        color={'#FF9801CC'}
      />

      <div className='relative top-[-165px]'>
        <CoverageDetail />
      </div>
    </>
  );
};

export default CriticalillnessPage;
