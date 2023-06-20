import React from "react";
import "./style.css";
import image from "../../assets/images/Obra.PNG";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link, To, redirect } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import logo from "../../assets/images/logo.png";
export default function ObrasPage() {
  const RedirectPage = () => {
    console.log("test");
    return redirect("/home");
  };
  return (
    <>
      <header className="Header_Obra">
        <Link to="/">
          <img className="Logo_Obra" src={logo} />
        </Link>
      </header>
      <Link to="/" className="Link_Page_Obra">
          <IoArrowBackCircleOutline className="Icon_Back"/>
        </Link>
      <section className="Container_Obra">
       
        <div className="Image">
          <img src={image} />
        </div>
        <div className="Container_Informations">
          <h2 className="Title_Obra">São Vicente </h2>
          <h3 className="Subtitle_Obra">Contrato: n. 03.449/08</h3>
          <p className="Content_Obra">
            <strong>Objeto Contratual:</strong> Execução Das Obras Para
            Implantação de Infraestrutura e do Sistema de Tratamento de Esgotos
            de Polvilho – Município de Cajamar – Superintendência de Gestão de
            Empreendimentos da Metropolitana – Diretoria Metropolitana.{" "}
          </p>
          <h3 className="Subtitle_Obra">Contratante: SABESP</h3>
        </div>
      </section>
    </>
  );
}
