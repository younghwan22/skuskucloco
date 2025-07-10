import React from 'react';
import useInView from './useInView';

const Main3 = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });
  return (
    <div
      ref={ref}
      className="relative w-full h-full bg-black overflow-hidden transition-all duration-1000"
    >
      {/* 검정 오버레이 */}
      <div
        className={`absolute inset-0 bg-black z-20 transition-all duration-1000 pointer-events-none ${inView ? 'opacity-0' : 'opacity-100'}`}
      />
      {/* like lion 이미지: 뒤에 깔리는 배경 역할 */}
      <img
        src="/images/main/likelion.png"
        alt="likelion"
        className="absolute bottom-37 left-1/2 -translate-x-1/2 w-1/4 xl:w-1/6 z-0 opacity-200"
      />

      {/* 텍스트 + 스케줄 이미지 */}
      <div className='relative z-10 flex flex-col items-center justify-center w-full py-24 text-center text-[22px] fontRegular'>
        <p className='text-[#3B79FF] font-bold'>Q.</p>
        <p className='text-white font-semibold'>
          성결대 멋쟁이 사자처럼은 주로
          <span className='text-[#3B79FF] font-semibold'> 어떤 활동 </span>을 하나요?
        </p>
        <p className='text-[#3B79FF] font-bold pt-16'>A.</p>
        <p className='text-white font-semibold'>
          성결대 멋쟁이사자처럼에서는
          <span className='text-[#3B79FF] font-semibold'> 정기 세션 </span>
          과
          <span className='text-[#3B79FF] font-semibold'> 스터디, 아이디어톤 <br /></span>
          마지막으로
          <span className='text-[#3B79FF] font-semibold'> 해커톤 </span>
          을 주로 진행합니다.
        </p>

        {/* 스케줄 이미지 */}
        <img
          src="/images/main/schedule.png"
          alt="스케줄"
          className="w-4/5 xl:w-3/5 mt-16"
        />
      </div>
    </div>
  );
};

export default Main3;
