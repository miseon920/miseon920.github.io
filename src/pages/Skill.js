import React from "react";
import { skill } from "../data/Data";
const Skill = () => {
  return (
    <div className="skill inner sub">
      <ul>
        {skill.map((skill) => (
          <li key={skill.id}>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}/img/${skill.name}.png`}
                alt={skill.name}
              />
              {skill.name}
            </div>
            <div>{skill.skill}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skill;
