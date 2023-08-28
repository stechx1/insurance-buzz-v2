import { CoverageDetail } from '@/components/CoverageDetail';
const HomeInsurance = () => {
  return (
    <>
      <div
        className=' relative top-[-165px] '
        style={{
          background: `url(${'/images/image11.png'})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className='flex flex-col items-center justify-center gap-3 py-52 pb-40 bg-[#A94443CC]'>
          <span className='text-[48px] text-white text-center font-bold drop-shadow-lg'>
            Home Insurance
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

export default HomeInsurance;
