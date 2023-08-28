import { CoverageDetail } from '@/components/CoverageDetail';
const RRSP = () => {
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
            Registered Retirement Saving Plan (RRSP))
          </span>
          <span className='lg:w-[50%] sm:w-[70%] text-white w-[100%] text-center m-auto'>
            A Registered Retirement Savings Plan (RRSP) is a Canadian retirement
            savings and investment tool available to both employees and
            self-employed individuals. Contributions made to an RRSP are
            deducted from your pre-tax income and the funds grow tax-free until
            withdrawal. Upon withdrawal, the amount is subject to taxation at
            the applicable marginal rate.
          </span>
        </div>
      </div>
      <div className='relative top-[-165px]'>
        <CoverageDetail />
      </div>
    </>
  );
};

export default RRSP;
