import Slider from 'react-slick';

export const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{ breakpoint: '1343px' }],
  };
  return (
    <div className=''>
      <div className='w-1/2 text-center container mx-auto'>
        <Slider {...settings}>
          <div className='w-1/2 !flex flex-col justify-center gap-8 items-center pb-20'>
            <p>
              InsuranceBuzz is more, than an advisor. They are a partner, in my
              financial planning. Their knowledge and guidance have proven
              invaluable in assisting me with making informed choices regarding
              my insurance requirements.
            </p>
            <h1 className='font-bold text-lg'>Pratik Chougule</h1>
          </div>

          <div className='w-1/2 !flex flex-col justify-center gap-8 items-center pb-20'>
            <p>
              My insurance advisor was extremely knowledgeable and patient. They
              took the time to explain all the options to me and helped me find
              the perfect coverage for my needs. I highly recommend them.
            </p>
            <h1 className='font-bold text-lg'>Rahul Kolte</h1>
          </div>

          <div className='w-1/2 !flex flex-col justify-center gap-8 items-center pb-20'>
            <p>
              I had the pleasure of working with an insurance advisor who truly
              displayed a level of professionalism. They effortlessly explained
              the intricacies of insurance. Even assisted me in finding ways to
              save money on my policies. I am extremely satisfied, with their
              services. Couldn&#39;t be happier.
            </p>
            <h1 className='font-bold text-lg'>Shweta Ankadavar</h1>
          </div>

          <div className='w-1/2 !flex flex-col justify-center gap-8 items-center pb-20'>
            <p>
              &quot;I was really impressed, by the application process, great
              prices and outstanding customer service provided by Insurance
              Buzz. It gave me a sense of confidence and security throughout my
              trip. I can&#39;t imagine going on my adventure without their
              services!&quot;
            </p>
            <h1 className='font-bold text-lg'>Shradhha Shah</h1>
          </div>

          <div className='w-1/2 !flex flex-col justify-center gap-4 items-center pb-20'>
            <p>
              &quot;The life insurance policy provided me with a sense of
              security and financial protection, in case of any events. I was
              pleased, with the to understand procedures and helpful guidance I
              received from Vidya.”
            </p>
            <h1 className='font-bold text-lg'>Kiranveer</h1>
          </div>

          <div className='w-1/2 !flex flex-col justify-center gap-8 items-center pb-20'>
            <p>
              I chose Vidya from InsuranceBuzz as my advisor because their
              process is hassle free and they understood my needs. Their
              personalized solution perfectly aligns with my lifestyle. I would
              highly recommend her to others.
            </p>
            <h1 className='font-bold text-lg'>Aditi K</h1>
          </div>
        </Slider>
      </div>
    </div>
  );
};
