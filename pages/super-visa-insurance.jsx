import { CoverageDetail } from '@/components/CoverageDetail';
import { HeroSection } from '@/components/HeroSection/HeroSection';
const SuperVisa = () => {
  return (
    <>
      <HeroSection
        heading={'Super Visa Insurance'}
        para={`Super visa insurance is a unique form of travel insurance
            exclusively accessible to the parents and grandparents of Canadian
            citizens or residents, enabling extended stays. This insurance
            provides coverage for potential medical emergencies that could arise
            during their visit.`}
        img={'/images/new/supervisa-insurance.jpeg'}
        color={'#62B1BCCC'}
      />

      <div className='relative top-[-165px]'>
        <CoverageDetail />
      </div>
    </>
  );
};

export default SuperVisa;
