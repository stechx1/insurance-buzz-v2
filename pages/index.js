import Image from 'next/image'
import { Inter } from 'next/font/google'
import { CarouselWithContent } from '@/components/Carousel/CarouselComp'
import InsuranceSolutions from '@/components/InsuranceSolutions'
import AboutUs from '@/components/AboutUs/AboutUs'
import Coverages from '@/components/Coverages/Coverages'
import Process from '@/components/Process/Process'
import GoalsAndMissions from '@/components/Goals/GoalsAndMissions'

export default function Home() {
  return (

    <>
      <CarouselWithContent />
      <div className='px-5 xl:px-0'>

        <div style={{ boxShadow: "0px 5px 7px 0px rgb(114 114 114 / 25%)", position: "relative", top: '-50px' }} className=' px-5 py-6 pb-16  xl:max-w-7xl max-w-screen-lg rounded-xl bg-white m-auto'>
          <div className='text-center'>
            <span className='text-black text-center text-base'>Reliable Insurance Solutions</span>
          </div>
          <div className='grid mt-4 md:grid-cols-3 grid-cols-1 gap-5'>


            <InsuranceSolutions image={"/images/insurancesol1.png"} text1={"30+"} text2={'Satisfied Clients'} />
            <InsuranceSolutions image={"/images/insurancesol2.png"} text1={"12K+"} text2={'Insurance Policies'} />
            <InsuranceSolutions image={"/images/insurancesol2.png"} text1={"8+"} text2={'Insurance Types'} />


          </div>
        </div>
      </div>

      <AboutUs />

      <Coverages />

      <Process />

      <GoalsAndMissions />
    </>

  )
}
