import React from 'react';

const Design = () => {
    return (
            <div id='root'>
                <div className='min-h-screen bg-black text-white'>
                    <div className='min-h-screen APP'>
        <div className='container flex  justify-center w-10/12 pt-20 mx-auto lg:mb-36 lg:min-h-screen
        flex-col lg:flex-row items-center lg:items-start text-center lg:text-left'>
        <div className='partContent'>
        <div className='pt-10'>
            <span className='text-[#FF669D] font-extrabold text-6xl'>
                DESIGN
            </span>
            <br />
            <span className='text-[#FFBFD6] fontSB text-6xl'>
                CURRICULUM
            </span>
        </div>

        <div className='py-24 lg:py-32 container'>
            <ul className='flex justify-between w-[512px] mb-2 items-center'>
                <li className='w-[90px] text-center text-lg font-thin whitespace-nowrap'>UX/UI 교육</li>
                <li className='w-[90px] text-center text-lg font-thin whitespace-nowrap'>Figma 교육</li>
                <li className='w-[90px] text-center text-lg font-thin whitespace-nowrap'>웹/앱 디자인</li>
                <li className='w-[90px] text-center text-lg font-thin whitespace-nowrap'>포트폴리오 제작</li>
            </ul>
            <img src="/images/track/pmLine.png" alt="track_pm_curri" className='w-[512px]' />
        </div>

        <div className='text-lg leading-8 font-light whitespace-nowrap'>
            <span className='text-2xl font-bold'>UX/UI 디자이너</span>는 <br />
            제품 또는 서비스의 사용자 경험을 개선하기 위해<br/>
            사용자 연구, 프로토타입 제작, 디자인 시스템 구축 등을 수행하며,<br/>
            직관적이고 효과적인 사용자 인터페이스(UI)를 설계하고 구현합니다.<br/>
        </div>
        
        </div>
        <div className="w-1/2 h-[600px] bg-[url('/images/track/pm_background.png')] bg-no-repeat bg-center bg-cover"></div>
        </div>
        
        </div>
        </div>
        </div>
    );
};

export default Design;