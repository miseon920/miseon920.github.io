import React from "react";

export default function Project() {
  return (
    <div>
      <ul>
        <li>
          <div>
            <img src={`${process.env.PUBLIC_URL}/img/project/code/code01.png`} alt="" />
          </div>
          <div>
            <img src={`${process.env.PUBLIC_URL}/img/project/dain01.png`} alt="" />
          </div>
        </li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}
