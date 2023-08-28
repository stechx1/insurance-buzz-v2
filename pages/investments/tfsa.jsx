import { CoverageDetail } from '@/components/CoverageDetail';
const TFSA = () => {
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
            Tax-Free Saving Account (TFSA)
          </span>
          <span className='lg:w-[50%] sm:w-[70%] text-white w-[100%] text-center m-auto'>
            A Tax-Free Savings Account (TFSA) is a registered savings account
            with tax advantages that allow you to earn money without incurring
            taxes. Imagine a TFSA as a container where you can hold eligible
            investments, potentially generating tax-free interest, capital
            gains, and dividends.
          </span>
        </div>
      </div>
      <div className='relative top-[-165px]'>
        <CoverageDetail />
      </div>
    </>
  );
};

export default TFSA;
