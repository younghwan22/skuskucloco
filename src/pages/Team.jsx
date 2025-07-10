import React, { useState } from "react";

// 멤버 데이터
const members = [
  // 13기
  {
    id: 1,
    name: "한민규",
    department: "컴퓨터공학과 21",
    role: "대표",
    position: "백엔드",
    generation: "13기",
    image: "/images/person/한민규.png",
  },
  {
    id: 2,
    name: "신민서",
    department: "미디어소프트웨어학과 22",
    role: "부대표",
    position: "프론트엔드",
    generation: "13기",
    image: "/images/person/신민서.png",
  },
  {
    id: 3,
    name: "최유정",
    department: "미디어소프트웨어학과 21",
    role: "FE 파트장",
    position: "프론트엔드",
    generation: "13기",
    image: "/images/person/최유정.png",
  },
  {
    id: 4,
    name: "박준범",
    department: "컴퓨터공학과 20",
    role: "BE 파트장",
    position: "백엔드",
    generation: "13기",
    image: "/images/person/박준범.png",
  },
  {
    id: 5,
    name: "서민주",
    department: "관광학과 22",
    role: "디자인 파트장",
    position: "디자인",
    generation: "13기",
    image: "/images/person/서민주.png",
  },
  {
    id: 6,
    name: "권오현",
    department: "컴퓨터공학과 23",
    role: "운영진",
    position: "백엔드",
    generation: "13기",
    image: "/images/person/권오현.png",
  },
  {
    id: 7,
    name: "이호연",
    department: "미디어소프트웨어학과 21",
    role: "운영진",
    position: "프론트엔드",
    generation: "13기",
    image: "/images/person/이호연.png",
  },
  {
    id: 8,
    name: "오한솔",
    department: "관광학과 22",
    role: "운영진",
    position: "디자인",
    generation: "13기",
    image: "/images/person/오한솔.png",
  },
  {
    id: 9,
    name: "노주희",
    department: "미디어소프트웨어학과 22",
    role: "운영진",
    position: "백엔드",
    generation: "13기",
    image: "/images/person/노주희.png",
  },
  {
    id: 10,
    name: "구혜원",
    department: "미디어소프트웨어학과 22",
    role: "운영진",
    position: "프론트엔드",
    generation: "13기",
    image: "/images/person/구혜원.png",
  },

  // 12기
  {
    id: 11,
    name: "노승희",
    department: "미디어소프트웨어학과 20",
    role: "대표",
    position: "프론트엔드",
    generation: "12기",
    image: "/images/person/노승희.png",
  },
  {
    id: 12,
    name: "정택원",
    department: "컴퓨터공학과 19",
    role: "부대표",
    position: "백엔드",
    generation: "12기",
    image: "/images/person/정택원.png",
  },
  {
    id: 13,
    name: "고창준",
    department: "컴퓨터공학과 19",
    role: "FE 파트장",
    position: "프론트엔드",
    generation: "12기",
    image: "/images/person/고창준.png",
  },
  {
    id: 14,
    name: "남민지",
    department: "컴퓨터공학과 21",
    role: "BE 파트장",
    position: "백엔드",
    generation: "12기",
    image: "/images/person/남민지.png",
  },
  {
    id: 15,
    name: "이원경",
    department: "국어국문학과 22",
    role: "기획/디자인 파트장",
    position: "기획",
    generation: "12기",
    image: "/images/person/이원경.png",
  },
  {
    id: 16,
    name: "문호주",
    department: "컴퓨터공학과 19",
    role: "운영진",
    position: "백엔드",
    generation: "12기",
    image: "/images/person/문호주.png",
  },
  {
    id: 17,
    name: "김영현",
    department: "컴퓨터공학과 19",
    role: "운영진",
    position: "프론트엔드",
    generation: "12기",
    image: "/images/person/김영현.png",
  },
  {
    id: 18,
    name: "한민규",
    department: "컴퓨터공학과 21",
    role: "운영진",
    position: "백엔드",
    generation: "12기",
    image: "/images/person/한민규.png",
  },
  {
    id: 19,
    name: "신민서",
    department: "미디어소프트웨어학과 22",
    role: "운영진",
    position: "프론트엔드",
    generation: "12기",
    image: "/images/person/신민서.png",
  },
  {
    id: 20,
    name: "서민주",
    department: "관광개발학과 22",
    role: "운영진",
    position: "UX/UI 디자인",
    generation: "12기",
    image: "/images/person/서민주.png",
  },
  {
    id: 21,
    name: "오한솔",
    department: "관광개발학과 22",
    role: "운영진",
    position: "운영",
    generation: "12기",
    image: "/images/person/오한솔.png",
  },

  // 11기
  {
    id: 22,
    name: "김현준",
    department: "산업경영공학과 17",
    role: "대표",
    position: "프론트엔드",
    generation: "11기",
    image: "/images/person/김현준.png",
  },
  {
    id: 23,
    name: "주영민",
    department: "미디어소프트웨어학과 17",
    role: "부대표",
    position: "백엔드",
    generation: "11기",
    image: "/images/person/주영민.png",
  },
  {
    id: 24,
    name: "천민우",
    department: "컴퓨터공학과 19",
    role: "운영진",
    position: "백엔드",
    generation: "11기",
    image: "/images/person/천민우.png",
  },
  {
    id: 25,
    name: "정택원",
    department: "컴퓨터공학과 19",
    role: "운영진",
    position: "백엔드",
    generation: "11기",
    image: "/images/person/정택원.png",
  },
  {
    id: 26,
    name: "남민지",
    department: "컴퓨터공학과 21",
    role: "운영진",
    position: "백엔드",
    generation: "11기",
    image: "/images/person/남민지.png",
  },
  {
    id: 27,
    name: "노승희",
    department: "미디어소프트웨어학과 20",
    role: "운영진",
    position: "프론트엔드",
    generation: "11기",
    image: "/images/person/노승희.png",
  },
  {
    id: 28,
    name: "이원경",
    department: "국어국문학과 22",
    role: "운영진",
    position: "기획",
    generation: "11기",
    image: "/images/person/이원경.png",
  },
];


