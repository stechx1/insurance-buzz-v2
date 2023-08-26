import React from 'react'

const TopNav = () => {
  return (
    <div className='bg-[#45A1D3CC]'>


      <div className='flex sm:flex-row flex-col justify-between items-center max-w-7xl pt-3 xl:px-0 px-5 m-auto '>
        <div className='flex items-center gap-2'>
          <img src="/images/logo.png" alt="logo" />
          <span className='text-white font-bold text-[26px]'>InsuranceBuzz</span>
        </div>

        <div className=" sm:flex hidden gap-3 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <img src="/images/navbarPhone.png" alt="navbar" />
          <div className='flex flex-col'>
            <span className='text-sm text-white'>Insurance Advisor</span>
            <span className='text-sm text-white'>+1 647 469 8766</span>
          </div>
        </div>

        {/* <div className='flex gap-5 items-center'>
        <div className='flex gap-3 items-center justify-between'>
          <i style={{ color: '#2C5F2D', fontSize: "25px" }} className="fa fa-facebook-official" aria-hidden="true"></i>
          <i style={{ color: '#2C5F2D', fontSize: "25px" }} className="fa fa-twitter-square" aria-hidden="true"></i>
          <i style={{ color: '#2C5F2D', fontSize: "25px" }} className="fa fa-linkedin-square" aria-hidden="true"></i>

        </div>

        <div>
          <button style={{ fontSize: '15px' }} className='p-3 font-semibold bg-[#CAD28F] rounded'>Request Quote</button>
        </div>
      </div> */}
      </div>
    </div>
  )
}

export default TopNav
