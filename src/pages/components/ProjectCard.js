import React from "react";
import "./ProjectCard.css";

const ProjectCard = (props) => {
  return (
    <div className="project-card-container">
      <a href={props.url}>
        <p className="project-name">{props.name}</p>
        <img className="project-card-img" src={props.img} alt="" />
      </a>
    </div>
  );
};

export default ProjectCard;
