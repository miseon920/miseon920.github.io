import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Project from "./Portfolio";

const HomeNav = () => {
  return (
    <>
      <Routes>
        <Route path="/Portfolio/:id" element={<Project />}></Route>
      </Routes>
    </>
  );
};

export default HomeNav;
