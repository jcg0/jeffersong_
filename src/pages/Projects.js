import React from "react";
import ProjectCard from "./components/ProjectCard";
import CodeCollective from "../assets/images/CodeCollective.png";
import Recipesy from "../assets/images/Recipesy.png";
import WeatherDashboard from "../assets/images/WeatherDashboard.png";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: "01",
      img: CodeCollective,
      name: "Code Collective",
      url: "https://code-collectives.herokuapp.com/",
    },
    {
      id: "02",
      img: WeatherDashboard,
      name: "Weather Dashboard",
      url: "https://jcg0.github.io/mod6-challenge/",
    },
    {
      id: "03",
      img: Recipesy,
      name: "Recipesy",
      url: "https://jcg0.github.io/project-1-recipesy/",
    },
  ];

  return (
    <div className="project-container">
      {projects.map((projects) => (
        <ProjectCard
          img={projects.img}
          name={projects.name}
          url={projects.url}
        />
      ))}
    </div>
  );
};

export default Projects;
