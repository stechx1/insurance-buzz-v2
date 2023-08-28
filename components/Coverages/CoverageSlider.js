import React from 'react';
import CoverageBox from './CoverageBox';
import { useRouter } from 'next/router';

const CoverageSlider = () => {
  const router = useRouter();
  return (
    <>
      <div className='grid xl:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-5 sm:px-20 px-10 py-10'>
        <CoverageBox
          onClick={() => router.push('/life-insurance/term-life-insurance')}
          image={'/images/new/life-insurance.jpeg'}
          text={'Life Insurance'}
        />
        <CoverageBox
          onClick={() => router.push('/super-visa-insurance')}
          image={'/images/new/super-visa.jpeg'}
          text={'Super Visa Insurance'}
        />
        <CoverageBox
          onClick={() => router.push('/visitor-canada')}
          image={'/images/new/visitor-insurance.jpg'}
          text={'Visitor to Canada'}
        />
        <CoverageBox
          onClick={() => router.push('/travel-insurance')}
          image={'/images/new/travel-insurance.jpg'}
          text={'Travel Insurance'}
        />
        <CoverageBox
          onClick={() => router.push('/international-student-insurance')}
          image={'/images/new/international-students.jpg'}
          text={'International student insurance'}
        />
      </div>

      <div className='grid xl:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-5 sm:px-20 px-10 py-10'>
        <CoverageBox
          onClick={() => router.push('/rrsp')}
          image={'/images/new/RRSP.jpg'}
          text={'RRSP'}
        />
        <CoverageBox
          onClick={() => router.push('/tfsa')}
          image={'/images/coverage2.png'}
          text={'TFSA'}
        />
        <CoverageBox
          onClick={() => router.push('/resp')}
          image={'/images/coverage3.png'}
          text={'RESP'}
        />
      </div>
    </>
  );
};

export default CoverageSlider;
