import React from "react";
import {skill} from "../data/Data";
import {FiArrowRight} from "react-icons/fi";
import {Link} from "react-router-dom";
const RESUME = ({content}) => {
  const scon = content[1].content;
  //console.log(scon);
  return (
    <>
      {scon.map((el, idx) => (
        <div className="resume_box" key={idx}>
          <h3 className="sub_tit">
            {el}
            {
              {
                Frontend: (
                  <Link to="/skill" className="more_bt">
                    Skill <FiArrowRight />
                  </Link>
                ),
              }[el]
            }
          </h3>
          <div className="sub_content">
            {
              {
                Experience: (
                  <>
                    <ul>
                      <li>
                        <div>🟣오감소프트(개발팀 / 주임)</div>
                        <div>2018.01~2020.02 [서울]</div>
                        <div>
                          <span>업무</span>
                          <span>프론트엔드,퍼블리싱,유지보수,까페24,그누보드,영카트,고도몰,부트스트랩,php기반 홈페이지, 하이브리드 앱 퍼블리싱</span>
                        </div>
                        <div>
                          <span>Tool</span>
                          <span>포토샵,제플린,브라켓,에디트플러스,파일질라</span>
                        </div>
                      </li>
                      <li>
                        <div>🟣업티브(개발팀 / 대리)</div>
                        <div>2020.05~2020.09 [부산]</div>

                        <div>
                          <span>업무</span>
                          <span>자사 B2B 사이트 퍼블리싱</span>
                        </div>
                        <div>
                          <span>Tool</span>
                          <span>피그마,에디트플러스,이클립스,이클립스SVN</span>
                        </div>
                      </li>
                      <li>
                        <div>🟣코어플라넷(디자인팀 / 사원(팀장))</div>
                        <div>2020.10~2022.04 [부산]</div>

                        <div>
                          <span>업무</span>
                          <span>php기반 자사 및 외주 사이트 퍼블리싱</span>
                        </div>
                        <div>
                          <span>Tool</span>
                          <span>VSCODE,파일질라,그누보드</span>
                        </div>
                      </li>
                      <li>
                        <div>🟣더블미디어(기술개발1팀 / 매니저)</div>
                        <div>2022.12 ~ 2024.02 [부산]</div>
                        <div>
                          <span>업무</span>
                          <span>vue를 활용한 자사홈페이지 프론트엔드 작업,Typescript 및 RESTful API 연동,Git을 이용하여 버전관리 및 코드 관리, 컴포넌트 유지보수 및 개발,react를 활용한 자사 뉴홈페이지 프론트엔드 작업</span>
                        </div>
                        <div>
                          <span>Tool</span>
                          <span>포토샵,제플린,VSCODE,GitHub,GitLab,Git fork</span>
                        </div>
                      </li>
                      <li>
                        <div>🟣토브소프트 (개발팀 · 임시직 / 프리랜서)</div>
                        <div>2024.02 ~ 2024.06 [서울]</div>
                        <div>
                          <span>업무</span>
                          <span>교육용 콘텐츠 개발,미래엔 엠티처 초등 교육용 콘텐츠 개발,아이스쿨 국어 교육용 콘텐츠 개발,자바스크립트 및 제이쿼리를 활용한 퍼블리싱 및 개발</span>
                        </div>
                        <div>
                          <span>Tool</span>
                          <span>포토샵,일러스트,VSCODE,SVN,파일질라</span>
                        </div>
                      </li>
                    </ul>
                  </>
                ),
                Education: (
                  <>
                    <ul>
                      <li>
                        <div>LOY문화예술실용전문학교</div>
                        <div>2011.02~2013.02</div>
                        <div>식공간학부 졸업 (푸드스타일리스트과)</div>
                      </li>
                      <li>
                        <div>Html5기반 스마트콘텐츠 제작자양성</div>
                        <div>2017.06~2017.11</div>
                        <div>방송정보국제교육원(IIBI)</div>
                      </li>
                      <li>
                        <div>자바(JAVA)프로그래밍</div>
                        <div>2022.03~2022.03</div>
                        <div>더조은직업전문학교</div>
                      </li>
                      <li>
                        <div>리엑트(React)활용 프론트엔드 개발자양성</div>
                        <div>2022.05~2022.11</div>
                        <div>그린컴퓨터아카데미</div>
                      </li>
                    </ul>
                  </>
                ),
                Frontend: (
                  <>
                    <ul>
                      {skill.map((skill) => (
                        <li key={skill.id}>
                          <div>
                            <img src={`${process.env.PUBLIC_URL}/img/${skill.name}.png`} alt={skill.name} />
                            <span>{skill.name}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </>
                ),
              }[el]
            }
          </div>
        </div>
      ))}
    </>
  );
};

export default RESUME;
