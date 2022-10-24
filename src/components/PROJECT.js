import React, { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper";
import { BsPlusLg, BsSearch } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
import Modal from "../pages/Modal";
import { showModal } from "../data/redux_store";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import { useDispatch, useSelector } from "react-redux";

SwiperCore.use([Navigation, Autoplay, Pagination, EffectCoverflow]);

const PROJECT = ({ content }) => {
  const scon = content[0].content;
  const [loading, setLoading] = useState(true);
  const [num, SetNum] = useState();
  const { openmodal } = useSelector((s) => s);
  // const [modal, SetModal] = useState(false);
  // const [mid, setMid] = useState();
  // const showModal = (id) => {
  //   SetModal(true);
  //   setMid(id);
  // };
  const dispatch = useDispatch();
  //console.log(scon);
  const [loaded, setLoaded] = useState(false);
  function onLoad() {
    console.log("loaded");
    // alert("lode");
    setLoaded(true);
  }

  return (
    <div>
      <div className="more">
        <Link to="/portfolio" className="more_bt">
          프로젝트 더보기 <FiArrowRight />
        </Link>
      </div>
      <Swiper
        navigation
        loop
        // pagination={{ clickable: true }}
        // autoplay={{ delay: 3000 }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 80,
          depth: 200,
          modifier: 1,
          slideShadows: false,
          slideToClickedSlide: true,
        }}
        slidesPerView={3}
        centeredSlides
        style={{ height: "500px" }}
        className="swiper-container inner"
        onSlideChange={(swiper) => SetNum(swiper.realIndex)}
      >
        {scon.slice(0, 14).map((pr, idx) => (
          <SwiperSlide
            key={pr.id}
            className={`pr_item ${num === idx ? "on" : ""}`}
          >
            <div
              className="img_box"
              // style={{
              //   background: `url(/img/project/pr${pr.id}.png)`,
              //   backgroundSize: `cover`,
              //   backgroundRepeat: `no-repeat`,
              // }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/img/project/pr${pr.id}.png`}
                style={{ display: loaded ? "block" : "none" }}
                alt={pr.stit}
                onLoad={onLoad}
              />
            </div>
            <div className="pr_info">
              <ul>
                <li>
                  <h3>{pr.stit}</h3>
                </li>
                <li> {pr.info}</li>
                {/* <li> {pr.work}</li> */}
              </ul>
              <div className="pr_bt">
                <button
                  // onClick={() => showModal(pr.id)}
                  onClick={() => {
                    dispatch(showModal({ id: pr.id, toggle: true }));
                  }}
                >
                  {/* /* to={`/Portfolio/${pr.id}`}  */}
                  More <BsPlusLg />
                </button>
                <a href={pr.slink} target="_blank">
                  View <BsSearch />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {!loaded && <div className="loding">로딩?</div>}
      {
        openmodal.toggle && <Modal scon={scon} />
        // <Modal />
        // SetModal={SetModal} mid={mid} setMid={setMid} scon={scon}
      }
    </div>
  );
};
export default PROJECT;
