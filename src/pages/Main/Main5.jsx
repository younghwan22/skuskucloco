import React, { useEffect, useRef, useState } from 'react';

const projects = [
  { title: '2024 총선거', subtitle: '입후보자 확인 및 투표 독려', image: '/images/main/VOTE.png', href: 'https://vote2024.sku-sku.com/by-election' },
  { title: '글LOVER', subtitle: '2023 글철전', image: '/images/main/LOVER.png',href:'https://glover.sku-sku.com/' },
  { title: '파동', subtitle: '2023 영암축전', image: '/images/main/WAVE.png',href:'https://wave-renew.sku-sku.com/' },
  { title: 'SKETCH VILLAGE', subtitle: '2023 동아리 페스티벌', image: '/images/main/village.png',href:'https://sketch39.sku-sku.com/' },
  { title: '졸업학점계산기', subtitle: '졸업요건 확인', image: '/images/main/END.png',href:'https://gcc.sku-sku.com/' },
  { title: 'Page', subtitle: '2025 동아리 연합회 웹사이트', image: '/images/main/PAGE.png',href:'https://page.sku-sku.com/' },
  { title: 'POOL:US', subtitle: '2023 영암축전', image: '/images/main/POOLUS.png',href:'https://poolus.sku-sku.com/' },
  { title: '퍼즐 물품 대여 서비스', subtitle: '동아리원들의 편의성 확대', image: '/images/main/PUZZLE.png',href:'https://sku-sku.com/project' },
  { title: '새로운 안녕 올라  HOLA!', subtitle: '20204 신입생 오리엔테이션', image: '/images/main/HOLA.png',href:'https://welcome-hola.sku-sku.com/' },
  { title: '보궐선거', subtitle: '입호부자 확인 및 투표 독려', image: '/images/main/election.png',href:'https://vote2024.sku-sku.com/by-election' },
];

const visible = 3;
const cardWidth = 340;
const cardGap = 40;

const Main5 = () => {
  const [index, setIndex] = useState(visible);
  const slideRef = useRef(null);
  const transitionTime = 500; // ms

  const extendedProjects = [
    ...projects.slice(-visible),
    ...projects,
    ...projects.slice(0, visible),
  ];

  // 무한 캐러셀 타이머
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => prev + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // 무한 캐러셀 트릭
  useEffect(() => {
    if (!slideRef.current) return;
    if (index === extendedProjects.length - visible) {
      // 마지막에서 transition 끝나고 바로 visible로 점프
      setTimeout(() => {
        if (slideRef.current) {
          slideRef.current.style.transition = 'none';
          slideRef.current.style.transform = `translateX(-${visible * (cardWidth + cardGap)}px)`;
        }
        setIndex(visible);
      }, transitionTime);
    } else {
      slideRef.current.style.transition = `transform ${transitionTime}ms cubic-bezier(0.4,0,0.2,1)`;
      slideRef.current.style.transform = `translateX(-${index * (cardWidth + cardGap)}px)`;
    }
  }, [index, extendedProjects.length]);

  return (
    <div className='bg-black text-white relative w-full min-h-screen'>
      <div className='flex items-center justify-center flex-col py-10'>
        <p className='text-7xl font-extrabold text-[#3B79FF] mb-4'>PROJECTS</p>
        <p className='text-xl'>성결대학교 멋쟁이사자처럼과 함께한 프로젝트들을 소개합니다.</p>
      </div>
      <div className='overflow-hidden mx-auto' style={{ maxWidth: visible * cardWidth + (visible - 1) * cardGap }}>
        <div
          ref={slideRef}
          className='flex'
          style={{
            width: `${extendedProjects.length * (cardWidth + cardGap) - cardGap}px`,
            gap: `${cardGap}px`,
          }}
        >
          {extendedProjects.map((project, i) => (
            <a
              key={i + project.title}
              href={project.href || '#'}
              target={project.href ? "_blank" : undefined}
              rel={project.href ? "noopener noreferrer" : undefined}
              style={{ width: cardWidth, display: 'block' }}
              className='flex-shrink-0'
            >
              <div className="relative w-[350px] h-[270px] rounded-2xl overflow-hidden shadow-lg">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                  <p className="text-3xl font-extrabold text-white mb-2">{project.title}</p>
                  <p className="text-lg text-white font-normal">{project.subtitle}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main5;
