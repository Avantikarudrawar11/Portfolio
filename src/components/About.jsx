import React from "react";
import { motion } from "framer-motion";
import "./About.css";

function About() {
  return (
    <section id="about" className="section">
      <div className="grid">
        <motion.div
          className="about-card card"
          style={{ gridColumn: "span 7" }}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2>About</h2>
          <p className="subtitle">A little about me</p>
          <p>
            I am Avantika Rudrawar, a Software Engineer with experience in building
            responsive web apps and scalable solutions. Skilled in React, Python, Java,
            and SQL.
          </p>
          <p>
            Passionate about creating user-friendly applications, solving real-world
            problems, and continuously learning new technologies.
          </p>
        </motion.div>

        <motion.div
          className="skills card"
          style={{ gridColumn: "span 5" }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3>Skills</h3>
          <ul className="skill-list">
            <li>Python</li>
            <li>Java</li>
            <li>C</li>
            <li>JavaScript</li>
            <li>PHP</li>
            <li>React</li>
            <li>HTML & CSS</li>
            <li>SQL</li>
            <li>Oracle OIC</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
