import React from 'react';

const CoverageBox = ({ image, text, onClick }) => {
  return (
    <div
      onClick={onClick}
      className='flex flex-col items-center justify-center rounded bg-white shadow-lg cursor-pointer hover:transition-all hover:scale-105'
    >
      <img
        src={image}
        alt='coverageimg'
        className='h-[200px] w-[240px]'
        style={{ objectFit: 'cover' }}
      />
      <p className='px-3 py-4'>{text}</p>
    </div>
  );
};

export default CoverageBox;
