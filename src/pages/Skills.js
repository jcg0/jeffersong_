import React from "react";
import SkillsList from "./components/SkillsList";
import "./Skills.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const iconClass = [
  {
    id: "01",
    className: "fa-brands fa-square-js",
    name: "JavaScript",
  },
  {
    id: "02",
    className: "fa-brands fa-react",
    name: "React",
  },
  {
    id: "03",
    className: "fa-brands fa-node",
    name: "Node.js",
  },
  {
    id: "04",
    className: "fa-solid fa-database",
    name: "MongoDB",
  },
  {
    id: "05",
    className: "fa-solid fa-table",
    name: "MySQL",
  },
  {
    id: "06",
    className: "fa-solid fa-server",
    name: "Express",
  },
  {
    id: "07",
    className: "fa-solid fa-diagram-project",
    name: "GraphQL",
  },
  {
    id: "08",
    className: "fa-brands fa-git-alt",
    name: "Git",
  },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-list-container">
        {iconClass.map((iconClass) => (
          <SkillsList
            className="skills-list"
            skillName={iconClass.name}
            icons={iconClass.className}
            key={iconClass.id}
          />
        ))}
        {/* <FontAwesomeIcon icon="square-js" /> */}
      </div>
    </div>
  );
};

export default Skills;
