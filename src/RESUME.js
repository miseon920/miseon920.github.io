import React from "react";
import { skill } from "./Data";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
const RESUME = ({ content }) => {
  const scon = content[0].content;
  //console.log(scon);
  return (
    <>
      {scon.map((el, idx) => (
        <div className="resume_box" key={idx}>
          <h3 className="sub_tit">{el}</h3>
          <div className="sub_content">
            {
              {
                Experience:
                  <>
                      <ul>
                      <li>
                         <div>오감소프트(개발팀 / 주임)</div>
                          <div>2018.01~2020.02</div>
                         
                          <div>프론트엔드,퍼블리싱,유지보수,까페24,그누보드,영카트,고도몰,부트스트랩,php기반 홈페이지, 하이브리드 앱 퍼블리싱</div>
                          <div>포토샵,제플린,브라켓,에디트플러스,파일질라</div>
                        </li>
                      <li>
                        <div>업티브(개발팀 / 대리)</div>
                          <div>2020.05~2020.09</div>
                          
                          <div>자사 B2B 사이트 퍼블리싱</div>
                          <div>피그마,에디트플러스,이클립스,이클립스SVN</div>
                        </li>
                      <li>
                         <div>코어플라넷(디자인팀 / 사원(팀장))</div>
                          <div>2020.10~2022.04</div>
                         
                          <div>php기반 자사 및 외주 사이트 퍼블리싱</div>
                          <div>VSCODE,파일질라,그누보드</div>
                        </li>
                      </ul>
                  </>,
                Education:
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
                  </>,
                Frontend:
                  <>
                    <ul>
                      {
                        skill.map(skill => (
                          <li key={skill.id}>
                            <div><img src={`${ process.env.PUBLIC_URL }/img/${ skill.name }.png`} alt={skill.name} />{skill.name}</div>
                          </li>   
                        ))
                      }
                      <li><Link to="/skill">Skill <FiArrowRight /></Link></li>
                    </ul>
                  </>,
              }[el]
            }
          </div>
        </div>
      ))}
    </>
  );
};

export default RESUME;
