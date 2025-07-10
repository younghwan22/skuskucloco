import React, { useEffect, useState } from 'react';
import useInView from './useInView';

const Main1 = () => {
  const images = [
    '/images/main/main1.png',
    '/images/main/main2.png',
    '/images/main/main3.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setHasLoaded(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={ref}
      className={`flex flex-col relative w-full h-screen bg-cover bg-center items-center justify-center transition-all duration-1000 ${
        !hasLoaded || inView ? 'opacity-100 translate-y-0' : ' translate-y-10'
      }`}
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50  z-0" />
      <div className="relative z-10 text-[140px] font-extrabold leading-none flex flex-col items-center">
        <p className="text-[#3B79FF] mb-0">SKU</p>
        <p className="text-white mt-0">LIKELION 13th</p>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center z-20">
        <img src="/images/main/mouse.png"  alt="마우스커서" />
        <p className="ml-3 text-[#666666] text-xl font-semibold">Scroll Down</p>
      </div>
    </div>
  );
};

export default Main1;
