import React from "react";
import Nav from "../../components/Navbar/Nav";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./Projects.css";
import projects from "../../util/projects";
import source from "../../assets/source.svg";
import prev from "../../assets/preview.png";

const Projects = () => {
 
  return (
    <>
      <Nav bg={{ backgroundColor: "rgba(114, 111, 111, 0.9)" }} />

      <div className="project__main">
        <div className="project__box">
          {projects.map(
            ({ id, name, description, tech_stacks, source_code,img_src,preview }, index) => (
              <div
                key={id}
                className="project__card"
                style={{
                  background: `url(${img_src})`,
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                }}
              >
                <div className="project__preview">
                  <p className="project__para1">
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
                </div>

                <p className="project__description">
                  <span className="project__para1">
                    <span className="project__name">{name}</span>
                  </span>
                  {description}
                  {name === "Ebsite" ? (
                    <a
                      style={{ color: "lightgreen", textDecoration: "none" }}
                      href="https://github.com/rishabhprasad255"
                      rel="noreferrer"
                      target="_blank"
                    >
                      @rishabhprasad255
                    </a>
                  ) : null}
                </p>

                <div className="project__overlay">
                  <a
                    href={source_code}
                    style={{ color: "transparent", textDecoration: "none" }}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <span>
                      source
                      <img id="project__src__img" src={source} alt="" />
                    </span></a>
                    <a
                    href={preview}
                    style={{ color: "transparent", textDecoration: "none" }}
                    rel="noreferrer"
                    target="_blank"
                    >
                    {preview.length > 0 ? <span>
                      preview
                      <img id="project__src__img" src={prev} alt="" />
                    </span>:null}
                  </a>
                </div>

               
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
