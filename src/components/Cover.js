import React, { useState, useEffect, useRef } from "react";
import { portfolio } from "../data/Data";
import { Link } from "react-router-dom";

const Cover = ({ on, setOn }) => {
  const cover = useRef(null);
  const wheelStop = (e) => {
    e.stopPropagation();
  };

 
  useEffect(() => {
    cover.current.addEventListener("wheel", wheelStop);
    return () => {
     cover.current.removeEventListener("wheel", wheelStop);
    };
  }, []);

  return (
    <div className={`cover ${on ? "on" : ""}`} ref={cover}>
      <ul>
        {portfolio.map((it, idx) => {
          return (
            <li key={idx}>
              <a href={`#${it.title}`} onClick={()=>setOn(!on)}>
                {it.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cover;
