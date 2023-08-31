export const ContactHero = () => {
  return (
    <div
      className='py-40 relative top-[-165px]'
      style={{
        background: 'radial-gradient(ellipse at center,#1D9035 0,#266915 100%)',
      }}
    >
      <div className='container mx-auto text-white pt-10'>
        <h1 className='text-4xl'>Contact Us</h1>
        <div className='flex justify-between gap-20'>
          <div className='flex flex-col gap-4 lg:w-[100%] w-full px-4 mt-8'>
            <div className='flex flex-col gap-2'>
              <span className='text-sm'>Full Name *</span>
              <input
                type='text'
                name='fullname'
                id='fullname'
                placeholder='Enter your full name'
                className='bg-[#F8FAFC] rounded px-3 py-3 border border-[#CDCDCD]'
              />
            </div>

            <div className='flex flex-col gap-2'>
              <span className='text-sm'>Email *</span>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='someone@example.com'
                className='bg-[#F8FAFC] rounded px-3 py-3 border border-[#CDCDCD]'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <span className='text-sm'>Message *</span>
              <textarea
                type='text'
                name='message'
                id='message'
                rows={5}
                placeholder='Message'
                className='bg-[#F8FAFC] rounded px-3 py-3 border border-[#CDCDCD]'
              />
            </div>

            <button className='bg-[#305fa9] mt-6 p-4 rounded text-white w-fit'>
              Submit
            </button>
          </div>

          <div className='flex flex-col gap-8'>
            <div className='flex justify-around'>
              <div className='flex flex-col justify-center items-center gap-3'>
                <img src='/phone.svg' alt='phone' />
                <p>+1 237 3284 8392</p>
              </div>

              <div className='flex flex-col justify-center items-center gap-3'>
                <img src='/mail.svg' alt='phone' />
                <p>vidyakithur@gmail,com</p>
              </div>
            </div>

            <div>
              {/* map */}
              <img className="rounded" src="https://i.stack.imgur.com/HILmr.png" alt="map" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
