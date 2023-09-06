import React from 'react';
import CoverageBox from './CoverageBox';
import { useRouter } from 'next/router';

const CoverageSlider = () => {
  const router = useRouter();
  return (
    <>
      <div className='grid xl:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-5 sm:px-20 px-10 py-10'>
        <CoverageBox
          onClick={() => router.push('/life-insurance/term-life-insurance')}
          image={'/images/new/life-new.jpeg'}
          positionX='left'
          // image={'/images/new/term-life-insurance.jpeg'}
          text={'Life Insurance'}
        />
        <CoverageBox
          onClick={() => router.push('/super-visa-insurance')}
          image={'/images/new/super-visa.jpeg'}
          text={'Super Visa Insurance'}
        />
        <CoverageBox
          onClick={() => router.push('/visitor-canada')}
          image={'/images/new/visitor.png'}
          text={'Visitor to Canada'}
        />
        <CoverageBox
          onClick={() => router.push('/travel-insurance')}
          image={'/images/new/travel-insurance.jpg'}
          text={'Travel Insurance'}
        />
        <CoverageBox
          onClick={() => router.push('/international-student-insurance')}
          image={'/images/new/intl-new.jpg'}
          // image={'/images/new/international-students.jpg'}
          text={'Intl student insurance'}
        />
      </div>

      <div className='grid xl:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-5 sm:px-20 px-10 py-10'>
        <CoverageBox
          onClick={() => router.push('/investments/rrsp')}
          image={'/images/new/rrsp.jpeg'}
          text={'RRSP / TFSA'}
        />
        <CoverageBox
          onClick={() => router.push('/investments/resp')}
          image={'/images/new/resp-new.jpeg'}
          text={'RESP'}
        />
        <CoverageBox
          onClick={() =>
            router.push('/life-insurance/critical-illness-insurance')
          }
          image={'/images/new/critical-illness.jpg'}
          text={'Critical Illness Insurance'}
        />
        <CoverageBox
          onClick={() => router.push('/life-insurance/disability-insurance')}
          image={'/images/new/disability-insurance.jpeg'}
          text={'Disability Insurance'}
        />
        <CoverageBox
          onClick={() => router.push('/investments/rrsp')}
          image={'/images/new/business-overhead.jpg'}
          text={'Business Overhead'}
        />
      </div>
    </>
  );
};

export default CoverageSlider;
