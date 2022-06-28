import React from "react";
// import im from '../assets/dasdas.png'
import { FiTwitter } from "react-icons/fi";
import { BsDot } from "react-icons/bs";
import { VscGlobe } from "react-icons/vsc";
import { FaFigma } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
function Navbar(props) {
  return (
    <div className="navbar">
      <div className="nav-icon-div">
        <img
          src={require("../assets/dasdas.png")}
          alt="nav-icon"
          className="nav-icon"
        />
      </div>
      <div className="font-icons">
        <FiTwitter className="icon" />
        <BsDot />
        <VscGlobe className="icon" />
        <BsDot />
        <FaFigma className="icon" />
        <BsDot />
        <FiGithub className="icon" />
      </div>
    </div>
  );
}

export default Navbar;
