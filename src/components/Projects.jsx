import React, { useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import "./Projects.css";
import portImg from "../assets/port.jpg";
const projects = [
  {
    title: "Cartoonize",
    description:
      "Transform images and videos into cartoon-style visuals with Python-based processing.",
    tech: ["Python", "OpenCV", "Deep Learning", "React"],
    repo: "https://github.com/Avantikarudrawar11/Cartoonize",
    image: "./cartoon.jpg",
  },
  {
    title: "Real-Estate NFT Platform",
    description:
      "Ethereum real-estate platform enabling property tokenization and transfers via NFTs and smart contracts.",
    tech: ["Solidity", "Hardhat", "Ethers.js", "React", "JavaScript"],
    repo: "https://github.com/Avantikarudrawar11/Real-Estate-Using-BlockChain-Smart-Contract-And-Non-Fungible-Token",
    image: "./bc.jpg",
  },
  {
    title: "Portfolio",
    description: "This site you're viewing is My Personal Portfolio. An interactive and visually appealing portfolio site developed with React.js and styled using HTML, CSS, and JavaScript, designed to highlight my work and skills.",
    tech: ["React", "CSS", "JavaScript", "HTML"],
    repo: "https://github.com/Avantikarudrawar11/Portfolio.git",
    link: "https://Avantikarudrawar11.github.io/Portfolio",
    image: portImg,
  },
];

function Projects() {
  const scrollRef = useRef(null);

  // Auto-scroll
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const interval = setInterval(() => {
      if (scrollContainer) {
        scrollAmount += 2; // adjust speed here
        if (
          scrollAmount >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollAmount = 0; // reset to start
        }
        scrollContainer.scrollTo({ left: scrollAmount, behavior: "smooth" });
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Manual scroll
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const newScroll =
        direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;

      scrollRef.current.scrollTo({ left: newScroll, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <p className="subtitle">A selection of my work. Please Visit my Github for more projects👨‍💻</p>

      <div className="projects-container">
        <button className="scroll-btn left" onClick={() => scroll("left")}>
          ◀
        </button>

        <div className="project-scroll" ref={scrollRef}>
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>

        <button className="scroll-btn right" onClick={() => scroll("right")}>
          ▶
        </button>
      </div>
    </section>
  );
}

export default Projects;
