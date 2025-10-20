import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  const { title, description, tech, link, repo, image } = project;

  return (
    <article className="project card">
      <div className="project-media">
        {image ? (
          <img src={image} alt={title} className="project-img" />
        ) : (
          <div className="mockup" />
        )}
      </div>

      <div className="project-body">
        <h3>{title}</h3>
        <p className="muted">{description}</p>
        <ul className="tags">
          {tech.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
        <div className="actions">
          {repo && (
            <a className="btn" href={repo} target="_blank" rel="noreferrer">
              <FaGithub /> Code
            </a>
          )}
          {link && (
            <a className="btn" href={link} target="_blank" rel="noreferrer">
              <FaExternalLinkAlt /> Live
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
