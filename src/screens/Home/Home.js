import React, { useState, useEffect } from "react";
import Body from "../../components/Body/Body";
import HeaderBody from "../../components/HeaderBody/HeaderBody";
import Nav from "../../components/Navbar/Nav";
import { useInView } from "react-intersection-observer";
import "./Home.css";
import mail from "../../assets/mail.svg";
import mobile from "../../assets/mobile-solid.svg";
import info from "../../util/footerInfo";

const Home = () => {
  const [headerRef, headerInView] = useInView({ threshold: 0 });
  const [bodyRef, bodyInView] = useInView({ threshold: 0 });
  const [lastRef, lastInView] = useInView({ threshold: 0 });
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const cleanup = window.addEventListener("scroll", () => {
      setHeight(window.scrollY);
    });

    return cleanup;
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
                : lastInView
                ? "white"
                : "white",
          }}
        />
        <HeaderBody />
      </header>

      {/* body */}
      <div id="about" className="home__body" ref={bodyRef}>
        <h3>Glimpse to Tech Stacks</h3>
        <Body />
      </div>

      <div className="home__last" ref={lastRef}>
        <div className="home__black__box"></div>

        <div className="home__contact__container">
          <div className="home__contact__box">
            <li>
              <img src={mobile} alt="" /> <span>7384716590</span>
            </li>
            <li>
              <img src={mail} alt="" />{" "}
              <span>
                <a
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "black",
                  }}
                  href="mailto: devgautam1231@gmail.com"
                >
                  devgautam1231@gmail.com
                </a>
              </span>
            </li>
          </div>
          <div className="home__links__box">
            {info.map(({ id, image, src }) => (
              <li key={id}>
                <a href={src} target="_blank" rel="noreferrer">
                  <img src={image} alt="" />
                </a>
              </li>
            ))}
          </div>
        </div>
        <footer>2021 © Gautam Chandra Saha</footer>
      </div>
    </div>
  );
};

export default Home;
