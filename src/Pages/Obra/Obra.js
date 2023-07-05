import React, { useEffect, useState } from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import teste from "../../assets/images/Imagem1.jpg";
import teste2 from "../../assets/images/Imagem2.jpg";
import teste3 from "../../assets/images/Imagem3.jpg";
import image from "../../assets/images/Obra.PNG";
import logo from "../../assets/images/logo.png";
import "./style.css";
import axios from "axios";
export default function ObrasPage() {
  const State = useSelector((state) => state?.sliceReducer.initialState);
  const [DataImage, SetDataImage] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3333/obra/images/${State[5]}`)
      .then((response) => {
        SetDataImage(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
          <img src={`http://localhost:3333/files/${State[1]}`} />
        </div>
        <div className="Container_Informations">
          <h2 className="Title_Obra">{State[0]}</h2>
          <h3 className="Subtitle_Obra">Contrato: n.{State[3]}</h3>
          <p className="Content_Obra">
            <strong>Objeto Contratual:</strong> {State[2]}
          </p>
          <h3 className="Subtitle_Obra">Contratante: {State[4]}</h3>
          <h3 className="Subtitle_Obra">
            <strong>Situação:</strong> {State[6]}
          </h3>
        </div>
      </section>
      <section className="Section_Obras">
        <div class="container">
          <div class="row align-items-start">
            <div class="col">
            {DataImage.map(({imageUrl})=>{
              return(
                <img src={`http://localhost:3333/files/${imageUrl}`} className="ListImages" />
              )
            })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
