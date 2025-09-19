import React, {useEffect, useRef, useState, useCallback} from "react";
import {Link} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation, Pagination, Autoplay} from "swiper";
import {BsPlusLg, BsSearch} from "react-icons/bs";
import {FiArrowRight} from "react-icons/fi";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import Header from "../components/Header";

SwiperCore.use([Navigation, Autoplay, Pagination]);

export default function DainPass() {
  const [loaded, setLoaded] = useState(false);
  const Dain = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  function onLoad() {
    //console.log("loaded");
    // alert("lode");
    setLoaded(true);
  }

  return (
    <div className="dainPass sub ">
      <Header />
      <h3>DainPass</h3>
      <Swiper
        navigation
        loop
        pagination={{clickable: true}}
        //autoplay={{ delay: 3000 }}
        slidesPerView={1}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
        }}
        centeredSlides
        style={{height: "500px"}}
        className="swiper-container inner"
        //onSlideChange={(swiper) => SetNum(swiper.realIndex)}
      >
        {Dain.map((code, idx) => (
          <SwiperSlide>
            <img src={`${process.env.PUBLIC_URL}/img/project/dain${idx === 9 ? 10 : `0` + (idx + 1)}.png`} style={{display: loaded ? "block" : "none"}} alt="dainpass" onLoad={onLoad} />
          </SwiperSlide>
        ))}
      </Swiper>
      {!loaded && <div className="loding">로딩?</div>}
      <ul className="code">
        <li>
          <img src={`${process.env.PUBLIC_URL}/img/project/code/code01.png`} alt="" />
          <ol>
            <li>
              <b>Zustand</b>
            </li>
            <li>store를 이용하여 로그인 관리</li>
            <li>react secureLocalStorage를 사용하여 사용자의 정보를 암호화 하여 보관</li>
          </ol>
        </li>
        <li>
          <img src={`${process.env.PUBLIC_URL}/img/project/code/code02.png`} alt="" />
          <ol>
            <li>
              <b>마이페이지</b>
            </li>
            <li>로그인한 유저만 접근가능하게 변경</li>
            <li>프로필 이미지 변경 기능 및 다양한 api 연동(위시리스트, 결제내역, 이용후기, 문의관리 및 사용자 정보 )</li>
          </ol>
        </li>
        <li>
          <img src={`${process.env.PUBLIC_URL}/img/project/code/code03.png`} alt="" />
          <ol>
            <li>
              <b>개인결제</b>
            </li>
            <li>로그인시 부여한 키값이 있어야 결제 가능</li>
            <li>일반 결제와 다른 data값이 있으므로 props로 상태값을 내려 구분하여 api 및 data값 사용</li>
          </ol>
        </li>
        <li>
          <ol>
            <li>기본적 state와 props를 이용하여 전체페이지 프론트작업 진행(feat.TypeScript)</li>
            <li>위시리스트, 결제내역, 이용후기와 같은 api가 필요한 부분 연동작업 진행</li>
            <li>네이버 클라우드 플랫폼을 이용하여 지도 api 연동진행</li>
            <li>각종 modal에 id를 부여하여 다중 modal을 sotre로 관리</li>
            <li>fecth가 길어질 경우 및 로딩이 길어질 경우를 대비하여 spinner 삽입</li>
          </ol>
        </li>
      </ul>
    </div>
  );
}
