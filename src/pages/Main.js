import React, { useState, useEffect, useRef } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { FiArrowDown } from "react-icons/fi";
import { portfolio } from "../data/Data";
import { Link } from "react-router-dom";
import Cover from "../components/Cover";
import MainText from "../components/MainText";
import RESUME from "../components/RESUME";
import PROJECT from "../components/PROJECT";
import Mail from "../components/Mail";

const Main = () => {
  const [num, setNum] = useState(1);
  const [con, setCon] = useState("HOME");
  const [on, setOn] = useState(false);
  const [dfull, setDfull] = useState(false);

  const title = portfolio.map((it) => it.title);
  //console.log(title);
  // const ac = portfolio.map((it) => it.anchor);
  //반응형 추가
  const [width, setWidth] = useState(window.innerWidth);
  //console.log(width);
  useEffect(() => {
    const Resize = () => {
      setWidth(window.innerWidth);
      //console.log(width);
      //width < 1200 ? fullpage_api.destroy("all") : null;
    };
    window.addEventListener("resize", Resize);
    return () => {
      window.addEventListener("resize", Resize);
    };
  }, [width]);
  return (
    <div className="FP">
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
        responsiveWidth={1200}
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
                      <img
                        src={`${process.env.PUBLIC_URL}/img/me.png`}
                        alt="kms"
                      />
                    </div>
                    <div className="home_right">
                      <MainText />
                      <div className="about">
                        <ul>
                          <li>
                            안녕하세요. 프론트엔드 개발자를 꿈꾸는 김미선입니다.
                          </li>
                          <li>
                            다년간의 퍼블리셔 경험으로 웹의 전반적인 지식을
                            가지고 있으며 서비스와 사용자를 연결하는 프론트엔드
                            분야에 관심이 많습니다.
                          </li>
                          <li>
                            데이터와 동적 요소들로부터 서비스와 사용자 간
                            상호작용을 통해 긍정적인 경험을 제공하고, 동시에
                            서비스의 본질을 온전히 보여줄 수 있는 프론트엔드
                            개발자가 되는 것이 저의 목표입니다.
                          </li>
                        </ul>
                      </div>
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
                //console.log(it_Tit);
                return (
                  <div className={`section ${it_Tit}`} key={idx}>
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
                              CONTACT: <Mail />,
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

export default Main;
