import { CoverageDetail } from '@/components/CoverageDetail';
import { HeroSection } from '@/components/HeroSection/HeroSection';
const StudentInsurance = () => {
  return (
    <>
      <HeroSection
        heading={'International Student Insurance'}
        para={`Ensure your family's future even when you're not there - life
            insurance offers the peace of mind that your loved ones will be
            financially secure. It's a lasting gift that guarantees protection
            and support, no matter what life brings.`}
        img={'/images/new/international-student-insurance.jpg'}
        color={'#A94443CC'} position='top'
      />

      <div className='relative top-[-165px]'>
        <CoverageDetail />
      </div>
    </>
  );
};

export default StudentInsurance;