// Team 컴포넌트: 세대별 멤버 필터링 및 렌더링
function Team() {
  const [filter, setFilter] = useState("13기"); // 현재 선택된 세대 상태

  // 선택된 세대에 맞는 멤버만 필터링
  const filteredMembers = members.filter(
    (member) => member.generation === filter
  );

  return (
    <div className="min-h-screen bg-black text-white px-6 pt-28 pb-24 tracking-tighter">
      {/* 제목 영역 */}
      <div className="text-center text-6xl font-extrabold text-[#3B79FF] fontEB">
        LIKELION SKU
        <div className="text-white mt-4 text-6xl">운영진</div>
      </div>

      {/* 세대 필터 버튼 그룹 */}
      <div className="flex justify-center gap-20 mt-10 text-lg font-bold fontEB">
        {["13기", "12기", "11기"].map((gen) => (
          <button
            key={gen}
            onClick={() => setFilter(gen)} // 클릭 시 필터 변경
            className={`pb-1 border-b-2 transition-all duration-200 ${
              filter === gen
                ? "text-white font-bold border-white" // 활성화된 버튼 스타일
                : "text-gray-400 border-transparent" // 비활성화 버튼 스타일
            }`}
          >
            {gen}
          </button>
        ))}
      </div>

      {/* 멤버 카드 그리드 */}
      <div className="mt-12 flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-8">
          {filteredMembers.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center justify-center w-full max-w-xs sm:w-48 bg-neutral-50 rounded-2xl p-4 shadow"
            >
              {/* 멤버 이미지 */}
              <img
                src={member.image}
                alt={member.name}
                className="object-contain rounded w-24 h-24 mx-auto"
              />

              {/* 이름 + 로고 */}
              <div className="flex items-center justify-center mt-4 whitespace-nowrap">
                <img
                  src="/images/logo.png"
                  alt="logo"
                  className="w-6 h-6 mr-2"
                />
                <span className="text-[16px] text-black fontEB font-extrabold">
                  {member.name}
                </span>
              </div>

              {/* 학과 + 직책 */}
              <p className="text-[13px] text-black fontEB font-bold leading-[1.1rem] text-center mt-1">
                {member.department}
                <br />
                {member.role}
              </p>

              {/* 구분선 */}
              <div className="border-t-2 border-[#3B79FF] w-24 mt-3 mb-1" />

              {/* 포지션 */}
              <p className="text-[14px] fontEB font-bold text-[#3B79FF]">
                {member.position}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
