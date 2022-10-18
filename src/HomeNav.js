import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Project from "./Portfolio";
import Skill from "./Skill";

const HomeNav = () => {
  return (
    <>
      <Routes>
        <Route path="/skill" element={<Skill /> }></Route>
        <Route path="/Portfolio/:id" element={<Project />}></Route>
      </Routes>
    </>
  );
};

export default HomeNav;
