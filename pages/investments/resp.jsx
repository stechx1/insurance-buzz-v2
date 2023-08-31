import { CoverageDetail } from '@/components/CoverageDetail';
import { HeroSection } from '@/components/HeroSection/HeroSection';
const RESP = () => {
  return (
    <>
      <HeroSection
        heading={'Registered Education Saving PLan (RESP)'}
        para={`A Registered Education Savings Plan (RESP) is an educational savings
            program supported by the Canadian government. Participants in an
            RESP make contributions that generate tax-free earnings to cover
            higher education expenses. Alongside parental contributions, the
            government also provides a specific contribution to these plans for
            children below the age of 18.`}
        img={'/images/new/resp.jpg'}
        color={'#9AB88CCC'}
      />

      <div className='relative top-[-165px]'>
        <CoverageDetail />
      </div>
    </>
  );
};

export default RESP;
