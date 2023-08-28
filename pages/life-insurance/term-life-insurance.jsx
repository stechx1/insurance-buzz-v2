import { CoverageDetail } from '@/components/CoverageDetail';
const LifeInsurance = () => {
  return (
    <>
      <div
        className=' relative top-[-165px] '
        style={{
          background: `url(${'/images/image3.png'})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className='flex flex-col items-center justify-center gap-3 py-52 pb-40 bg-[#45A1D3CC]'>
          <span className='text-[48px] text-white text-center font-bold drop-shadow-lg'>
            Term Life Insurance
          </span>
          <span className='lg:w-[50%] sm:w-[70%] text-white w-[100%] text-center m-auto'>
            Term insurance is a type of life insurance that provides financial
            protection to the policyholder for a predetermined duration. If the
            insured person passes away within the policy's timeframe, the
            company disburses a death benefit to the designated beneficiary.
          </span>
        </div>
      </div>
      <div className='relative top-[-165px]'>
        <CoverageDetail />
      </div>
    </>
  );
};

export default LifeInsurance;
