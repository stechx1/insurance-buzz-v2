import React, { useState } from 'react'
import ProcessBox from './ProcessBox'

const Process = () => {
  const [isOpen, setIsOpen] = useState({ first: true, second: false, third: false, forth: false, fifth: false })
  const toogle = (key) => {
    console.log(key)
    setIsOpen({ first: false, second: false, third: false, forth: false, fifth: false })
    if (key === 'first') {
      setIsOpen({ first: true, second: false, third: false, forth: false, fifth: false })

    } else if (key === 'second') {
      setIsOpen({ first: false, second: true, third: false, forth: false, fifth: false })

    } else if (key === 'third') {
      setIsOpen({ first: false, second: false, third: true, forth: false, fifth: false })

    } else if (key === 'forth') {
      setIsOpen({ first: false, second: false, third: false, forth: true, fifth: false })

    } else {
      setIsOpen({ first: false, second: false, third: false, forth: false, fifth: true })

    }

  }
  return (
    <div className='flex flex-col px-5 max-w-7xl m-auto'>
      <span className='bg-[#CAD28F] w-fit p-1 mb-2'>Process</span>
      <span className='font-[700] text-[30px] text-black leading-tight sm:w-1/2'>Get the coverage you need for your business, family and assets</span>

      <div className='flex md:flex-row flex-col justify-between gap-5 my-10'>

        <div className='flex flex-col gap-5 flex-1 '>

          <div onClick={() => { toogle('first') }} className='relative cursor-pointer'>
            <div style={{ width: '35px', height: '35px', borderRadius: '50%', backgroundColor: '#3A6B33', position: "absolute", top: '-25px', left: "-15px", border: "5px solid white" }}>
              <span className='text-center ml-[0.35rem] text-white text-xs'>01</span>
            </div>
            <span className={` ${isOpen.first ? 'bg-[#3A6B33]' : 'bg-[#CAD28F]'} xl:w-[60%] w-full lg:w-[80%] block px-4 py-2 ${isOpen.first ? 'text-white' : 'text-black'} mb-2`}>Analyize numerious  insurance documents</span>
          </div>

          <div onClick={() => { toogle('second') }} className='relative cursor-pointer'>
            <div style={{ width: '35px', height: '35px', borderRadius: '50%', backgroundColor: '#3A6B33', position: "absolute", top: '-25px', left: "-15px", border: "5px solid white" }}>
              <span className='text-center ml-[0.35rem] text-white text-xs'>02</span>
            </div>
            <span className={` ${isOpen.second ? 'bg-[#3A6B33]' : 'bg-[#CAD28F]'} xl:w-[60%] w-full lg:w-[80%] block px-4 py-2 ${isOpen.second ? 'text-white' : 'text-black'} mb-2`}>Fill Your Insurance Forms</span>
          </div>

          <div onClick={() => { toogle('third') }} className='relative cursor-pointer'>
            <div style={{ width: '35px', height: '35px', borderRadius: '50%', backgroundColor: '#3A6B33', position: "absolute", top: '-25px', left: "-15px", border: "5px solid white" }}>
              <span className='text-center ml-[0.35rem] text-white text-xs'>03</span>
            </div>
            <span className={` ${isOpen.third ? 'bg-[#3A6B33]' : 'bg-[#CAD28F]'} xl:w-[60%] w-full lg:w-[80%] block px-4 py-2 ${isOpen.third ? 'text-white' : 'text-black'} mb-2`}>Pinpoint Ideal policy that suits your needs</span>
          </div>

          <div onClick={() => { toogle('forth') }} className='relative cursor-pointer'>
            <div style={{ width: '35px', height: '35px', borderRadius: '50%', backgroundColor: '#3A6B33', position: "absolute", top: '-25px', left: "-15px", border: "5px solid white" }}>
              <span className='text-center ml-[0.35rem] text-white text-xs'>04</span>
            </div>
            <span className={` ${isOpen.forth ? 'bg-[#3A6B33]' : 'bg-[#CAD28F]'} xl:w-[60%] w-full lg:w-[80%] block px-4 py-2 ${isOpen.forth ? 'text-white' : 'text-black'} mb-2`}>Get the most competitive rates</span>
          </div>

          <div onClick={() => { toogle('fifth') }} className='relative cursor-pointer'>
            <div style={{ width: '35px', height: '35px', borderRadius: '50%', backgroundColor: '#3A6B33', position: "absolute", top: '-25px', left: "-15px", border: "5px solid white" }}>
              <span className='text-center ml-[0.35rem] text-white text-xs'>05</span>
            </div>
            <span className={` ${isOpen.fifth ? 'bg-[#3A6B33]' : 'bg-[#CAD28F]'} xl:w-[60%] w-full lg:w-[80%] block px-4 py-2 ${isOpen.fifth ? 'text-white' : 'text-black'} mb-2`}>Get Help, Give Feednac</span>
          </div>


        </div>

        {
          isOpen.first ? <ProcessBox text1={"First Heading Here we will add more details, we will have a meeting and I ll ask you about them we will make this section beautiful to interact and look"} text2={"Our platform is equipped with exclusive digital tools designed to swiftly evaluate your insurance requirements in just a few minutes. By leveraging data from various sources, we efficiently analyze numerous intricate insurance documents"} point1={"Some text would come here"} point2={"Some text would come here"} /> : (isOpen.second ?
            <ProcessBox text1={"Second Heading Here we will add more details, we will have a meeting and I ll ask you about them we will make this section beautiful to interact and look"} text2={"Our platform is equipped with exclusive digital tools designed to swiftly evaluate your insurance requirements in just a few minutes. By leveraging data from various sources, we efficiently analyze numerous intricate insurance documents"} point1={"Some text would come here"} point2={"Some text would come here"} /> : (isOpen.third ?
              <ProcessBox text1={"Third Heading Here we will add more details, we will have a meeting and I ll ask you about them we will make this section beautiful to interact and look"} text2={"Our platform is equipped with exclusive digital tools designed to swiftly evaluate your insurance requirements in just a few minutes. By leveraging data from various sources, we efficiently analyze numerous intricate insurance documents"} point1={"Some text would come here"} point2={"Some text would come here"} /> : (isOpen.forth ?
                <ProcessBox text1={"Forth HeadingHere we will add more details, we will have a meeting and I ll ask you about them we will make this section beautiful to interact and look"} text2={"Our platform is equipped with exclusive digital tools designed to swiftly evaluate your insurance requirements in just a few minutes. By leveraging data from various sources, we efficiently analyze numerous intricate insurance documents"} point1={"Some text would come here"} point2={"Some text would come here"} /> : <ProcessBox text1={"Fifth Heading Here we will add more details, we will have a meeting and I ll ask you about them we will make this section beautiful to interact and look"} text2={"Our platform is equipped with exclusive digital tools designed to swiftly evaluate your insurance requirements in just a few minutes. By leveraging data from various sources, we efficiently analyze numerous intricate insurance documents"} point1={"Some text would come here"} point2={"Some text would come here"} />
              )
            )
          )
        }

      </div>
    </div>
  )
}

export default Process
