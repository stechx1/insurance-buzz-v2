import { CoverageDetail } from '@/components/CoverageDetail';
const SuperVisa = () => {
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
            Travel Insurance
          </span>
          <span className='lg:w-[50%] sm:w-[70%] text-white w-[100%] text-center m-auto'>
            Travel insurance is a form of insurance designed to assist in
            covering medical expenses in the event of illness or injury while
            traveling. Additionally, it provides protection against financial
            losses stemming from trip cancellations or interruptions.
          </span>
        </div>
      </div>
      <div className='relative top-[-165px]'>
        <CoverageDetail />
      </div>
    </>
  );
};

export default SuperVisa;
