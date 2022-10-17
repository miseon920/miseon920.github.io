import React, { useState, useEffect, useRef } from "react";

const MainText = () => {
  const txt = "뭐입니까?";
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setText((prevTitleValue) => {
        let result = prevTitleValue ? prevTitleValue + txt[count] : txt[0];
        setCount(count + 1);

        if (count >= txt.length) {
          setCount(0);
          setText("");
        }

        return result;
      });
    }, 300);

    return () => {
      clearInterval(typingInterval);
    };
  });
  return <div>{text}</div>;
};

export default MainText;
