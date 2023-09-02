import WhyChooseBox from './WhyChooseBox';

const WhyChoose = () => {
  return (
    <div className='bg-[#A94443E5] text-white'>
      <div className='flex flex-col px-5 max-w-7xl py-5 pt-16 m-auto'>
        <span className='bg-[#FFDB58] w-fit text-black p-[0.35rem] mb-2'>
          Why InsuranceBuzz
        </span>

        <span className=''>
          When it comes to securing your future, InsuranceBuzz is the name you
          can trust. We offer personalized insurance advisory services that
          cater to your unique needs. Our team is committed to providing you
          with unbiased advice and helping you make informed decisions. With
          InsuranceBuzz, you can have peace of mind knowing that your financial
          security is in good hands.
        </span>
        <div className='my-10 grid sm:grid-cols-3 grid-cols-1 gap-10'>
          <WhyChooseBox
            image={'/images/ic_outline-sentiment-satisfied.png'}
            text1={'Trust and Transparency'}
            text2={
              'We believe in building trust with our clients through transparent communication and honest advice. Our aim is to provide you with the information you need to make informed decisions about your insurance coverage.'
            }
          />
          <WhyChooseBox
            image={'/images/ic_outline-sentiment-satisfied.png'}
            text1={'Personalized Solutions'}
            text2={
              "We understand that everyone's insurance needs are unique. That's why we at InsuranceBuzz offer personalized solutions tailored to vour specific requirements. Our team of experts will work closely with you to find the right insurance plans that fit your lifestyle and budget."
            }
          />
          <WhyChooseBox
            image={'/images/ic_outline-sentiment-satisfied.png'}
            text1={'Exceptional Customer Service'}
            text2={
              'At InsuranceBuzz, we prioritize customer satisfaction above all else. Our dedicated team is committed to providing exceptional customer service, ensuring that your insurance buying experience is smooth and hassle-free. We are always here to assist you throughout the process.'
            }
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
