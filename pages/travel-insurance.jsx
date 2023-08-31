import { CoverageDetail } from '@/components/CoverageDetail';
import { HeroSection } from '@/components/HeroSection/HeroSection';
const SuperVisa = () => {
  return (
    <>
      <HeroSection
        heading={'Travel Insurance'}
        para={`Travel insurance is a form of insurance designed to assist in
            covering medical expenses in the event of illness or injury while
            traveling. Additionally, it provides protection against financial
            losses stemming from trip cancellations or interruptions.`}
        color={'#9AB88CCC'}
        img={'/images/new/travel-insurance.jpg'}
      />

      <div className='relative top-[-165px]'>
        <CoverageDetail />
      </div>
    </>
  );
};

export default SuperVisa;
