import { CoverageDetail } from '@/components/CoverageDetail';
const SuperVisa = () => {
  return (
    <>
      <div
        className=' relative top-[-165px] '
        style={{
          background: `url(${'/images/image9.png'})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        <div className='flex flex-col items-center justify-center gap-3 py-52 pb-40 bg-[#9AB88CCC]'>
          <span className='text-[48px] text-white text-center font-bold drop-shadow-lg'>
            Super Visa Insurance
          </span>
          <span className='lg:w-[50%] sm:w-[70%] text-white w-[100%] text-center m-auto'>
            Super visa insurance is a unique form of travel insurance
            exclusively accessible to the parents and grandparents of Canadian
            citizens or residents, enabling extended stays. This insurance
            provides coverage for potential medical emergencies that could arise
            during their visit.
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
