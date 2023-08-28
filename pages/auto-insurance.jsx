import { CoverageDetail } from '@/components/CoverageDetail';
const AutoInsurance = () => {
  return (
    <>
      <div
        className=' relative top-[-165px] '
        style={{
          background: `url(${'/images/image10.png'})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className='flex flex-col items-center justify-center gap-3 py-52 pb-40 bg-[#FF9801CC]'>
          <span className='text-[48px] text-white text-center font-bold drop-shadow-lg'>
            Auto Insurance
          </span>
          <span className='lg:w-[50%] sm:w-[70%] text-white w-[100%] text-center m-auto'>
            Universal life insurance is a variant of permanent life insurance
            that provides policyholders with premium payment flexibility, a cash
            savings element, and a death benefit. Within universal life
            insurance, individuals have the option to borrow from or withdraw
            funds from the accumulating savings portion, which grows without
            taxation throughout their lifetime.
          </span>
        </div>
      </div>
      <div className='relative top-[-165px]'>
        <CoverageDetail />
      </div>
    </>
  );
};

export default AutoInsurance;
