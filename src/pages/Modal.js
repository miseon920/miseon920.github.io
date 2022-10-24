import React, { useEffect, useState, useRef } from "react";
import { GrClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { showModal, fixed } from "../data/redux_store";

const Modal = ({ scon, dfull, setDfull }) => {
  const { openmodal, fixedbody } = useSelector((s) => s);
  const dispatch = useDispatch();
  //   const [pnum, setPnum] = useState();
  //   const [hover, onHover] = useState(false);
  //console.log(mid);
  //console.log("openmodal", openmodal.id, scon);
  const matchId = scon.find((con) => con.id == openmodal.id);
  // const modal = useControl();
  // console.log(modal);
  const modal = useRef(null);
  const body = document.querySelector("body");
  const wheelStop = (e) => {
    e.stopPropagation();
    e.preventDefault();
    e.stopPropagation();
    return false;
  };
  //console.log(dfull);
  useEffect(() => {
    // if (dfull) {
    //   body.classList.add("stop-scrolling");
    // } else {
    //   modal.current.addEventListener("wheel", wheelStop);
    // }
    body.classList.add("stop-scrolling");
    return () => {
      body.classList.remove("stop-scrolling");
      // modal.current.removeEventListener("wheel", wheelStop);
    };
  }, []);
  //console.log(matchId);
  //   const closeModal = () => {
  //     SetModal(false);
  //     setMid("");
  //   };
  //console.log(mid);
  return (
    <div className={`modal ${openmodal.toggle ? "modal_on" : ""}`} ref={modal}>
      {/* ${mid ? "on" : ""} */}
      {/* <button onClick={closeModal}>
        <GrClose />
      </button> */}
      {/* {matchId.map((item) => (
        <li>{item.stit}</li> 
      ))} */}
      <div className="modal_box">
        <button
          onClick={() => {
            dispatch(showModal({ id: "", toggle: false }));
          }}
        >
          <GrClose />
        </button>
        <table>
          <caption>포토폴리오</caption>
          <tbody>
            <tr>
              <th scope="row">사이트명</th>
              <td>{matchId.stit}</td>
            </tr>
            <tr>
              <th scope="row">사이트정보</th>
              <td>{matchId.info}</td>
            </tr>
            <tr>
              <th scope="row">포인트 컬러</th>
              <td>
                <ul className="color">
                  {matchId.color.map((color) => (
                    <li key={color} style={{ background: color }}>
                      {color}
                    </li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr>
              <th scope="row">스킬</th>
              <td>{matchId.skill}</td>
            </tr>
            <tr>
              <th scope="row">작업</th>
              <td>{matchId.work}</td>
            </tr>
            <tr>
              <th scope="row">세부사항</th>
              <td>
                <ul className="mdetail">
                  {matchId.etc.map((etc) => (
                    <li key={etc}>{etc}</li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr>
              <th scope="row">사이트 확인</th>
              <td>
                <a href={matchId.slink} target="_blank">
                  {matchId.slink}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Modal;
