import { CoverageDetail } from '@/components/CoverageDetail';
import { HeroSection } from '@/components/HeroSection/HeroSection';
import { healthInsuranceItems } from '@/data/faqs/health-insurance';
import { Collapse } from 'antd';

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

      <div
        className='p-5 relative top-[-90px]'
        id='life-insurance'
        style={{ background: '#45A1D3' }}
      >
        <h1 className='text-white font-bold text-3xl container mx-auto'>
          Health Insurance FAQs
        </h1>
        <Collapse
          ghost
          items={healthInsuranceItems}
          // defaultActiveKey={['1']}
        />
      </div>
    </>
  );
};

export default HealthPage;
