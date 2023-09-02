import WhyChooseBox from './WhyChooseBox';

const WhyChoose = () => {
  return (
    <div className='bg-[#A94443E5] text-white'>
      <div className='flex flex-col px-5 max-w-7xl py-5 pt-16 m-auto'>
        <span className='bg-[#FFDB58] w-fit text-black p-[0.35rem] mb-2'>
          Why InsuranceBuzz
        </span>
        <span className='font-[700] text-[30px]  leading-tight sm:w-1/2'>
          Why you should choose InsuranceBuzz, here are reasons
        </span>

        <div className='my-10 grid sm:grid-cols-2 grid-cols-1 gap-10'>
          <WhyChooseBox
            image={'/images/ic_outline-sentiment-satisfied.png'}
            text1={'Satisfied Customers'}
            text2={
              'Our track record speaks for itself – satisfied customers have experienced our commitment to excellence'
            }
          />
          <WhyChooseBox
            image={'/images/ic_outline-sentiment-satisfied.png'}
            text1={'Reliable Insurance Solutions'}
            text2={
              'Discover dependable insurance solutions with us. Our expertise ensures you have trustworthy coverage for your life health Home and vehicle'
            }
          />
          <WhyChooseBox
            image={'/images/ic_outline-sentiment-satisfied.png'}
            text1={'Committed to Your Protection'}
            text2={
              "We're committed to safeguarding your present and future. Our comprehensive coverage and passionate professionals prioritize your protection."
            }
          />
          <WhyChooseBox
            image={'/images/ic_outline-sentiment-satisfied.png'}
            text1={'Empowering Your Insurance Decisions'}
            text2={
              'Empower yourself with confident insurance decisions. Our advisors share expertise and personalized consultations for your financial future.'
            }
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
