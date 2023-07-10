import React, { useEffect, useState } from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import logo from "../../assets/images/logo.png";
import "./style.css";
import axios from "axios";

export default function ObrasPage() {
  const State = useSelector((state) => state?.sliceReducer.initialState);
  const [DataImage, SetDataImage] = useState([]);
  console.log(State);
  const FecthData = () => {
    axios
      .get(
        `http://localhost:3333/obra/images/${
          State[5] == "" ? State[5] : State?.id
        }`
      )
      .then(({ data }) => {
        SetDataImage(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    FecthData();
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
          <img
            src={`http://localhost:3333/files/${
              State[1] == "" ? State?.images[0].imageUrl : State[1]
            }`}
          />
        </div>
        <div className="Container_Informations">
          <h2 className="Title_Obra">{State[0]}</h2>
          <h3 className="Subtitle_Obra">
            Contrato: n.{State[3] == "" ? State?.contrato : State[3]}
          </h3>
          <p className="Content_Obra">
            <strong>Objeto Contratual:</strong>{" "}
            {State[2] == "" ? State[2] : State?.obra}
          </p>
          <h3 className="Subtitle_Obra">
            Contratante: {State[4] == "" ? State[4] : State?.contratante}
          </h3>
          <h3 className="Subtitle_Obra">
            <strong>Situação:</strong>{" "}
            {State[6] == "" ? State[6] : State?.status}
          </h3>
        </div>
      </section>
      <section className="Section_Obras">
        <div class="container">
          <div class="row align-items-start">
            <div class="col">
              {DataImage.map(({ imageUrl }) => {
                return (
                  <img
                    src={`http://localhost:3333/files/${imageUrl}`}
                    className="ListImages"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
