import React from "react";
import "./style.css";
import image from "../../assets/images/logo.png";
export default function Header() {
  return (
    <header className=" Parallax Header">
      <section className="SectionTitle">
        <img className="logo" src={image} />
        <h1 className="Title">CONSTRUTORA LTDA </h1>
      </section>

      <nav className="NavList">
        <a href="#sobre" className="link">
          <li className="NavLink"> Sobre</li>
        </a>
        <a href="#obras" className="link">
          <li className="NavLink"> Obras</li>
        </a>
        <a>
          <li className="NavLink">Contato</li>
        </a>

      </nav>
    </header>
  );
}
