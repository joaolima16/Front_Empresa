import React from "react";
import "./style.css";
import logo from '../../assets/images/logo.png'
export default function About() {
  return (
    <>

    <h1 className="TitleAbout">Sobre A KMG CONSTRUTORA</h1>
    <section className="Wrapper">
    <div className="AboutHistory">
    <p className="History">
            <strong>A KMG CONSTRUTORA</strong> é uma empresa que atua na área de construção civil
            há 16 anos, formada por profissionais com experiência de mais de 20
            anos no mercado.
          </p>

          <p className="History">
            Iniciamos nossas atividades em 2006 atuando em obras privadas no
            segmento de saneamento e com o passar do tempo expandimos a nossa
            área de atuação também para o setor público.
          </p>
          <p className="History">
            <strong>A KMG CONSTRUTORA</strong> conta em seu quadro com
            profissionais qualificados nas diversas áreas, desde os engenheiros,
            segurança do trabalho e de qualidade, administrativos, compradores,
            técnicos e funcionários operacionais. Investindo sempre no
            aperfeiçoamento contínuo da metodologia de trabalho e também na
            capacitação profissional dos seus colaboradores.
          </p>
    </div>
    <div className="Logo">
      <img src={logo} />
    </div>
    </section>
    </>
  );
}
