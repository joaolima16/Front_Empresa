import React from "react";
import "./style.css";
import image from "../../assets/images/Obra.PNG";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link, To, redirect } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import teste from '../../assets/images/Imagem1.jpg'
import teste2 from '../../assets/images/Imagem2.jpg'
import teste3 from '../../assets/images/Imagem3.jpg'
import logo from "../../assets/images/logo.png";
import Footer from "../../Components/Footer/Footer";
export default function ObrasPage() {
  const dataImages = [
    {image: teste},
    {image: teste2},
    {image: teste3},
    {image: teste3},
    {image: teste3},
  ]
  return (
    <>
      <header className="Header_Obra">
        <Link to="/">
          <img className="Logo_Obra" src={logo} />
        </Link>
        <p className="Content_Header">Detalhes da obra</p>
      </header>
      <Link to="/" className="Link_Page_Obra">
        <IoArrowBackCircleOutline className="Icon_Back" />
      </Link>
      <section className="Container_Obra">

        <div className="Image_Obra">
          <img src={image} />
        </div>
        <div className="Container_Informations">
          <h2 className="Title_Obra">São Vicente </h2>
          <h3 className="Subtitle_Obra">Contrato: n. 03.449/08</h3>
          <p className="Content_Obra">
            <strong>Objeto Contratual:</strong> Execução Das Obras Para
            Implantação de Infraestrutura e do Sistema de Tratamento de Esgotos
            de Polvilho – Município de Cajamar – Superintendência de Gestão de
            Empreendimentos da Metropolitana – Diretoria Metropolitana.
          </p>
          <h3 className="Subtitle_Obra">Contratante: SABESP</h3>
          <h3 className="Subtitle_Obra"><strong>Situação:</strong> FINALIZADA</h3>
                  </div>
      </section>
      <section className="Section_Obras">
        <div class="container">
          <div class="row align-items-start">
            <div class="col">
              {dataImages.map(({image})=>{
                return(
                  <img src={image} className="ListImages" />
                )
              })}
            
            </div>
            {/* <div class="col">
              <img src={teste} className="ListImages" />
            </div>
            <div class="col">
              <img src={teste2} className="ListImages" />
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col">
              <img src={teste3} className="ListImages" />
            </div>
            <div class="col">
              <img src={image} className="ListImages" />
            </div>
            <div class="col">
              <img src={image} className="ListImages" />
            </div> */}
          </div>
        </div>

      </section>

      <Footer />
    </>
  );
}
