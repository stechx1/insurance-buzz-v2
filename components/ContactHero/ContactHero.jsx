export const ContactHero = () => {
  return (
    <div
      className=' relative top-[-165px]'
      style={{
        background: `url("/images/new/team-trust.jpg")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        objectFit: 'cover',
      }}
    >
      <div className='pt-60 pb-20 text-white bg-[#8a7ec3cc]'>
        <div className='container mx-auto text-center'>
          <h1 className='text-6xl font-bold mb-2'>Contact Us</h1>
          <p className='text'>
            If you have any question or concern, we will help
          </p>

          <p className='my-6'>
            We are located in downtown Bathurst, New Brunswick. Bathurst is a
            great place to live, the surrounding area is beautiful. With world
            class beaches in the summer and amazing snowmobile trails and
            outdoor activites in the winter.
          </p>

          <div className='flex flex-col gap-8 mt-12'>
            <div className='flex justify-around'>
              <div className='flex flex-col justify-center items-center gap-3'>
                <img src='/phone.svg' alt='phone' />
                <p>+1 237 3284 8392</p>
              </div>

              <div className='flex flex-col justify-center items-center gap-3'>
                <img src='/mail.svg' alt='phone' />
                <p>vidyakithur@gmail,com</p>
              </div>
              <div className='flex flex-col justify-center items-center gap-3'>
                <img src='/mail.svg' alt='phone' />
                <p>vidyakithur@gmail,com</p>
              </div>
              <div className='flex flex-col justify-center items-center gap-3'>
                <img src='/mail.svg' alt='phone' />
                <p>vidyakithur@gmail,com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
