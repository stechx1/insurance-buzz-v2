import React from 'react'

const TopNav = () => {
  return (
    <div className='flex sm:flex-row flex-col justify-between items-center max-w-7xl py-3 xl:px-0 px-5 m-auto'>
      <div className='flex items-center gap-2'>
        <img src="/images/logo.png" alt="logo" />
        <span className='text-[#2C5F2D] font-bold text-[26px]'>InsuranceBuzz</span>
      </div>

      <div className='flex gap-5 items-center'>
        <div className='flex gap-3 items-center justify-between'>
          <i style={{ color: '#2C5F2D', fontSize: "25px" }} class="fa fa-facebook-official" aria-hidden="true"></i>
          <i style={{ color: '#2C5F2D', fontSize: "25px" }} class="fa fa-twitter-square" aria-hidden="true"></i>
          <i style={{ color: '#2C5F2D', fontSize: "25px" }} class="fa fa-linkedin-square" aria-hidden="true"></i>

        </div>

        <div>
          <button style={{ fontSize: '15px' }} className='p-3 font-semibold bg-[#CAD28F] rounded'>Request Quote</button>
        </div>
      </div>
    </div>
  )
}

export default TopNav
