import React from "react";
import { useParams } from "react-router-dom";

const Portfolio = () => {
  const { id } = useParams();
  return <div>{id}??</div>;
};

export default Portfolio;
