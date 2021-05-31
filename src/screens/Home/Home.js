import React, { useState, useEffect } from "react";
import Body from "../../components/Body/Body";
import HeaderBody from "../../components/HeaderBody/HeaderBody";
import Nav from "../../components/Navbar/Nav";
import { useInView } from "react-intersection-observer";
import "./Home.css";

const Home = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0 });
  const [bodyRef, bodyInView] = useInView({ threshold: 0 });
  const [height, setHeight] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setHeight(window.scrollY);
    });
  }, []);

  return (
    <div className="home__main">
      {/* header */}
      <header className="home__header" ref={headerRef}>
        <Nav
          bg={{
            backgroundColor:
              height < 20
                ? "transparent"
                : headerInView
                ? "rgba(255, 255, 255, 0.9)"
                : bodyInView
                ? "rgba(114, 111, 111, 0.9)"
                : "transparent",
          }}
          text={{
            color:
              height < 20
                ? "white"
                : headerInView
                ? "black"
                : bodyInView
                ? "white"
                : "white",
          }}
        />
        <HeaderBody />
      </header>

      {/* body */}
      <div id="about" className="home__body" ref={bodyRef}>
        <h3>Here is what I work on.</h3>
        <Body />
      </div>

      <div className="home__projects">fuvk</div>

      {/* footer */}
      <footer></footer>
    </div>
  );
};

export default Home;
