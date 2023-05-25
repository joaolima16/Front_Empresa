import React from "react";
import './style.css'
export default function Header() {
  return (
    <header className=" Parallax Header">
      <section className="SectionTitle">
        <h1 className="Title"> KMG CONSTRUTORA EIRELI </h1>
      </section>

      <nav className="NavList">
        <li className="NavLink"> Sobre</li>
        <li className="NavLink"> Obras</li>
        <li className="NavLink">Serviços</li>
        <li className="NavLink">Contato</li>
      </nav>
    </header>
  );
}
