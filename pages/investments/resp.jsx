import { CoverageDetail } from '@/components/CoverageDetail';
const RESP = () => {
  return (
    <>
      <div
        className=' relative top-[-165px] '
        style={{
          background: `url(${'/images/image2.png'})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className='flex flex-col items-center justify-center gap-3 py-52 pb-40 bg-[#9AB88CCC]'>
          <span className='text-[48px] text-white text-center font-bold drop-shadow-lg'>
            Registered Education Saving PLan (RESP)
          </span>
          <span className='lg:w-[50%] sm:w-[70%] text-white w-[100%] text-center m-auto'>
            A Registered Education Savings Plan (RESP) is an educational savings
            program supported by the Canadian government. Participants in an
            RESP make contributions that generate tax-free earnings to cover
            higher education expenses. Alongside parental contributions, the
            government also provides a specific contribution to these plans for
            children below the age of 18.
          </span>
        </div>
      </div>
      <div className='relative top-[-165px]'>
        <CoverageDetail />
      </div>
    </>
  );
};

export default RESP;
