import React from 'react';
import useInView from './useInView';

const Main2 = () => {
  const [ref] = useInView({ threshold: 0.2 }); // inView 제거
  return (
    
    // 배경 검정색, 그 위에 이미지가 깔리는 구조
    <div
      ref={ref}
      className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center px-6 py-12 transition-all duration-1000"
    >
      {/* 배경 이미지 (검정 위에 깔림) */}
      <img
        src="/images/main/mainP2.png"
        alt="배경"
        className="absolute inset-0 w-full h-full object-cover z-20 pointer-events-none"
        style={{ opacity: 0.9 }} 
      />
      {/* 실제 콘텐츠 영역 */}
      <div className="relative z-20 text-center max-w-4xl w-full mx-auto">
        {/* 상단 소개 문구 */}
        <p className='pt-5 text-[22px] text-white' style={{textShadow: '0 1px 8px rgba(0,0,0,0.7)'}}> 
            <span className="font-semibold text-white">성결대학교 멋쟁이사자처럼</span>
            <span className="font-thin text-white">
            은 <br />자신이 원하는 IT 서비스를 구현하고 싶은 <br />
            성결대학교 학생들이 모인 동아리입니다.
            </span>
        </p>
        {/* 3가지 방향성 제목 */}
        <p className='pt-5 text-[22px] mt-[40px] text-white' style={{textShadow: '0 1px 8px rgba(0,0,0,0.7)'}}> 
            <span className="font-thin text-white">성결대학교 멋쟁이사자처럼만의<br /></span>
            <span className="font-semibold text-white">3가지 방향성</span>
        </p>

        {/* 3가지 방향성 카드 영역 */}
        <div className="flex flex-col md:flex-row justify-center gap-10 mt-10">
          {/* 자기주도성 카드 */}
          <div className="flex flex-col items-center">
            <img src="/images/main/icon1.png" alt="자기주도성" className="w-[67px] h-[70px] mb-4" />
            <p className="text-xl mb-4 font-semibold text-white" style={{textShadow: '0 1px 8px rgba(0,0,0,0.7)'}}>자기주도성</p>
            <p className="text-lg text-gray-100 mt-2" style={{textShadow: '0 1px 8px rgba(0,0,0,0.7)'}}>나의 커리어를 직접 설계하고, <br />만들어갈 수 있습니다.</p>
          </div>
          {/* 협력성 카드 */}
          <div className="flex flex-col items-center">
            <img src="/images/main/icon2.png" alt="협력성" className="w-[130px] h-[57px] mb-4" />
            <p className="text-xl mb-7 font-semibold text-white" style={{textShadow: '0 1px 8px rgba(0,0,0,0.7)'}}>협력성</p>
            <p className="text-lg text-gray-100 mt-2" style={{textShadow: '0 1px 8px rgba(0,0,0,0.7)'}}>동료들과 개발 고민을 공유하며, <br />함께 협력하고 성장솔루션을 찾아볼 수 있습니다.</p>
          </div>
          {/* 가능성 카드 */}
          <div className="flex flex-col items-center">
            <img src="/images/main/icon3.png" alt="가능성" className="w-[63px] h-[70px] mb-4" />
            <p className="text-xl mb-4 font-semibold text-white" style={{textShadow: '0 1px 8px rgba(0,0,0,0.7)'}}>가능성</p>
            <p className="text-lg text-gray-100 mt-2" style={{textShadow: '0 1px 8px rgba(0,0,0,0.7)'}}>자신이 꿈꾸던 IT 서비스를 <br /> 구현하는 기회가 제공됩니다.</p>
          </div>
        </div>

        {/* 하단 모토 문구 */}
        <p className='pt-5 text-[22px] mt-[40px] text-white' style={{textShadow: '0 1px 8px rgba(0,0,0,0.7)'}}> 
            <span className="font-semibold text-white">"내 아이디어를 내 손으로 실현한다."</span>
            <span className='font-thin text-white'>라는 모토를 가지고,</span> <br />
            <span className="font-thin text-white">실제 서비스를 구현하며 개발자의 꿈을 이루는데</span><br />
            <span className="font-thin text-white">한걸음 더 다가가고자 합니다.</span><br />
        </p>
      </div>
    </div>
  );
};

export default Main2;
 