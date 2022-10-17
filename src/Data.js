const profile = {
  name: "Kim Mi Seon",
  email: "miseon920@naver.com",
  tel: "https://open.kakao.com/me/Su_ny",
  blog: "https://msweb.tistory.com",
  github: "https://github.com/miseon920",
};

const portfolio = [
  {
    id: 1,
    title: "RESUME",
    content: ["Experience", "Education", "Frontend"],
  },
  {
    id: 2,
    title: "PROJECT",
    content: [
      {
        id: 1,
        stit: "영화사이트",
        slink: "https://miseon920.github.io/disney/",
        color: ["#016cf9"],
        skill: "Html5,Css3,Javascript,React,Node.js",
        info: "react로 제작한 영화사이트",
        work: "프론트엔드 (100%) / 반응형 홈페이지",
        etc: ["searchParams 이용하여 url 설정"],
      },
      {
        id: 2,
        stit: "ToDo List",
        slink: "https://tjbf4q.csb.app/",
        color: ["#d83d96"],
        skill: "Html5,Css3,Scss,Javascript,React,Node.js",
        info: "react로 제작한 todolist사이트",
        work: "프론트엔드 (100%)",
        etc: ["Local Storage를 이용한 데이터 저장"],
      },
      {
        id: 3,
        stit: "네오바이오텍",
        slink: "https://neobiotech.co.kr/",
        color: ["#d83d96"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap, 그누보드",
        info: "임플란트 제조 및 판매 사이트",
        work: "퍼블리싱 (100%) - 하드코딩진행 / 반응형 홈페이지",
        etc: ["지디웹 디자인 어워즈 대상 수상"],
      },
      {
        id: 4,
        stit: "캠핑스테이",
        slink: "http://www.campingstay.co.kr/",
        color: ["#1fb380", "#05afc0"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap",
        info: "캠핑장 소개 및 캠핑용품 대여 홈페이지",
        work: "퍼블리싱 (100%) - 비반응형 홈페이지",
        etc: [
          "에어비앤비 검색 바를 참조한 작업",
          "웹과 모바일 홈페이지가 분리된 적응형 홈페이지",
          "프론트단은 완료이나 백단은 작업 진행중",
        ],
      },
      {
        id: 5,
        stit: "조은맘",
        slink: "http://xn--xz2b58vb0a.com/",
        color: ["#fecc00"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap, 그누보드",
        info: "산후도우미 기타 개인 서비스업",
        work: "퍼블리싱 (100%) - 하드코딩진행 / 비반응형 홈페이지",
        etc: ["웹페이지와 모바일 페이지가 분리되어져 있는 적응형 홈페이지"],
      },
      {
        id: 6,
        stit: "몽키VPN",
        slink: "https://mongvpn.net",
        color: ["#ffd739"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap",
        info: "모든유형의 VPN접속을 사용할 수 있는  VPN 소개",
        work: "퍼블리싱 (100%) - 반응형 홈페이지",
        etc: ["캔버스 효과 적용", "다국어 페이지 작업"],
      },
      {
        id: 7,
        stit: "알리고",
        slink: "https://app.alrigo.co.kr/",
        color: ["#31a5ff"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap, 그누보드",
        info: "영업인의 필수 자동콜백,자동문자 앱 소개 홈페이지",
        work: "퍼블리싱 (100%) - 반응형 홈페이지",
        etc: ["원페이지 형식 / 페이지 이동없이 섹션이 바뀌는 형식"],
      },
      {
        id: 8,
        stit: "다니엘 앤 제시카",
        slink: "http://xn--xz2b58vb0a.com/",
        color: ["#e2c597"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap",
        info: "본능을 자극하는 향수 DANIEL&JESSICA",
        work: "퍼블리싱 (100%) - 하드코딩진행 / 반응형 홈페이지",
        etc: [
          "회사 자체 개발 쇼핑몰 홈페이지",
          "메인 비주얼 유튜브 동영상 컨트롤링",
          "제품 구매 상세 페이지 가격 계산 스크립트 작성",
        ],
      },
      {
        id: 9,
        stit: "브릴린 의원",
        slink: "http://www.brillynclinic.com/",
        color: ["#a7924f"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap, 그누보드",
        info: "삼성역 코엑스 피부과, 브릴린의원",
        work: "퍼블리싱 (100%) - 반응형 홈페이지",
        etc: ["메인 섹션별 애니메이션 적용"],
      },
      {
        id: 10,
        stit: "해법에듀",
        slink: "http://xn--xz2b58vb0a.com/",
        color: ["#00a650"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap, 그누보드",
        info: "천재교육이 만든 교육 프랜차이즈 점유율 1위, 해법에듀",
        work: "퍼블리싱 (100%) - 반응형 홈페이지",
        etc: ["가맹점 찾기에 위치기반 지도플러그인 삽입"],
      },
      {
        id: 11,
        stit: "다이퀘스트",
        slink: "https://www.diquest.com/",
        color: ["#00afec"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap, 그누보드",
        info: "NHN다이퀘스트 인공지능&빅데이터 솔루션",
        work: "퍼블리싱 (100%) - 반응형 홈페이지",
        etc: ["고객사와 프로젝트 수 카운팅 효과"],
      },
      {
        id: 12,
        stit: "가산프라스틱",
        slink: "http://gasanpvc.com/",
        color: ["#0e388c"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap, 그누보드, 영카트",
        info: "PVC 파이프 부속류, PB 파이프 부속류, PE 파이프 부속류 외 배관자재 전문 판매점",
        work: "퍼블리싱 (100%) - 반응형 홈페이지",
        etc: ["좌측메뉴 디자인"],
      },
      {
        id: 13,
        stit: "도키도키",
        slink: "https://dokidoki-japan.com/",
        color: ["#34396a"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap, 그누보드, 영카트",
        info: "일본직구 쇼핑몰",
        work: "퍼블리싱 (100%) - 반응형 홈페이지",
        etc: ["전체메뉴 3depth 형식 / 영카트 이용"],
      },
      {
        id: 14,
        stit: "펫토랑",
        slink: "https://petorang.com/",
        color: ["#034223"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap, 그누보드, 영카트",
        info: "강아지수제간식 쇼핑몰",
        work: "퍼블리싱 (100%) - 반응형 홈페이지",
        etc: ["쇼핑몰 홈페이지 / 영카트 이용"],
      },
      {
        id: 15,
        stit: "포스트테일러",
        slink: "http://www.posttailor.com/",
        color: ["#c4424d"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap, 그누보드",
        info: "광고물 문안, 도안, 설계 사이트",
        work: "퍼블리싱 (100%) - 반응형 홈페이지",
        etc: ["settimeout을 이용한 애니메이션 효과,tab안에 동영상 삽입"],
      },
    ],
  },

  {
    id: 3,
    title: "CONTACT",
  },
];

export { profile, portfolio };
