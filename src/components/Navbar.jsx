import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Navbar.css";


function Navbar() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <img src="./logo.jpg" alt="My Portfolio Logo" className="logo" />
        <nav className="links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="social">
          <a aria-label="GitHub" href="https://github.com/Avantikarudrawar11" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a aria-label="LinkedIn" href="https://www.linkedin.com/in/avantika-rudrawar-566877246" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
