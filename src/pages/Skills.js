import React from "react";
import SkillsList from "./components/SkillsList";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const iconClass = [
  {
    id: "01",
    name: "fa-brands fa-square-js",
  },
  {
    id: "02",
    name: "fa-brands fa-react",
  },
  {
    id: "03",
    name: "fa-brands fa-node",
  },
  {
    id: "04",
    name: "fa-solid fa-database",
  },
  {
    id: "05",
    name: "fa-solid fa-table",
  },
  {
    id: "06",
    name: "fa-solid fa-server",
  },
  {
    id: "07",
    name: "fa-solid fa-diagram-project",
  },
  {
    id: "08",
    name: "fa-brands fa-git-alt",
  },
  {
    id: "09",
    name: "fa-brands fa-square-js",
  },
];

const Skills = () => {
  return (
    <div>
      {iconClass.map((iconClass) => (
        <SkillsList icons={iconClass.name} key={iconClass.id} />
      ))}
      {/* <FontAwesomeIcon icon="square-js" /> */}
    </div>
  );
};

export default Skills;
