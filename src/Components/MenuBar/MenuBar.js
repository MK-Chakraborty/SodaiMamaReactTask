import React from "react";
import "./MenuBar.css";

const MenuBar = () => {
  return (
    <nav className="mainContainerMenu">
      <div className="mainMenuItem">
        <a href="/">Fresh</a>
      </div>
      <div className="mainMenuItem">
        <a href="/">Regular</a>
      </div>
      <div className="mainMenuItem">
        <a href="/">Preorder</a>
      </div>
    </nav>
  );
};

export default MenuBar;
