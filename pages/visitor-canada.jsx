import { CoverageDetail } from '@/components/CoverageDetail';
import { HeroSection } from '@/components/HeroSection/HeroSection';
const VisitorCanada = () => {
  return (
    <>
      <HeroSection
        heading={'Visitor to Canada Insurance'}
        para={`Visitors to Canada insurance pertains to travel coverage designed to
            safeguard individuals during their visits to Canada. Consider it a
            safety precaution against unforeseen events during their trip. This
            insurance aids in covering expenses such as medical care or hospital
            stays if they fall ill, as well as covering additional hotel stays
            in case their return flight is canceled.`}
        img={'/images/sub/visitor.jpeg'}
        color={'#04345CCC'} position='10% 45%'
      />
      
      <div className='relative top-[-165px]'>
        <CoverageDetail />
      </div>

      {/* <div
        className='p-5 relative top-[-60px]'
        id='life-insurance'
        style={{ background: '#ED8B09' }}
      >
        <h1 className='text-white font-bold text-3xl container mx-auto'>
          Travel Insurance FAQs
        </h1>
        <Collapse
          ghost
          items={travelInsuranceItems}
          // defaultActiveKey={['1']}
        />
      </div> */}
    </>
  );
};

export default VisitorCanada;
