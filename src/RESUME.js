import React from "react";

const RESUME = ({ content }) => {
  const scon = content[0].content;
  console.log(scon);
  return (
    <>
      {scon.map((el, idx) => (
        <div className="resume_box">
          <h3 className="sub_tit">{el}</h3>
          <div className="sub_content">
            {
              {
                Experience: <></>,
                Education: <div>dgfgg</div>,
                Frontend: <div>dgfgg</div>,
              }[el]
            }
          </div>
        </div>
      ))}
    </>
  );
};

export default RESUME;
