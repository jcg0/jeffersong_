import React from "react";
import "./NavItems.css";

const NavItems = ({ handlePageChange }) => {
  return (
    <div>
      <button onClick={() => handlePageChange("Home")}>
        <a href="#home">Home</a>
      </button>
      <button onClick={() => handlePageChange("About")}>
        <a href="#about">About</a>
      </button>
      <button onClick={() => handlePageChange("Projects")}>
        <a href="#projects">Projects</a>
      </button>
      <button onClick={() => handlePageChange("Skills")}>
        <a href="#skills">Skills</a>
      </button>
      <button onClick={() => handlePageChange("Contact")}>
        <a href="#contact">Contact</a>
      </button>
    </div>
  );
};

export default NavItems;
