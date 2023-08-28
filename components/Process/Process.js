import React, { useState } from 'react';
import ProcessBox from './ProcessBox';

const Process = () => {
  const [isOpen, setIsOpen] = useState({
    first: true,
    second: false,
    third: false,
    forth: false,
    fifth: false,
  });
  const toogle = (key) => {
    console.log(key);
    setIsOpen({
      first: false,
      second: false,
      third: false,
      forth: false,
      fifth: false,
    });
    if (key === 'first') {
      setIsOpen({
        first: true,
        second: false,
        third: false,
        forth: false,
        fifth: false,
      });
    } else if (key === 'second') {
      setIsOpen({
        first: false,
        second: true,
        third: false,
        forth: false,
        fifth: false,
      });
    } else if (key === 'third') {
      setIsOpen({
        first: false,
        second: false,
        third: true,
        forth: false,
        fifth: false,
      });
    } else if (key === 'forth') {
      setIsOpen({
        first: false,
        second: false,
        third: false,
        forth: true,
        fifth: false,
      });
    } else {
      setIsOpen({
        first: false,
        second: false,
        third: false,
        forth: false,
        fifth: true,
      });
    }
  };
  return (
    <div className='bg-[#FF9801E5]'>
      <div className='flex flex-col px-5 py-20  max-w-7xl m-auto'>
        <span className='bg-[#2196F3] text-white w-fit p-[0.40rem] mb-2'>
          Our Process
        </span>
        <span className='font-[700] text-[30px]  leading-tight sm:w-1/2 text-white'>
          Get the coverage you need for your business, family and assets
        </span>

        <div className='flex md:flex-row flex-col justify-between gap-5 my-10'>
          <div className='flex flex-col gap-5 flex-1 '>
            <div
              onClick={() => {
                toogle('first');
              }}
              className='relative cursor-pointer'
            >
              <div
                style={{
                  width: '35px',
                  height: '35px',
                  borderRadius: '50%',
                  backgroundColor: '#2196F3',
                  position: 'absolute',
                  top: '-25px',
                  left: '-15px',
                  border: '5px solid white',
                }}
              >
                <span className='text-center ml-[0.35rem] text-white text-xs'>
                  01
                </span>
              </div>
              <span
                className={` ${
                  isOpen.first ? 'bg-[#2196F3]' : 'bg-[#BFD9ED]'
                } xl:w-[70%] w-full lg:w-[80%] block px-4 py-2 ${
                  isOpen.first ? 'text-white' : 'text-black'
                } mb-2`}
              >
                Analyize numerious insurance documents
              </span>
            </div>

            <div
              onClick={() => {
                toogle('second');
              }}
              className='relative cursor-pointer'
            >
              <div
                style={{
                  width: '35px',
                  height: '35px',
                  borderRadius: '50%',
                  backgroundColor: '#2196F3',
                  position: 'absolute',
                  top: '-25px',
                  left: '-15px',
                  border: '5px solid white',
                }}
              >
                <span className='text-center ml-[0.35rem] text-white text-xs'>
                  02
                </span>
              </div>
              <span
                className={` ${
                  isOpen.second ? 'bg-[#2196F3]' : 'bg-[#BFD9ED]'
                } xl:w-[70%] w-full lg:w-[80%] block px-4 py-2 ${
                  isOpen.second ? 'text-white' : 'text-black'
                } mb-2`}
              >
                Pinpoint Ideal policy that suits your needs
              </span>
            </div>

            <div
              onClick={() => {
                toogle('third');
              }}
              className='relative cursor-pointer'
            >
              <div
                style={{
                  width: '35px',
                  height: '35px',
                  borderRadius: '50%',
                  backgroundColor: '#2196F3',
                  position: 'absolute',
                  top: '-25px',
                  left: '-15px',
                  border: '5px solid white',
                }}
              >
                <span className='text-center ml-[0.35rem] text-white text-xs'>
                  03
                </span>
              </div>
              <span
                className={` ${
                  isOpen.third ? 'bg-[#2196F3]' : 'bg-[#BFD9ED]'
                } xl:w-[70%] w-full lg:w-[80%] block px-4 py-2 ${
                  isOpen.third ? 'text-white' : 'text-black'
                } mb-2`}
              >
                Get the most competitive rates
              </span>
            </div>

            <div
              onClick={() => {
                toogle('forth');
              }}
              className='relative cursor-pointer'
            >
              <div
                style={{
                  width: '35px',
                  height: '35px',
                  borderRadius: '50%',
                  backgroundColor: '#2196F3',
                  position: 'absolute',
                  top: '-25px',
                  left: '-15px',
                  border: '5px solid white',
                }}
              >
                <span className='text-center ml-[0.35rem] text-white text-xs'>
                  04
                </span>
              </div>
              <span
                className={` ${
                  isOpen.forth ? 'bg-[#2196F3]' : 'bg-[#BFD9ED]'
                } xl:w-[70%] w-full lg:w-[80%] block px-4 py-2 ${
                  isOpen.forth ? 'text-white' : 'text-black'
                } mb-2`}
              >
                Fill your insurance forms
              </span>
            </div>

            <div
              onClick={() => {
                toogle('fifth');
              }}
              className='relative cursor-pointer'
            >
              <div
                style={{
                  width: '35px',
                  height: '35px',
                  borderRadius: '50%',
                  backgroundColor: '#2196F3',
                  position: 'absolute',
                  top: '-25px',
                  left: '-15px',
                  border: '5px solid white',
                }}
              >
                <span className='text-center ml-[0.35rem] text-white text-xs'>
                  05
                </span>
              </div>
              <span
                className={` ${
                  isOpen.fifth ? 'bg-[#2196F3]' : 'bg-[#BFD9ED]'
                } xl:w-[70%] w-full lg:w-[80%] block px-4 py-2 ${
                  isOpen.fifth ? 'text-white' : 'text-black'
                } mb-2`}
              >
                After Sales services
              </span>
            </div>
          </div>

          {isOpen.first ? (
            <ProcessBox
              text1={
                'Our platform utilizes advanced digital tools to quickly assess your insurance needs within minutes.'
              }
              text2={
                'We analyze complex insurance documents using data from various sources to find the perfect policy for you. We also provide competitive rates by accessing a vast database of reputable insurance companies'
              }
              point1={
                'If you face any challenges, we assist with forms, application updates, and inquiries via phone, email, or live chat'
              }
              point2={`Your satisfaction and understanding are our main concerns, and we're here to guide you at every stage`}
            />
          ) : isOpen.second ? (
            <ProcessBox
              text1={
                'Our platform utilizes advanced digital tools to quickly assess your insurance needs within minutes.'
              }
              text2={
                'We analyze complex insurance documents using data from various sources to find the perfect policy for you. We also provide competitive rates by accessing a vast database of reputable insurance companies'
              }
              point1={
                'If you face any challenges, we assist with forms, application updates, and inquiries via phone, email, or live chat'
              }
              point2={`Your satisfaction and understanding are our main concerns, and we're here to guide you at every stage`}
            />
          ) : isOpen.third ? (
            <ProcessBox
              text1={
                'Our platform utilizes advanced digital tools to quickly assess your insurance needs within minutes.'
              }
              text2={
                'We analyze complex insurance documents using data from various sources to find the perfect policy for you. We also provide competitive rates by accessing a vast database of reputable insurance companies'
              }
              point1={
                'If you face any challenges, we assist with forms, application updates, and inquiries via phone, email, or live chat'
              }
              point2={`Your satisfaction and understanding are our main concerns, and we're here to guide you at every stage`}
            />
          ) : isOpen.forth ? (
            <ProcessBox
              text1={
                'Our platform utilizes advanced digital tools to quickly assess your insurance needs within minutes.'
              }
              text2={
                'We analyze complex insurance documents using data from various sources to find the perfect policy for you. We also provide competitive rates by accessing a vast database of reputable insurance companies'
              }
              point1={
                'If you face any challenges, we assist with forms, application updates, and inquiries via phone, email, or live chat'
              }
              point2={`Your satisfaction and understanding are our main concerns, and we're here to guide you at every stage`}
            />
          ) : (
            <ProcessBox
              text1={
                'Our platform utilizes advanced digital tools to quickly assess your insurance needs within minutes.'
              }
              text2={
                'We analyze complex insurance documents using data from various sources to find the perfect policy for you. We also provide competitive rates by accessing a vast database of reputable insurance companies'
              }
              point1={
                'If you face any challenges, we assist with forms, application updates, and inquiries via phone, email, or live chat'
              }
              point2={`Your satisfaction and understanding are our main concerns, and we're here to guide you at every stage`}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Process;
