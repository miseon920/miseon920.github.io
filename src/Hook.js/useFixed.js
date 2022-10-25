import React, { useRef, useEffect } from "react";

const useFixed = () => {
   const body = document.querySelector("body");
    useEffect(() => {
    body.classList.add("stop-scrolling");
    return () => {
      body.classList.remove("stop-scrolling");
    };
  }, []);

  return null;
};
export { useFixed };
