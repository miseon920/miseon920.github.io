import React, {useEffect, useHistory, useState} from "react";
import {Link, Route, Routes} from "react-router-dom";
import {portfolio, skill} from "../data/Data";
import Main from "../pages/Main";
import Project from "../pages/Portfolio";
import Skill from "../pages/Skill";
import NotFound from "../pages/NotFound";
import Modal from "../pages/Modal";
//import {hfix} from "../data/redux_store";
import {useDispatch, useSelector} from "react-redux";
import Dinpass from "../pages/Dinpass";

const HomeNav = () => {
  const {headfix} = useSelector((s) => s);
  //console.log(headfix);
  const dispatch = useDispatch();
  const [windowy, setWindowy] = useState(0);
  const head = () => {
    const scy = window.scrollY;
    setWindowy(scy);
  };
  // const history = useHistory();

  // useEffect(() => {
  //   let unlisten = history.listen((location) => {});

  //   return () => {
  //     unlisten();
  //   };
  // }, [history]);
  useEffect(() => {
    window.addEventListener("scroll", head);
  }, [windowy]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Main windowy={windowy} setWindowy={setWindowy} />}></Route>
        <Route path="/skill" element={<Skill Skill={skill} />}></Route>
        <Route path="/portfolio" element={<Project portfolio={portfolio} />}></Route>
        <Route path="/portfolio/:id" element={<Modal portfolio={portfolio} />}></Route>
        <Route path="/dainpass" element={<Dinpass />}></Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default HomeNav;
