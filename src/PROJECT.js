import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper";

// Import Swiper styles
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Autoplay, Pagination, EffectCoverflow]);

const PROJECT = ({ content }) => {
  const scon = content[1].content;
  console.log(scon);
  return (
    <div>
      <Swiper
        navigation
        loop
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
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
        className="swiper-container"
      >
        {scon.map((pr) => (
          <SwiperSlide
            key={pr.id}
            style={{
              backgroundImage:
                "url(https://swiperjs.com/demos/images/nature-1.jpg)",
            }}
          >
            Slide 1ddddddd
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default PROJECT;
