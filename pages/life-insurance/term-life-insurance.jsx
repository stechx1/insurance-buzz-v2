import { CoverageDetail } from '@/components/CoverageDetail';
const LifeInsurance = () => {
  return (
    <>
      {/* <img src="/images/lifeinsurance.png" alt='lifeinsurance' className='w-full' /> */}

      <div
        className=' relative top-[-165px] '
        style={{
          background: `url(${'/images/image3.png'})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className='flex flex-col gap-3 py-52 pb-56 bg-[#45A1D3CC]'>
          <span className='text-[48px] text-white text-center font-bold'>
            Life Insurance
          </span>
          <span className='lg:w-[50%] sm:w-[70%] text-white w-[100%] text-center m-auto'>
            Ensure your family's future even when you're not there - life
            insurance offers the peace of mind that your loved ones will be
            financially secure. It's a lasting gift that guarantees protection
            and support, no matter what life brings.
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
