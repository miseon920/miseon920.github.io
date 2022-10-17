import React, { useState, useEffect, useRef } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { FiArrowDown } from "react-icons/fi";
import { portfolio } from "./Data";
import { Link } from "react-router-dom";
import HomeNav from "./HomeNav";
import Cover from "./Cover";
import MainText from "./MainText";
import RESUME from "./RESUME";
import PROJECT from "./PROJECT";
import "./reset.css";
import "./main.scss";

const App = () => {
  const [num, setNum] = useState(1);
  const [con, setCon] = useState("HOME");
  const [on, setOn] = useState(false);
  const title = portfolio.map((it) => it.title);
  //console.log(title);
  // const ac = portfolio.map((it) => it.anchor);
  return (
    <div className="FP">
      <HomeNav />
      <Cover on={on} setOn={setOn} />
      <header className="header">
        <div className="inner">
          <h1>
            <Link to="/">
              <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="" />
            </Link>

            {/* {profile.name} 포토폴리오 {num} {con} */}
            {/* undefind의 경우 에러대신 렌더링을 안하므로 초기값으로 지정해둔것 */}
          </h1>

          <nav className="gnb">
            <ul>
              {["HOME", ...title].map((it, idx) => {
                return (
                  <li className={num === idx + 1 ? "on" : ""} key={idx}>
                    <a href={`#${it}`}>{it}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
          {/* <button
            onClick={() => setOn(!on)}
            className={`cover_open ${on ? "on" : ""}`}
          >
            <span>커버 나오는 버튼</span>
          </button> */}
        </div>
      </header>

      <ReactFullpage
        //fullpage options
        licenseKey={"YOUR_KEY_HERE"}
        scrollingSpeed={1000} /* Options here */
        anchors={["HOME", ...title]}
        afterLoad={(origin, destination) => {
          setNum(destination.index + 1);
          setCon(destination.title);
        }}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <div className="inner case">
                  <div className="home">
                    <div className="home_left">
                      <img src="" alt="" />
                      사진넣을곳
                    </div>
                    <div className="home_right">
                      <MainText />
                      인사말 적을곳~ 블라블라
                    </div>
                  </div>
                  <button
                    onClick={() => fullpageApi.moveSectionDown()}
                    className="arrow_bt"
                  >
                    <FiArrowDown />
                  </button>
                </div>
              </div>
              {portfolio.map((it, idx) => {
                const it_Tit = it.title;
                //console.log(it_TIT);
                return (
                  <div className="section" key={idx}>
                    <div className="case">
                      <div className="inner">
                        <div className="tit">
                          <h2>{it.title}</h2>

                          {/* <div className="info">{it.content}</div> */}
                          {/* <li>
                            {<strong>color</strong>}
                            <ol>
                              {it.color?.map((color, idx) => (
                                <li style={{ background: color }} key={idx}>
                                  {color}
                                </li>
                              ))}
                            </ol>
                          </li> */}
                        </div>
                        <div className="content">
                          {
                            {
                              RESUME: <RESUME content={portfolio} />,
                              PROJECT: <PROJECT content={portfolio} />,
                            }[it_Tit]
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
};

export default App;
