import React, { useRef, useEffect, useState } from 'react';
import Sliders from 'react-slick';

const LifeSlider = () => {
  const [swiperSlidesPerView, setSwiperSlidesPerView] = useState('1');

  useEffect(() => {
    // Check window width and set the number of slides per view
    const handleResize = () => {
      if (window.innerWidth > 980) {
        setSwiperSlidesPerView('5');
      } else if (window.innerWidth > 772) {
        setSwiperSlidesPerView('4');

      }
      else if (window.innerWidth > 500) {
        setSwiperSlidesPerView('2');

      }
      else {
        setSwiperSlidesPerView('1');
      }
    };

    // Attach the resize event listener
    window.addEventListener('resize', handleResize);

    // Call handleResize initially
    handleResize();
    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: Number(swiperSlidesPerView), // Convert to a number
    slidesToScroll: 1, // Corrected property name
    swipeToSlide: false,
    autoplay: true,
    speed: 2400,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: false,
  };

// style={{ filter: 'grayscale(1)' }}
  return (
    <div className="overflow-hidden">

      <Sliders {...settings}>

        <div>
          <img width={140} src="/images/new/logos/life-logo1.jpg" alt="logo" />
        </div>
        <div>
          <img width={140} src="/images/new/logos/life-logo2.png" alt="logo" />
        </div>
        <div>
          <img width={140} src="/images/new/logos/life-logo3.jpg" alt="logo" />
        </div>
        <div>
          <img src="/images/new/logos/life-logo4.jpg" alt="logo" />
        </div>
        <div>
          <img width={140} src="/images/new/logos/life-logo5.png" alt="logo" />
        </div> 
        <div>
          <img width={140} src="/images/new/logos/life-logo6.jpg" alt="logo" />
        </div>
        {/* <div>
          <img src="/images/05.png" alt="logo" />
        </div>
        <div>
          <img src="/images/04.png" alt="logo" />
        </div>
        <div>
          <img src="/images/02.png" alt="logo" />
        </div> */}
      </Sliders>
    </div>
  )
}

export default LifeSlider
