import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./styles/global.css";

function App() {
  return (
    <div className="app">
      {/* 🌌 Background layers */}
      <div className="stars"></div>
      <div className="meteors">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="meteor"
            style={{
              top: Math.random() * window.innerHeight + "px",
              left: Math.random() * window.innerWidth + "px",
              animationDelay: Math.random() * 8 + "s",
              animationDuration: 2 + Math.random() * 3 + "s",
            }}
          ></div>
        ))}
      </div>

      {/* Portfolio Content */}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
