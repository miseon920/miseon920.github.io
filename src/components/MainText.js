import React, { useState, useEffect } from "react";

const MainText = () => {
  const txt = "퍼블리셔로 다져진 실력!\n프론트엔드로 보여 드리겠습니다.";
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
  return <div className="about_txt">{text}</div>;
};

export default MainText;
