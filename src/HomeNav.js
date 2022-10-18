import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Project from "./Portfolio";
import Skill from "./Skill";
import NotFound from "./NotFound";

const HomeNav = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/skill" element={<Skill />}></Route>
        <Route path="/Portfolio/:id" element={<Project />}></Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default HomeNav;
