import React, { useEffect, useState } from "react";
import { BsPlusLg, BsSearch } from "react-icons/bs";
import Header from "../components/Header";
import Modal from "../pages/Modal";
import { showModal, fixed } from "../data/redux_store";
import { useDispatch, useSelector } from "react-redux";

const Portfolio = ({ portfolio }) => {
  const [pnum, setPnum] = useState();
  const [hover, onHover] = useState(false);
  const { openmodal } = useSelector((s) => s);
  const [dfull, setDfull] = useState(false);
  const dispatch = useDispatch();
  const scon = portfolio[0].content;
  return (
    <>
      <div
        className={`PROJECT portfolio inner sub ${
          openmodal.toggle ? "on" : ""
        }`}
      >
        <Header />
        <h3>Portfolio</h3>
        <div className="portfolio_box">
          {scon.map((pr, idx) => (
            <div
              key={pr.id}
              onMouseEnter={() => {
                setPnum(idx);
                onHover(true);
              }}
              onMouseLeave={() => {
                setPnum(idx);
                onHover(false);
              }}
              className={`pr_item ${pnum === idx && hover ? "on" : "off"}`}
            >
              <div className="img_box">
                <img
                  src={`${process.env.PUBLIC_URL}/img/project/pr${pr.id}.png`}
                  alt={pr.stit}
                />
              </div>
              <div className="pr_info">
                <ul>
                  <li>
                    <h3>{pr.stit}</h3>
                  </li>
                  <li> {pr.info}</li>
                  {/* <li> {pr.work}</li> */}
                </ul>
                <div className="pr_bt">
                  <button
                    // onClick={() => showModal(pr.id)}
                    onClick={() => {
                      dispatch(showModal({ id: pr.id, toggle: true }));
                      //dispatch(fixed());
                      setDfull(true);
                    }}
                  >
                    {/* /* to={`/Portfolio/${pr.id}`}  */}
                    More <BsPlusLg />
                  </button>
                  <a href={pr.slink} target="_blank">
                    View <BsSearch />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {
        openmodal.toggle && (
          <Modal scon={scon} dfull={dfull} setDfull={setDfull} />
        )
        // <Modal />
        // SetModal={SetModal} mid={mid} setMid={setMid} scon={scon}
      }
    </>
  );
};

export default Portfolio;
