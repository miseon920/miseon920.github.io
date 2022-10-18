import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { portfolio, skill } from "../data/Data";
import Main from "../pages/Main";
import Project from "../pages/Portfolio";
import Skill from "../pages/Skill";
import NotFound from "../pages/NotFound";
import Modal from "../pages/Modal";

const HomeNav = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/skill" element={<Skill Skill={skill} />}></Route>
        <Route
          path="/Portfolio"
          element={<Project portfolio={portfolio} />}
        ></Route>
        <Route
          path="/Portfolio/:id"
          element={<Modal portfolio={portfolio} />}
        ></Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default HomeNav;
