import React from 'react';


const FrontEnd = () => {
    return (
        
            <div id='root'>
                <div className='min-h-screen bg-black text-white'>
                    <div className='min-h-screen APP'>
        <div className='container flex justify-center w-10/12 pt-20 mx-auto lg:mb-36 lg:min-h-screen
        flex-col lg:flex-row items-center lg:items-start text-center lg:text-left'>
        <div className='partContent'>
        <div className='pt-10'>
            <span className='text-[#FF7816] font-semibold text-6xl'>
                FRONT-END
            </span>
            <br />
            <span className='text-[#FFD7BA] font-semibold text-6xl'>
                CURRICULUM
            </span>
        </div>

        <div className='py-24'>
            <ul className='flex justify-between w-[426px] mb-2 items-center'>
                <li className='w-[95.6px] text-center text-xl font-thin whitespace-nowrap'>JavaScript</li>
                <li className='w-[95.6px] text-center text-xl font-thin whitespace-nowrap'>React</li>
                <li className='w-[95.6px] text-center text-xl font-thin whitespace-nowrap'>TypeScrip</li>
            </ul>
            <img src="/images/track/frontLine.png" alt="front_curriculum" className='w-[426px]' />
        </div>

        <div className='text-lg leading-8 font-light whitespace-nowrap'>
            <span className='text-2xl font-bold'>프론트엔드</span>는 <br />
            웹 애플리케이션 또는 모바일 앱의 사용자 인터페이스를 담당하는 부분입니다.<br/>
            사용자가 상호작용하는 화면을 구성하고 사용자 경험을 개선합니다.<br/>
            HTML, CSS, JavaScript를 사용하여 웹 페이지를 디자인하고 개발하며,<br/>
            사용자의 요청과 상호작용을 처리하고 화면에 표시합니다.<br/><br/>
            프론트엔드는 주로 웹 브라우저에서 실행되며,<br/>
            사용자가 직접 보는 부분으로, 시각적인 디자인과 사용자 경험에 중점을 둡니다.<br/>
        </div>
        
        
        </div>
        <div className="w-1/2 h-[600px] bg-[url('/images/track/frontend_background.png')] bg-no-repeat bg-center bg-contain"></div>
        </div>
                </div>
            </div>

        </div>
  
    );
};

export default FrontEnd;