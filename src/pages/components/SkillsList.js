import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SkillsList = (props) => {
  return (
    <div>
      <FontAwesomeIcon icon={props.icons} />
      {/* <FontAwesomeIcon icon="fa-brands fa-react" /> */}
    </div>
  );
};

export default SkillsList;
