import React from "react";
import NavItems from "./NavItems";
import Links from "./Links";
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <div className="navBarContent">
      <div>Jefferson Griebel</div>
      <NavItems handlePageChange={props.handlePageChange} />
      <Links />
    </div>
  );
};

export default NavBar;
