import React from "react";
import "./NavItems.css";

const NavItems = ({ handlePageChange }) => {
  return (
    <div className="nav-items">
      <a href="#home">
        <button onClick={() => handlePageChange("Home")}>Home</button>
      </a>
      <a href="#about">
        <button onClick={() => handlePageChange("About")}>About</button>
      </a>
      <a href="#projects">
        <button onClick={() => handlePageChange("Projects")}>Projects</button>
      </a>
      <a href="#skills">
        <button onClick={() => handlePageChange("Skills")}>Skills</button>
      </a>
      <a href="#contact">
        <button onClick={() => handlePageChange("Contact")}>Contact</button>
      </a>
    </div>
  );
};

export default NavItems;
