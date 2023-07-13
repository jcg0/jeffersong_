import React from "react";
import "./NavItems.css";

const NavItems = ({ handlePageChange }) => {
  return (
    <div>
      <ul>
        <li>
          <a href="#home" onClick={() => handlePageChange("Home")}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => handlePageChange("About")}>
            About
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => handlePageChange("Projects")}>
            Projects
          </a>
        </li>
        <li>
          <a href="#skills" onClick={() => handlePageChange("Skills")}>
            Skills
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => handlePageChange("Contact")}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavItems;
