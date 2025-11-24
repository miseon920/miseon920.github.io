import React, {useState, useCallback} from "react";
import emailjs from "emailjs-com";
import useInput from "../Hook.js/useInput";
import {profile} from "../data/Data";
import {GrMail} from "react-icons/gr";
import {RiKakaoTalkFill} from "react-icons/ri";
import {AiFillGithub, AiFillFileZip} from "react-icons/ai";
// import { pdfjs } from "react-pdf";
// import { Document, Page } from "react-pdf";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Mail = () => {
  const [name, onChangeName] = useInput("");
  const [email, onChangeEmail] = useInput("");
  const [message, onChangeMessage] = useInput("");

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    const inputNum = e.target.length - 1; // [D] 버튼한개 제외
    const data = new FormData(e.target);
    const entries = data.entries();
    let failNum = 0;

    for (let i = 0; i < inputNum; i++) {
      const next = entries.next();
      //console.log(next);
      const key = next.value[0];
      const value = next.value[1];

      if (!value) {
        failNum++;
        alert(`${key}을 적어주세요.`);
        break;
      }
    }

    if (!failNum) {
      emailjs.sendForm("service_9z2l8al", "template_nixnkez", e.target, "lMvYCOjTb1FbaG-me").then(
        (result) => {
          console.log(result.text);
          alert("감사합니다");
        },
        (error) => {
          console.log(error.text);
          alert("스미마셍");
        }
      );
    }
  }, []);

  //   const [numPages, setNumPages] = useState(null);
  //   const [pageNumber, setPageNumber] = useState(1);

  //   function onDocumentLoadSuccess({ numPages }) {
  //     setNumPages(numPages);
  //   }

  return (
    <div className="contact">
      <div className="con_left">
        <ul>
          <li>
            <h3>{profile.name}</h3>
          </li>
          <li>
            <a href={`mailto:${profile.email}`}>
              <GrMail />
              <span>{profile.email}</span>
            </a>
          </li>
          <li>
            <a href={`${profile.tel}`} target="_blank">
              <RiKakaoTalkFill />
              <span>{profile.tel}</span>
            </a>
          </li>
          <li>
            <a href={profile.github} target="_blank">
              <AiFillGithub />
              <span>{profile.github}</span>
            </a>
          </li>
          <li>
            <a href={profile.blog} target="_blank">
              <img src={`${process.env.PUBLIC_URL}/img/tistory_logo.svg`} alt="" />
              <span>{profile.blog}</span>
            </a>
          </li>
          <li>
            <a href={`${process.env.PUBLIC_URL}/img/sunny2.pdf`} target="_blank">
              <AiFillFileZip />
              <span>이력서</span>
            </a>
            {/* <Document
              file={`${process.env.PUBLIC_URL}/img/sunny.pdf`}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} />
            </Document>
            <p>
              <span
                onClick={() =>
                  pageNumber > 1 ? setPageNumber(pageNumber - 1) : null
                }
              >
                &lt;
              </span>
              <span>
                Page {pageNumber} of {numPages}
              </span>

              <span
                onClick={() =>
                  pageNumber < numPages ? setPageNumber(pageNumber + 1) : null
                }
              >
                &gt;
              </span>
            </p> */}
          </li>
        </ul>
        <div className="copy">&copy; 2025 Sunny, Inc.</div>
      </div>
      <div className="con_right">
        <form onSubmit={onSubmit}>
          <table>
            <tbody>
              <tr>
                <th scope="row">
                  <label htmlFor="name">name</label>
                </th>
                <td>
                  <input type="text" id="name" name="name" placeholder="name" value={name} onChange={onChangeName} />
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <label htmlFor="email">email</label>
                </th>
                <td>
                  <input type="text" id="email" name="email" placeholder="email" value={email} onChange={onChangeEmail} />
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <label htmlFor="content">message</label>
                </th>
                <td>
                  <textarea id="message" name="message" placeholder="message" value={message} onChange={onChangeMessage} />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="bt_box">
            <button type="submit">문의하기</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Mail;

/*
const memoizedCallback = useCallback(function, deps);
리액트 컴포넌트 안에 함수가 선언되어있을 때 이 함수는 해당 컴포넌트가 렌더링 될 때마다 새로운 함수가 생성되는데,
 useCallback을 사용하면 해당 컴포넌트가 렌더링 되더라도 그 함수가 의존하는 값(deps)들이 바뀌지 않는 한
 기존 함수를 재사용할 수 있다.
*/
