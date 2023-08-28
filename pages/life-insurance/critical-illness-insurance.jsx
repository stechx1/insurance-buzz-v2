import { CoverageDetail } from '@/components/CoverageDetail';
const CriticalillnessPage = () => {
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
        <div className='flex flex-col items-center justify-center gap-3 py-52 pb-40 bg-[#FF9801E6]'>
          <span className='text-[48px] text-white text-center font-bold drop-shadow-lg'>
            Critical Illness Insurance
          </span>
          <span className='lg:w-[50%] sm:w-[70%] text-white w-[100%] text-center m-auto'>
            Critical illness insurance offers extra protection for unforeseen
            medical crises such as heart attacks, strokes, or cancer. Given that
            these situations often result in higher-than-normal medical
            expenses, these policies provide monetary payouts to assist in
            covering these excess costs when conventional health insurance might
            not be sufficient.
          </span>
        </div>
      </div>
      <div className='relative top-[-165px]'>
        <CoverageDetail />
      </div>
    </>
  );
};

export default CriticalillnessPage;
