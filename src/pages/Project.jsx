// React와 useState 훅을 가져옵니다.
import React, { useState } from "react";

// 프로젝트 데이터 배열입니다. 각 객체는 하나의 프로젝트를 나타냅니다.
const projects = [
  {
    id: 1, // 고유 ID
    title: "Page", // 프로젝트 제목
    description: "2025년 동아리 연합회 웹사이트", // 프로젝트 설명
    image: "assets/images/main/PAGE.png", // 프로젝트 이미지 경로
    generation: "13기", // 참여 기수
  },
  {
    id: 2,
    title: "퍼즐 물품 대여 서비스",
    description: "동아리원들의 편의성 확대",
    image: "assets/images/main/PUZZLE.png",
    generation: "12기",
  },
  {
    id: 3,
    title: "보궐선거",
    description: "입후보자 확인 및 투표 독려",
    image: "assets/images/main/VOTE.png",
    generation: "12기",
  },
  {
    id: 4,
    title: "새로운 안녕 문화 HOLA!",
    description: "2024 신입생 오리엔테이션",
    image: "assets/images/main/HOLA.png",
    generation: "12기",
  },
  {
    id: 5,
    title: "2024 총선거",
    description: "입후보자 확인 및 투표 독려",
    image: "assets/images/main/election.png",
    generation: "11기",
  },
  {
    id: 6,
    title: "글LOVER",
    description: "2023 글천절",
    image: "assets/images/main/LOVER.png",
    generation: "11기",
  },
  {
    id: 7,
    title: "파동",
    description: "2023 영암체전",
    image: "assets/images/main/WAVE.png",
    generation: "11기",
  },
  {
    id: 8,
    title: "SKETCH VILLAGE",
    description: "2023 동아리 페스티벌",
    image: "assets/images/main/village.png",
    generation: "11기",
  },
  {
    id: 9,
    title: "졸업학점계산기",
    description: "졸업요건 확인",
    image: "assets/images/main/END.png",
    generation: "11기",
  },
  {
    id: 10,
    title: "POOL:US",
    description: "2023 영암축전",
    image: "assets/images/main/POOLUS.png",
    generation: "11기",
  },
];

// Project 컴포넌트 정의
const Project = () => {
  // 'filter'라는 상태 변수를 선언하고, 초기값을 "전체"로 설정합니다.
  // setFilter 함수를 사용하여 이 상태를 업데이트할 수 있습니다.
  const [filter, setFilter] = useState("전체");

  // 필터링된 프로젝트 목록을 계산합니다.
  // 'filter' 상태가 "전체"이면 모든 프로젝트를 보여주고,
  // 그렇지 않으면 해당 기수의 프로젝트만 필터링하여 보여줍니다.
  const filteredProjects =
    filter === "전체"
      ? projects
      : projects.filter((p) => p.generation === filter);

  // 컴포넌트의 JSX를 반환합니다.
  return (
    // 전체 페이지 컨테이너
    <div className="min-h-screen flex flex-col bg-black text-white  ">
      <div className=" w-10/12 mx-auto pt-28">
        {/* 전체 콘텐츠 컨테이너 */}
        <div className="w-10/12 mx-auto lg:container lg:px-5 lg:mb-24">
          {/* 제목 영역 */}
          <div className="pb-4 mx-auto text-6xl text-center fontEB font-black md:w-fit md:pb-12 md:pr-20 md:border-b-2 md:text-start md:mx-0">
            <div className="text-[#3B79FF]">SKU LIKELION</div>
            <div className="text-white">PROJECT</div>
          </div>

          {/* 필터 버튼 영역 */}
          <div className="mt-6 flex flex-wrap gap-6 justify-center md:justify-start text-center md:text-start font-16px">
            {/* 기수 목록을 순회하며 필터 버튼을 생성합니다. */}
            {["전체", "13기", "12기", "11기"].map((gen) => (
              <button
                key={gen} // 각 버튼에 고유한 key를 부여합니다.
                onClick={() => setFilter(gen)} // 버튼 클릭 시 'filter' 상태를 업데이트합니다.
                // 현재 필터와 버튼의 기수가 같으면 활성화 스타일을, 그렇지 않으면 비활성화 스타일을 적용합니다.
                className={`pb-1 border-b-3 ${
                  filter === gen
                    ? "border-white text-white font-bold"
                    : "border-transparent text-white"
                } transition-colors`}
              >
                {gen}
              </button>
            ))}
          </div>

          {/* 프로젝트 카드 그리드 */}
          <div className="grid w-full grid-cols-1 gap-8 mt-8 text-white md:gap-16 sm:grid-cols-2 sm:w-full lg:grid-cols-3">
            {/* 필터링된 프로젝트 목록을 순회하며 각 프로젝트 카드를 렌더링합니다. */}
            {filteredProjects.map((proj) => (
              <div
                key={proj.id} // 각 카드에 고유한 key를 부여합니다.
                className="w-full cursor-pointer md:w-full rounded-xl p-6 transition-transform duration-500 hover:-translate-y-1 group"
              >
                {/* 프로젝트 이미지 컨테이너 */}
                <div className="relative w-full aspect-[372/262] rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1">
                  {/* 프로젝트 이미지 */}
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:brightness-75"
                  />
                  {/* 마우스 호버 시 나타나는 "사이트 보러가기" 버튼 */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/20">
                    <span className="text-base sm:text-lg text-white bg-blue-500 rounded-lg font-bold px-4 py-2">
                      사이트 보러가기
                    </span>
                  </div>
                </div>
                {/* 프로젝트 제목 */}
                <h3 className="text-2xl font-bold mt-4 mb-2">{proj.title}</h3>
                {/* 프로젝트 설명 */}
                <p className="text-base text-gray-300">{proj.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Project 컴포넌트를 내보냅니다.
export default Project;