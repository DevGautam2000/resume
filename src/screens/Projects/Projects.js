import React from "react";
import Nav from "../../components/Navbar/Nav";
import "./Projects.css";
import projects from "../../util/projects";
import source from "../../assets/source.svg";

const Projects = () => {
  return (
    <div className="project__main">
      <Nav bg={{ backgroundColor: "rgba(114, 111, 111, 0.9)" }} />

      <div className="project__box">
        {projects.map(({ id, name, description, tech_stacks, source_code }) => (
          <div key={id} className="project__card">
            <p className="project__para1">
              <span className="project__name">{name}</span>

              <span className="project__stack">
                {tech_stacks.map((stack, index) => (
                  <img
                    key={index}
                    src={stack}
                    className="project__img"
                    alt=""
                  />
                ))}
              </span>
            </p>

            <p className="project__description">{description}</p>

            <div className="project__overlay">
              <a
                href={source_code}
                style={{ color: "transparent" }}
                rel="noreferrer"
                target="_blank"
              >
                <span>
                  source
                  <img id="project__src__img" src={source} alt="" />
                </span>
              </a>
            </div>

            <a
              href={source_code}
              className="project__sm_source"
              rel="noreferrer"
              target="_blank"
            >
              <span>
                source
                <img id="project__src__sm__img" src={source} alt="" />
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
