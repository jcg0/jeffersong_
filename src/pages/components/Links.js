import React from "react";
import "./Links.css";
import linkedIn from "../../assets/images/In-White-128-┬«@2x.png";
import gitHub from "../../assets/images/github-mark-white.png";

const Links = () => {
  return (
    <div>
      <a
        href="https://www.linkedin.com/in/jefferson-griebel/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={linkedIn} className="linkedin" alt="linkedin icon" />
      </a>
      <a
        href="https://github.com/jcg0"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img src={gitHub} alt="github icon" />
      </a>
    </div>
  );
};

export default Links;
