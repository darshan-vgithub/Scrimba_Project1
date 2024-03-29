import React from "react";
import pic from "../assets/download.png";
import "../Components/style.css";

const Navbar = () => {
  return (
    <nav>
      <img src={pic} alt="react-logo" className="nav--icon" />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  );
};

export default Navbar;
