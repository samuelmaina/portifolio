import React from "react";
import "../assets/styles/Project.scss";
import { projects } from "../data/constants";
// Import the projects array

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <a
              href={project.visit || project.source}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={project.images[0]}
                className="zoom"
                alt="thumbnail"
                width="100%"
              />
            </a>
            <a
              href={project.visit || project.source}
              target="_blank"
              rel="noreferrer"
            >
              <h2>{project.title}</h2>
            </a>
            <ul>
              {project.description.map((desc, index) => (
                <li key={index}>
                  {desc}
                  <br />
                </li>
              ))}
            </ul>
            <div className="tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="skills">
              <strong>Skills:</strong>
              {project.skills.map((skill, index) => (
                <span key={index} className="skill">
                  {skill}
                </span>
              ))}
            </div>
            <div className="links">
              <a href={project.source} target="_blank" rel="noreferrer">
                Source Code
              </a>
              {project.visit && (
                <a href={project.visit} target="_blank" rel="noreferrer">
                  Visit Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
