import { CoverageDetail } from '@/components/CoverageDetail';
const DisabilityPage = () => {
  return (
    <>
      <div
        className=' relative top-[-165px] '
        style={{
          background: `url(${'/images/image7-disability.png'})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className='flex flex-col items-center justify-center gap-3 py-52 pb-40 bg-[#62B1BCE6]'>
          <span className='text-[48px] text-white text-center font-bold drop-shadow-lg'>
            Disability Insurance
          </span>
          <span className='lg:w-[50%] sm:w-[70%] text-white w-[100%] text-center m-auto'>
            Disability insurance offers protection against income loss caused by
            the inability to work due to either permanent or temporary
            disabilities. This type of insurance assists by replacing a portion
            of your lost income and covering medical expenses in the event of an
            accident resulting in disability.
          </span>
        </div>
      </div>
      <div className='relative top-[-165px]'>
        <CoverageDetail />
      </div>
    </>
  );
};

export default DisabilityPage;
