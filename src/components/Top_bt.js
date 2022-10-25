import React, { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";
import { gsap } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

const Top_bt = () => {
  const [scrollY, setScrollY] = useState(0);
  const top_bt = () => {
    gsap.to(window, { duration: 0.5, scrollTo: 0 });
  };

  const scrllEvent = () => {
    let scy = window.scrollY;
    setScrollY(scy);
    //console.log(scy);
  };
  useEffect(() => {
    window.addEventListener("scroll", scrllEvent);
    gsap.registerPlugin(ScrollToPlugin);
    return () => {
      window.removeEventListener("scroll", scrllEvent);
    };
  }, []);
  return (
    <>
      <button
        className={`arrow_bt top_bt ${scrollY > 400 ? "on" : ""}`}
        onClick={top_bt}
      >
        <FiArrowUp />
      </button>
    </>
  );
};
export default Top_bt;
