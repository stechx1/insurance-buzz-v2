import { CoverageDetail } from '@/components/CoverageDetail';
const VisitorCanada = () => {
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
        <div className='flex flex-col items-center justify-center gap-3 pt-52 pb-40 bg-[#62B1BCCC]'>
          <span className='text-[48px] text-white text-center font-bold drop-shadow-lg'>
            Visitor to Canada Insurance
          </span>
          <span className='lg:w-[50%] sm:w-[70%] text-white w-[100%] text-center m-auto'>
            Visitors to Canada insurance pertains to travel coverage designed to
            safeguard individuals during their visits to Canada. Consider it a
            safety precaution against unforeseen events during their trip. This
            insurance aids in covering expenses such as medical care or hospital
            stays if they fall ill, as well as covering additional hotel stays
            in case their return flight is canceled.
          </span>
        </div>
      </div>
      <div className='relative top-[-165px]'>
        <CoverageDetail />
      </div>
    </>
  );
};

export default VisitorCanada;
