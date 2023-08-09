import React from "react";
import SkillBar from "./SkillBar";
import "./SkillsList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillsList = (props) => {
  return (
    <div className="icon-container">
      <FontAwesomeIcon className="icon-style" icon={props.icons} />
      <p>{props.skillName}</p>
      <SkillBar />
      {/* <FontAwesomeIcon icon="fa-brands fa-react" /> */}
    </div>
  );
};

export default SkillsList;
