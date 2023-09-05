import React from 'react';

const CoverageBox = ({ image, text, onClick, positionX = "center" }) => {
  return (
    <div
      onClick={onClick}
      className='flex flex-col items-center justify-between rounded bg-white shadow-lg cursor-pointer hover:transition-all hover:scale-105'
    >
      <img
        src={image}
        alt='coverageimg'
        className='h-[200px] w-[100%]'
        style={{ objectFit: 'cover', backgroundPositionX: positionX  }}
      />
      <p className='px-3 py-4'>{text}</p>
    </div>
  );
};

export default CoverageBox;
