import { ContactForm } from '@/components/ContactForm';
import { HeroSection } from '@/components/HeroSection/HeroSection';
const TFSA = () => {
  return (
    <>
      <HeroSection
        heading={'Tax-Free Saving Account (TFSA)'}
        img={'/images/image6.png'}
        para={`A Tax-Free Savings Account (TFSA) is a registered savings account
            with tax advantages that allow you to earn money without incurring
            taxes. Imagine a TFSA as a container where you can hold eligible
            investments, potentially generating tax-free interest, capital
            gains, and dividends.`}
        color={'#9AB88CCC'}
      />

      <div className='relative top-[-165px]'>
        <ContactForm />
      </div>
    </>
  );
};

export default TFSA;
