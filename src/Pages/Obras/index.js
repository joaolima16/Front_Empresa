import React from "react";
import "./style.css";
import image from "../../assets/images/Obra.PNG";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link, To} from "react-router-dom";
export default function ObrasPage() {

  return (
    <>
      <header className="Header_obra"></header>  
        <IoArrowBackCircleOutline className="icon_back" onClick={()=>{}}></IoArrowBackCircleOutline>
      <section className="container">
        <div className="image">
          <img src={image} />
        </div>
        <div className="container_informations">
            <h2 className="title_obra">São Vicente </h2>
            <h3 className="subtitle_obra">Contrato: n. 03.449/08</h3>
            <p className="content"><strong>Objeto Contratual:</strong> Execução Das Obras Para Implantação de Infraestrutura e 
            do Sistema de Tratamento de Esgotos de Polvilho – Município de Cajamar – Superintendência de Gestão de Empreendimentos da Metropolitana – Diretoria Metropolitana. </p>
            
            <h3 className="subtitle_obra">Contratante: SABESP</h3>
        </div>
      </section>
    </>
  );
}
