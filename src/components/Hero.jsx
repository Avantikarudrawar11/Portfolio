import React from "react";
import { FaFileDownload } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import Animation from "./animation";
import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="section hero">
      <div className="hero-inner">
        <Animation direction="down">
          <div className="badge">Open to work</div>
        </Animation>

        <Animation direction="up">
          <h1>
            Hi, I'm <span className="grad">Avantika Rudrawar</span> 👋
          </h1>
        </Animation>

        <Animation delay={0.2}>
          <h3 className="typing">
            <Typewriter
              words={["Software Engineer", "Software Developer"]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h3>
        </Animation>

        <Animation delay={0.4}>
          <p className="lead">
            Software Engineer with experience in <b>React, Python, SQL</b> and a
            passion for building scalable, user-friendly applications.
          </p>
        </Animation>

        <Animation delay={0.6}>
          <div className="cta">
            <a className="btn primary" href="#projects">
              View Projects
            </a>
            <a className="btn accent" href="/resume.pdf" download>
              <FaFileDownload /> Download CV
            </a>
          </div>
        </Animation>
      </div>
    </section>
  );
}

export default Hero;
