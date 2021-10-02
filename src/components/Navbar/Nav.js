import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import Pdf from "../../assets/resume_new.pdf";

function Nav({ bg, text }) {
  const onResumeClick = () => {
    window.open(Pdf);
  };

  return (
    <div className="nav__container" style={bg}>
      <Link to="/" className="nav__list">
        <li style={text}>Home</li>
      </Link>
      <a href="#about" className="nav__list">
        <li style={text}>About</li>
      </a>
      <Link to="/projects" className="nav__list">
        <li style={text}>Projects</li>
      </Link>
      <a
        href=" "
        className="nav__list"
        target="_blank "
        onClick={onResumeClick}
        rel="noreferrer"
      >
        <li style={text}>Resume</li>
      </a>
    </div>
  );
}

export default Nav;
