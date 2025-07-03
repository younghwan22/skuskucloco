import React, { useEffect, useState } from 'react';

const Main1 = () => {
  const images = [
    '/images/main/main1.png',
    '/images/main/main2.png',
    '/images/main/main3.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="relative w-full h-screen bg-cover bg-center flex items-center justify-center transition-all duration-1000"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="relative text-[140px] font-extrabold leading-none">
        <p className="text-[#3B79FF] mb-0">SKU</p>
        <p className="text-white mt-0">LIKELION 13th</p>
        <div className="flex items-end justify-center pb-5 ">
        <img src="/images/main/mouse.png" className='mr-3' alt="마우스커서" />
        <p className='ml-[20px] text-[#666666] text-xl font-semibold items-center' >Scroll Down</p>
      </div>
    </div>
      



    </div>
    
  );
};

export default Main1;
