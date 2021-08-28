import { useState, useEffect, useRef } from "react";
import Wildlife from "../img/Wildlife.png";
import styled from "styled-components";
import Title from "./Title";

const Nav = styled.nav`
  margin-top: -5px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  z-index: 3000;
  transition: 0.6s;
  .logo {
    display: none;
  }

  ul {
    height: 70px;
    display: flex;
    align-items: center;
    padding-right: 80px;
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${(props) =>
      props.open ? "rgba(255, 255, 255, 0.5)" : "none"};
    .logo {
      display: block;
    }
    ul.menu {
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
      transform: ${(props) =>
        props.open ? "translateY(0);" : "translateY(-100%)"};
      opacity: ${(props) => (props.open ? 1 : 0)};
      transition: all 0.3s linear;
    }
    li {
      width: 100%;
      text-align: center;
      font-size: 1.1rem;
    }
    li a {
      color: #000;
    }
  }
`;

const NavBar = ({ open }) => {
  const [background, setBackground] = useState("transparent");
  const [color, setColor] = useState("#FFFFFF");
  const divRef = useRef();
  useEffect(() => {
    const handleScroll = () => {
      const div = divRef.current;
      const { y } = div.getBoundingClientRect();
      if (y < -150) {
        setBackground("#FFFFFFCC");
        setColor("#000000");
      } else {
        setBackground("transparent");
        setColor("#FFFFFF");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  if (window.screen.width < 768) {
    return (
      <div ref={divRef}>
        <Nav open={open}>
          <ul className="menu" data-animation="diagonal">
            <div className="logo">
              <a href="/">
                <img src={Wildlife} alt="Wildlife" />
              </a>
            </div>
            <li>
              <a href="/">
                Inicio
                <span className="border border-bottom"></span>
              </a>
            </li>
            <li>
              <a href="/nosotros">
                Nosotros
                <span className="border border-bottom"></span>
              </a>
            </li>
            <li>
              <a href="/servicios">
                Servicios
                <span className="border border-bottom"></span>
              </a>
            </li>
            <li>
              <a href="/noticias">
                Noticias
                <span className="border border-bottom"></span>
              </a>
            </li>
            <li>
              <a href="/galeria">
                Galeria
                <span className="border border-bottom"></span>
              </a>
            </li>
          </ul>
        </Nav>
      </div>
    );
  }
  if (window.screen.width > 768) {
    return (
      <div ref={divRef}>
        <Nav open={open} id="nav" style={{ background: background }}>
          <Title open={open} />
          <ul className="menu" data-animation="diagonal">
            <li>
              <a href="/" style={{ color: color }}>
                Inicio
                <span className="border border-bottom"></span>
              </a>
            </li>
            <li>
              <a href="/nosotros" style={{ color: color }}>
                Nosotros
                <span className="border border-bottom"></span>
              </a>
            </li>
            <li>
              <a href="/servicios" style={{ color: color }}>
                Servicios
                <span className="border border-bottom"></span>
              </a>
            </li>
            <li>
              <a href="/noticias" style={{ color: color }}>
                Noticias
                <span className="border border-bottom"></span>
              </a>
            </li>
            <li>
              <a href="/galeria" style={{ color: color }}>
                Galeria
                <span className="border border-bottom"></span>
              </a>
            </li>
          </ul>
        </Nav>
      </div>
    );
  }
};
export default NavBar;
