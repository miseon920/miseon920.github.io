import React from "react";
import Header from "../components/Header";
import {skill} from "../data/Data";
const Skill = () => {
  //console.log(skill);
  const real_map = skill.map((skill) => (
    <li key={skill.id}>
      <div>
        <img src={`${process.env.PUBLIC_URL}/img/${skill.name}.png`} alt={skill.name} />
        {skill.name}
      </div>
      <div>{skill.skill}</div>
    </li>
  ));
  return (
    <>
      <div className="skill inner sub">
        <Header />
        <div className="skill_box">
          <h3>Capability</h3>
          <div>
            <h4>Front-end</h4>
            <ul>{real_map.slice(0, 5)}</ul>
          </div>
          <div>
            <h4>Attempt</h4>
            <ul>{real_map.slice(5, 10)}</ul>
          </div>
          <div>
            <h4>Etc</h4>
            <ul>{real_map.slice(10, 13)}</ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
