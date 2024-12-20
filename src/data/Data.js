const profile = {
  name: "Kim Mi Seon",
  email: "miseon920@gmail.com",
  tel: "https://open.kakao.com/me/Su_ny",
  blog: "https://msweb.tistory.com",
  github: "https://github.com/miseon920",
};

const portfolio = [
  {
    id: 1,
    title: "PROJECT",
    content: [
      {
        id: 0,
        stit: "팬더티비",
        slink: "https://www.pandalive.co.kr/live",
        color: ["#283252"],
        skill: "Vue,Nuxt,Node.js,Html5,Css3,Scss,Javascript",
        info: "Vue로 제작한 자사 플랫폼",
        work: "외부앱방송 프론트엔드 100%",
        etc: ["fetch를 이용하여 rest api 연결", "유지보수 및 추가 프론트작업 진행", "이벤트 페이지 퍼블리싱", "매니저모니터링 Vue3를 활용한 프론트작업", "방송하기 페이지 react컴포넌트 작업"],
      },
      {
        id: 1,
        stit: "영화사이트",
        slink: "https://miseon920.github.io/movie/",
        color: ["#016cf9"],
        skill: "Html5,Css3,Javascript,React,Node.js",
        info: "react로 제작한 영화사이트",
        work: "프론트엔드 (100%) / 반응형 홈페이지",
        etc: ["axios를 이용하여 데이터 연결", "usesearchParams 이용하여 url 설정"],
      },
      // {
      //   id: 2,
      //   stit: "ToDo List",
      //   slink: "https://tjbf4q.csb.app/",
      //   color: ["#d83d96"],
      //   skill: "Html5,Css3,Scss,Javascript,React,Node.js",
      //   info: "react로 제작한 todolist사이트",
      //   work: "프론트엔드 (100%)",
      //   etc: ["Local Storage를 이용한 데이터 저장"],
      // },
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
        etc: ["에어비앤비 검색 바를 참조한 작업", "웹과 모바일 홈페이지가 분리된 적응형 홈페이지", "프론트단은 완료이나 백단은 작업 진행중"],
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
        etc: ["회사 자체 개발 쇼핑몰 홈페이지", "메인 비주얼 유튜브 동영상 컨트롤링", "제품 구매 상세 페이지 가격 계산 스크립트 작성"],
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
      {
        id: 16,
        stit: "티오피미디어",
        slink: "http://www.itopgroup.com/",
        color: ["#e41b13"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap, 그누보드",
        info: "TOP MEDIA 엔터테이먼트 사이트",
        work: "퍼블리싱 - 반응형 홈페이지",
        etc: ["tab안에 게시판 삽입"],
      },
      {
        id: 17,
        stit: "경기항공 직업전문학교",
        slink: "http://katoc.or.kr/",
        color: ["#1365ac"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap, 그누보드",
        info: "경기항공직업전문학교 사이트",
        work: "퍼블리싱  - 비반응형 홈페이지",
        etc: ["온라인접수 폼작업"],
      },
      {
        id: 18,
        stit: "카탈리스트",
        slink: "http://katalyst.co.kr/",
        color: ["#b49f4d"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap, 그누보드",
        info: "이필립 브랜드 다국어 사이트",
        work: "퍼블리싱  - 반응형 홈페이지",
        etc: ["다국어 페이지 작업"],
      },
      {
        id: 19,
        stit: "풍배",
        slink: "https://nanofilm.kr/",
        color: ["#e4322b"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap, 그누보드",
        info: "나노썬팅, 자동차 윈도우 필름 렌탈 사이트",
        work: "퍼블리싱  - 반응형 홈페이지",
        etc: ["렌탈서비스 품질보증서 pdf으로 저장 후 다운기능"],
      },
      {
        id: 20,
        stit: "tqc",
        slink: "https://tqc.kr/",
        color: ["#dd211c"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap, 그누보드",
        info: "페인트물성시험기, 도막두께측정기 사이트",
        work: "퍼블리싱  - 반응형 홈페이지",
        etc: ["랜딩페이지 작업"],
      },
      {
        id: 21,
        stit: "포스트게놈",
        slink: "http://postgenome.kr/",
        color: ["#0d3e75"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap, 그누보드",
        info: "포스트게놈연구단 소개 사이트",
        work: "퍼블리싱(100%)  - 반응형 홈페이지",
        etc: ["기업페이지 작업"],
      },
      {
        id: 22,
        stit: "푸르네",
        slink: "http://ipurune.com/",
        color: ["#f08200"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap, 그누보드",
        info: "정원디자인, 정원시공, 정원교육, 정원문화 프로그램안내 사이트",
        work: "퍼블리싱 - 반응형 홈페이지",
        etc: ["홈페이지 3개가 있는 사이트"],
      },
      {
        id: 23,
        stit: "안국enc",
        slink: "http://haejangog.com/",
        color: ["#f36f20"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap, 그누보드",
        info: "소방설계 및 안전컨설팅 사이트",
        work: "퍼블리싱 - 반응형 홈페이지",
        etc: ["다국어 페이지 작업"],
      },
      {
        id: 24,
        stit: "위해준도",
        slink: "http://juntukorea.com/",
        color: ["#1664b7"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap, 그누보드",
        info: "중국 유통 전문 그룹인 성세홀딩스의 자회사",
        work: "퍼블리싱(100%) - 반응형 홈페이지",
        etc: ["기업 페이지 작업"],
      },
      {
        id: 25,
        stit: "scg 캠퍼니",
        slink: "https://tuc.co.kr/",
        color: ["#151515"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap, 그누보드",
        info: "캠핑장, 야구장, 축구장, 다목적구장, 스포츠체험시설 등을 갖춘 종합 스포츠테마파크",
        work: "퍼블리싱(100%) - 반응형 홈페이지",
        etc: ["메인 애니메이션", "캠핑장 예약하기 기능"],
      },
      {
        id: 26,
        stit: "에스로",
        slink: "http://srotech.co.kr/",
        color: ["#0aa2ca"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap, 그누보드",
        info: "온수난방 제품을 생산하는 기업",
        work: "퍼블리싱(100%) - 반응형 홈페이지",
        etc: ["기업홈페이지"],
      },
      {
        id: 27,
        stit: "이노에버",
        slink: "https://innoeversolution.com/kor/",
        color: ["#00489a"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap, 그누보드",
        info: "ERP 솔루션 컨설팅, 이외 RPA, MES 등 솔루션 컨설팅 및 교육 제공 기업",
        work: "퍼블리싱(100%) - 반응형 홈페이지",
        etc: ["기업홈페이지"],
      },
      {
        id: 28,
        stit: "하이드로소프트",
        slink: "https://hydrosoft.co.kr/",
        color: ["#2868b8"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap, 그누보드",
        info: "상하수도, 수자원, 환경분야 전문 소프트웨어",
        work: "퍼블리싱(100%) - 반응형 홈페이지",
        etc: ["tab안에 슬라이드, 상세페이지 리스트 슬라이트 토글"],
      },
      {
        id: 29,
        stit: "잠바나라",
        slink: "http://jambanara.co.kr/",
        color: ["#151515"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap, 그누보드 , 영카트",
        info: "야구잠바, 코치자켓, 항공점퍼, 돕바, 롱패딩, 조끼, 라운드, 카라티, 후드, 맨투맨  제작 및 판매",
        work: "퍼블리싱(100%) - 반응형 홈페이지",
        etc: ["영카트를 이용한 쇼핑몰 페이지"],
      },
      {
        id: 30,
        stit: "아이오네스",
        slink: "https://www.i-neoce.co.kr/",
        color: ["#333"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap, 그누보드 , 영카트",
        info: "리바트하움전시장, 리바트오피스전시장, 리바트사무용가구전시장 안내 및 가구 판매 사이트",
        work: "퍼블리싱(100%) - 반응형 홈페이지",
        etc: ["영카트를 이용한 쇼핑몰 페이지", "견적서비스 폼", "네이버톡톡 삽입"],
      },
      {
        id: 31,
        stit: "공감네트웍스",
        slink: "http://gonggami.com/",
        color: ["#99ce1e"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap, 그누보드 , 영카트",
        info: "이미용, 생활용품등 홈쇼핑채널 , 상품개발 및 온라인판매, 마케팅 전문 유통회사",
        work: "퍼블리싱(100%) - 반응형 홈페이지",
        etc: ["영카트를 이용한 쇼핑몰 페이지", "data를 이용한 이미지 호버 기능"],
      },
      {
        id: 32,
        stit: "ms그룹",
        slink: "http://ms-group.co.kr/",
        color: ["#2a71c3"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap, 그누보드",
        info: "가스, 가스엔지니어링, 가스종한센터인 ms그룹",
        work: "퍼블리싱(100%) - 반응형 홈페이지",
        etc: ["원페이지", "이미지맵을 이용한 링크이동", "다국어 페이지"],
      },
      {
        id: 33,
        stit: "광일",
        slink: "https://kwangil.co.kr/",
        color: ["#2a71c3"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap, 그누보드",
        info: "식품소재 선도기업 주식회사 광일",
        work: "퍼블리싱(100%) - 반응형 홈페이지",
        etc: ["제품소개 페이지 개발, 분류 클릭시 해당 설명으로 이동"],
      },
      {
        id: 34,
        stit: "에듀프레임",
        slink: "http://poweriwb.com/",
        color: ["#0068b7"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap, 그누보드",
        info: "4차 산업혁명에 최적화된 교육 솔루션 개발 기업",
        work: "퍼블리싱(100%) - 반응형 홈페이지",
        etc: ["기업 홈페이지"],
      },
      {
        id: 35,
        stit: "미지엄",
        slink: "http://imiseum.com/",
        color: ["#2f3481"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap, 그누보드",
        info: "커피와 디저트를 판매하는 디저트 카페",
        work: "퍼블리싱(100%) - 반응형 홈페이지",
        etc: ["기업 홈페이지"],
      },
      {
        id: 36,
        stit: "에버그린모터스",
        slink: "http://evermotors.com/",
        color: ["#00afd5", "#92c83e"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap, 그누보드",
        info: "우즈베키스탄, 우즈베키스탄 무역, 중앙아시아 무역, 우즈베키스탄 비즈니스, 우즈베키스탄 투자",
        work: "퍼블리싱(100%) - 반응형 홈페이지",
        etc: ["다국어 페이지", "전체 메뉴에 검색기능"],
      },
      {
        id: 37,
        stit: "강콜렉션",
        slink: "http://kstamp.kr/",
        color: ["#3267cb"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap, 그누보드, 영카트",
        info: "우표, 화폐, 금은화 , 금/골드바 전문 쇼핑몰",
        work: "퍼블리싱(100%) - 반응형 홈페이지",
        etc: ["전체메뉴 고정 및 좌측메뉴"],
      },
      {
        id: 38,
        stit: "주한우즈베키스탄",
        slink: "http://fs190305.dothome.co.kr/",
        color: ["#1ea376"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap, 그누보드",
        info: "사단법인 한-우즈벡 비즈니스 협회",
        work: "퍼블리싱(100%) - 반응형 홈페이지",
        etc: ["다국어 페이지"],
      },
      {
        id: 39,
        stit: "고세",
        slink: "https://go-cce.co.kr/",
        color: ["#000"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap, 그누보드, 영카트",
        info: "고세제화 홈페이지",
        work: "퍼블리싱(100%) - 반응형 홈페이지",
        etc: ["고세제화 쇼핑몰(https://go-cceshop.co.kr/)과 연동", "쇼핑몰 홈페이지도 함께 작업"],
      },
      {
        id: 40,
        stit: "일경산업",
        slink: "http://codenature.co.kr/",
        color: ["#108a59"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap, 그누보드",
        info: "신재생에너지, 태양광, 풍력, 바이오사업",
        work: "퍼블리싱(100%) - 반응형 홈페이지",
        etc: ["기업 홈페이지"],
      },
      {
        id: 41,
        stit: "덕산케미칼",
        slink: "http://codenature.co.kr/",
        color: ["#108a59"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap, 그누보드, 영카트",
        info: "화학 유통업체 덕산케미칼",
        work: "퍼블리싱(100%) - 반응형 홈페이지",
        etc: ["게시판과 상품을 연동"],
      },
      {
        id: 42,
        stit: "성우hs",
        slink: "http://www.swhs.kr/",
        color: ["#002b82"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap, 그누보드",
        info: "ICT 솔루션 제공 업체",
        work: "퍼블리싱(100%) - 반응형 홈페이지",
        etc: ["컨택명함 자회사 관리가능"],
      },
      {
        id: 43,
        stit: "오트리푸드빌리지",
        slink: "https://momcook.net/",
        color: ["#f08117", "#70645c"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap, 그누보드, 영카트",
        info: "고메넛츠,하루견과,오트리,고메넛츠시그니처,베리넛츠 판매",
        work: "퍼블리싱(100%) - 반응형 홈페이지",
        etc: ["영카트를 활용한 쇼핑몰"],
      },
      {
        id: 44,
        stit: "소울라인",
        slink: "http://souline.kr/",
        color: ["#1865a0"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap, 그누보드, 영카트",
        info: "모종 씨앗, 관엽식물, 다육 식묵 도소매 사이트",
        work: "퍼블리싱(100%) - 반응형 홈페이지",
        etc: ["영카트를 활용한 쇼핑몰"],
      },
      {
        id: 45,
        stit: "청유연",
        slink: "https://usfarm.co.kr/",
        color: ["#28752f"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap, 그누보드, 영카트",
        info: "신선한 제철채소 산지직송, 토마토, 사과토마토,배추,열무, 채소,과일,농수산물",
        work: "퍼블리싱(100%) - 반응형 홈페이지",
        etc: ["영카트를 활용한 쇼핑몰"],
      },
      {
        id: 46,
        stit: "바로출판사",
        slink: "https://baroschool.com/",
        color: ["#2b7565", "#4cb8a5"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap, 그누보드, 영카트",
        info: "교재판매 및 강의 사이트",
        work: "퍼블리싱(100%) - 반응형 홈페이지",
        etc: ["영카트를 활용한 쇼핑몰", "일반인과 수강자, 강사에 따라 게시판이 다른 홈페이지"],
      },
      {
        id: 47,
        stit: "랩스마트",
        slink: "http://labsmart.co.kr/",
        color: ["#2f3481"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap, 그누보드",
        info: "enterprise 솔루션을 제공하는 it 업체",
        work: "퍼블리싱(100%) - 반응형 홈페이지",
        etc: ["기업 홈페이지"],
      },
      {
        id: 48,
        stit: "규리인터네셔널",
        slink: "https://kr.laderach.com/",
        color: ["#d5b375"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap, 그누보드, 영카트",
        info: "레더라 초콜릿",
        work: "퍼블리싱(100%) - 반응형 홈페이지",
        etc: ["영카트를 이용한 쇼핑몰"],
      },
      {
        id: 49,
        stit: "후스틸",
        slink: "https://www.xn--6i0bt7tp9ozjc.com/",
        color: ["#d5b375"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap, 그누보드",
        info: "철근 도소매, 온라인 쇼핑 & 주문, 전국배송, 철근가공, 7대 제강사, 국산 KS, 중국산 KS, 일본산 KS",
        work: "퍼블리싱(100%) - 반응형 홈페이지",
        etc: ["주문하기 폼"],
      },
      {
        id: 50,
        stit: "탐정나라",
        slink: "http://detectivekorea.com",
        color: ["#2577ef"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap",
        info: "민간조사 통신판매중개플랫폼 회사",
        work: "하드코딩 퍼블리싱(100%) - 비반응형 홈페이지",
        etc: ["기업홈페이지"],
      },
      {
        id: 51,
        stit: "도매업",
        slink: "http://domeup.co.kr/",
        color: ["#f86d37"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap",
        info: "도매업 대행관리 사이트",
        work: "하드코딩 퍼블리싱(100%) - 반응형 홈페이지",
        etc: ["기업홈페이지", "회원만 이용 가능한 페쇄몰"],
      },
      {
        id: 52,
        stit: "sns부스터",
        slink: "http://snsbooster.co.kr/",
        color: ["#5c4dca", "#fe4573"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap",
        info: "인플루언서 sns마케팅 플랫폼 사이트",
        work: "하드코딩 퍼블리싱(100%) - 반응형 홈페이지",
        etc: ["기업홈페이지"],
      },
      {
        id: 53,
        stit: "코킹1번지",
        slink: "http://caulking119.adamstore.co.kr/",
        color: ["#35c5f0"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap",
        info: "건물내, 외부 코킹 공사 전문업체",
        work: "하드코딩 퍼블리싱(100%) - 반응형 홈페이지",
        etc: ["기업홈페이지"],
      },
      {
        id: 54,
        stit: "세이프트레이드",
        slink: "http://safetrade.adamstore.co.kr",
        color: ["#e60000"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap",
        info: "판매자와 구매자간의 신뢰를 만들어주는 완벽한 안전거래 솔루션",
        work: "하드코딩 퍼블리싱(100%) - 반응형 홈페이지",
        etc: ["기업홈페이지", "modal, 새창 작업 다수"],
      },
      {
        id: 55,
        stit: "포라이트",
        slink: "http://forlight.adamstore.co.kr/",
        color: ["#af914f"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap,그누보드,영카트",
        info: "각종 조명 판매 사이트",
        work: "하드코딩 퍼블리싱(100%) - 반응형 홈페이지",
        etc: ["영카트를 이용한 쇼핑몰"],
      },
      {
        id: 56,
        stit: "마케팅신",
        slink: "https://marketingsin.com/",
        color: ["#f18d22"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap",
        info: "마케팅 프로그램 개발, 키워드, 쇼핑광고, 온라인 광고 대행, 마케팅신 입찰 자동화 솔루션 무료제공 사이트",
        work: "하드코딩 퍼블리싱(100%) - 반응형 홈페이지",
        etc: ["관리자 페이지에서 관리가능한 자사시스템"],
      },
      {
        id: 57,
        stit: "미스토어",
        slink: "https://www.mestore.co.kr/",
        color: ["#719b34", "#ef4d6a", "#f9ea3a"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap",
        info: "앱스토어,무료앱스토어 자회사 홈페이지",
        work: "하드코딩 퍼블리싱(100%) - 반응형 홈페이지",
        etc: ["관리자 페이지에서 관리가능한 자사시스템", "자회사에서 개발한 앱 관리 사이트"],
      },
      {
        id: 58,
        stit: "불리",
        slink: "https://www.buly.kr/",
        color: ["#e23d3c", "#6076e7"],
        skill: "Html,Css,jQuery,Javascript,php",
        tool: "Bootstrap",
        info: "URL단축, 링크줄이기를 간편하게 제공하는 최고의 URL단축 서비스",
        work: "하드코딩 퍼블리싱(100%) - 반응형 홈페이지",
        etc: ["자회사에서 개발한 단축 url관리 사이트"],
      },
    ],
  },
  {
    id: 2,
    title: "RESUME",
    content: ["Experience", "Education", "Frontend"],
  },
  {
    id: 3,
    title: "CONTACT",
    content: "",
  },
];

const skill = [
  {
    id: 1,
    name: "react",
    skill: "현재 포트폴리오는 리액트로 구현되었으며, 데이터(props)를 입력받아 View(state) 상태에 따라 React Hooks을 사용하여 컴포넌트를 활용 할수 있습니다. ",
  },
  {
    id: 2,
    name: "html",
    skill: "에이전시에서 개발한 경험으로 웹접근성을 고려하며 웹표준을 준수한 시멘틱 태그사용과 크로스 브라우징 마크업이 가능합니다. 또한 SEO를 위하여 메타태그 설정등 경험이 있으며 정보보안에 대한 SSL 이해도가 있습니다.",
  },
  {
    id: 3,
    name: "css3",
    skill: "다양한 레이아웃과 애니메이션을 구현할 수 있으며 최신기술인 flex, grid등을 활용합니다. 전처리기인 sass를 사용하여 포토폴리오를 제작하였습니다.",
  },
  {
    id: 4,
    name: "javascript",
    skill: "Vanilla JS의 기본개념인 변수, 조건문, 반복문, 배열, 함수를 활영하여 현업에서 기능을 구현하였습니다.",
  },
  {
    id: 5,
    name: "jquery",
    skill: "뷰포트에 대한 이해 및 jquery 기반의 라이브러리를 사용하여 현업에서 웹페이지 UI에 적용하였습니다.",
  },
  {
    id: 6,
    name: "php",
    skill: "php 용어에 대한 이해도가 있으면 php로 개발 된 그누보드, 영카트 작업시 변수 선언, 조건문 작성등을 하였습니다.",
  },
  {
    id: 7,
    name: "mysql",
    skill: "스마트콘텐츠 교육 당시 mysql을 수강하였으며 DB에 대한 기초지식 습득 및 질의문에 대해 이해할 수 있습니다.",
  },

  {
    id: 8,
    name: "java",
    skill: "자바(JAVA)프로그래밍 교육을 수강하며 기본 문법 및 기초지식을 습득하였고 java 기반 웹사이트를 퍼블리싱 한 경험이 있습니다.",
  },
  {
    id: 9,
    name: "redux",
    skill: "투두리스트 제작시 리덕스를 사용한 경험이 있습니다. 리덕스를 통해 복잡한 상태관리를 효율적으로 할 수 있도록 지속적으로 공부하고 있습니다.",
  },
  {
    id: 10,
    name: "git",
    skill: "백업 및 협업이 가장 중요하다고 생각하여 개인 프로젝트를 깃으로 버전관리하고 있습니다. SVN을 현업에서 경험하였으며 효율적으로 깃을 관리하기 위해 지속적으로 공부하고 있습니다.",
  },
  {
    id: 11,
    name: "photoshop",
    skill: "포토샵 툴에 대한 이해와 퍼블리싱에 필요한 툴 사용이 가능합니다.",
  },
  {
    id: 12,
    name: "illustrator",
    skill: "일러스트 툴에 대한 이해도가 있습니다.",
  },
  {
    id: 13,
    name: "figma",
    skill: "피그마를 이용하여 레이아웃 배치를 경험하였으며 현업에서 작업한 경험이 있습니다.",
  },
];

export {profile, portfolio, skill};
