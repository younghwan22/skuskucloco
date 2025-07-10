import React from 'react';
import useInView from './useInView';

const Main4 = () => {
    const [ref, inView] = useInView({ threshold: 0.2 });
    return (
        <div
            ref={ref}
            className={`min-h-screen bg-black text-white relative w-full transition-all duration-1000`}
        >
            {/* 검정 오버레이 (inView에 따라 트랜지션) */}
            <div className={`absolute inset-0 bg-black z-20 transition-all duration-1000 pointer-events-none ${inView ? 'opacity-0' : 'opacity-100'}`} />
            <div className='flex items-center justify-center flex-col relative z-10'>
                <p className='text-7xl text-[72px] font-extrabold text-[#3B79FF] mt-[200px]'> TRACKS</p>
                <p><br />멋쟁이사자처럼에서 각 트랙별로 세분화된 교육과 경험을 제공합니다.</p>
            </div>
            <div className='container mx-auto xl:w-full xl:px-0 relative z-10'>
                <div className="grid w-[90%] grid-cols-1 gap-8 xl:grid-cols-3 mt-7 mx-auto">
                    {/* 프론트엔드 */}
                    <button className="relative group flex flex-col justify-between mx-auto w-[89%] h-[14rem] text-white rounded-md bg-[#666666] hover:bg-[#EE7117] transition-colors duration-300 ">
                        <div className="flex justify-between w-full h-full">
                            <div className="pb-5 pl-8 text-start mr-5">
                                <div className="group-hover:hidden">
                                    <p className="pt-16 text-[36px] font-bold">프론트엔드</p>
                                    <p className="text-[36px] font-bold">FRONT-END</p>
                                    <img src="images/main/arrowM.png" className="absolute bottom-0 right-0 w-6 h-6 mr-5 mb-5" alt="" />
                                </div>
                                <div className="absolute inset-0 hidden group-hover:flex flex-col justify-between pl-8 pr-5 py-5">
                                    <div>
                                        <a href="https://sku-sku.com/frontend" target="_blank" rel="noopener noreferrer">
                                            <p className="text-[30px] font-semibold pt-3">프론트엔드</p>
                                            <p className="text-[30px] font-bold">FRONT-END</p>
                                            <p className="mt-2 text-sm">
                                                웹사이트의 얼굴 <br /> 사용자가 시각적으로 <br />볼 수 있는 영역을 담당합니다.</p>
                                        </a>
                                    </div>
                                    <img
                                        src="images/main/arrowB.png"
                                        className="w-6 h-6 self-end"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </button>
                    {/* 백엔드 */}
                    <button className="relative group flex flex-col justify-between mx-auto w-[89%] h-[14rem] text-white rounded-md bg-[#666666] hover:bg-[#40ACBB] transition-colors duration-300 ">
                        <div className="flex justify-between w-full h-full">
                            <div className="pb-5 pl-8 text-start mr-5">
                                <div className="group-hover:hidden">
                                    <p className="pt-16 text-[36px] font-bold">백엔드</p>
                                    <p className="text-[36px] font-bold">BACK-END</p>
                                    <img src="images/main/arrowM.png" className="absolute bottom-0 right-0 w-6 h-6 mr-5 mb-5" alt="" />
                                </div>
                                <div className="absolute inset-0 hidden group-hover:flex flex-col justify-between pl-8 pr-5 py-5">
                                    <div>
                                        <a href="https://sku-sku.com/backend" target="_blank" rel="noopener noreferrer">
                                            <p className="text-[30px] font-semibold pt-3">백엔드</p>
                                            <p className="text-[30px] font-bold">BACK-END</p>
                                            <p className="mt-2 text-sm">
                                                웹사이트의 두뇌 <br /> 서버 및 데이터 처리 영역을 담당합니다.</p>
                                        </a>
                                    </div>
                                    <img
                                        src="images/main/arrowB.png"
                                        className="w-6 h-6 self-end"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </button>
                    {/* 디자인 */}
                    <button className="relative group flex flex-col justify-between mx-auto w-[89%] h-[14rem] text-white rounded-md bg-[#666666] hover:bg-[#FF6F91] transition-colors duration-300 ">
                        <div className="flex justify-between w-full h-full">
                            <div className="pb-5 pl-8 text-start mr-5">
                                <div className="group-hover:hidden">
                                    <p className="pt-16 text-[36px] font-bold">디자인</p>
                                    <p className="text-[36px] font-bold">DESIGN</p>
                                    <img src="images/main/arrowM.png" className="absolute bottom-0 right-0 w-6 h-6 mr-5 mb-5" alt="" />
                                </div>
                                <div className="absolute inset-0 hidden group-hover:flex flex-col justify-between pl-8 pr-5 py-5">
                                    <div>
                                        <a href="https://sku-sku.com/pm_design" target="_blank" rel="noopener noreferrer">
                                            <p className="text-[30px] font-semibold pt-3">디자인</p>
                                            <p className="text-[30px] font-bold">DESIGN</p>
                                            <p className="mt-2 text-sm">
                                                웹사이트의 첫 걸음, 프로젝트 총괄 <br /> 및 웹/앱 서비스 화면 디자인 영역을 <br />담당합니다.</p>
                                        </a>
                                    </div>
                                    <img
                                        src="images/main/arrowB.png"
                                        className="w-6 h-6 self-end"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Main4;