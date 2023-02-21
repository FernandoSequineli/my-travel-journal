import React from "react";
import icon from "../assets/icon.png";

const Hero = () => {
  return (
    <header>
      <div className="hero">
        <img src={icon} alt="hero icon" />
        <span>my travel journal.</span>
      </div>
    </header>
  );
};

export default Hero;
