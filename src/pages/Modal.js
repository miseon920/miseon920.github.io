import React, { useEffect, useState } from "react";
import { GrClose } from "react-icons/gr";
import { useSelector } from "react-redux";
import { portfolio } from "../data/Data";

const Modal = ({ scon }) => {
  const { openmodal } = useSelector((s) => s);
  //   const [pnum, setPnum] = useState();
  //   const [hover, onHover] = useState(false);
  //console.log(mid);
  //console.log("openmodal", openmodal.id, scon);
  const matchId = scon.find((con) => con.id == openmodal.id);
  //console.log(matchId);
  //   const closeModal = () => {
  //     SetModal(false);
  //     setMid("");
  //   };
  //console.log(mid);
  return (
    <div className={`modal ${openmodal.toggle ? "modal_on" : ""}`}>
      {/* ${mid ? "on" : ""} */}
      {/* <button onClick={closeModal}>
        <GrClose />
      </button> */}
      {/* {matchId.map((item) => (
        <li>{item.stit}</li> 
      ))} */}
      <div className="modal_box">
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
                <ul>
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
                <ul>
                  {matchId.etc.map((etc) => (
                    <li key={etc}>{etc}</li>
                  ))}
                </ul>
              </td>
            </tr>
            <tr>
              <th scope="row">사이트 확인</th>
              <td>{matchId.slink}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Modal;
