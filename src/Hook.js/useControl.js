import React, { useRef, useEffect } from "react";

const useControl = () => {
  const initref = useRef(null);
  const wheelStop = (e) => {
    e.stopPropagation();
    e.preventDefault();
    e.stopPropagation();
    return false;
  };
  useEffect(() => {
    if (initref.current) {
      const { current } = initref;
      window.addEventListener("wheel", wheelStop);
      return () => {
        window.removeEventListener("wheel", wheelStop);
      };
    }
  }, []);

  return { ref: initref, wheelStop };
};
export { useControl };
