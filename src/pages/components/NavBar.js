import React from "react";
import NavItems from "./NavItems";

const NavBar = (props) => {
  return (
    <div>
      <div>Jefferson Griebel</div>
      <NavItems handlePageChange={props.handlePageChange} />
    </div>
  );
};

export default NavBar;
