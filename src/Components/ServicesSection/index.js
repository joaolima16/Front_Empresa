import React from "react";
import "./style.css";
import icon1 from "../../assets/images/iconCivil1.png";
import icon2 from "../../assets/images/iconCivil2.png";
import icon3 from "../../assets/images/iconCivil3.png";
export default function ServicesSection() {
  return (
    <div className="ContainerService">
      <h1 className="TitleServices">Serviços</h1>
      <section className="WrapperContent">
        <div className="WrapperIcons">
          <img className="Image_Icons" src={icon1} />
          <p className="Content"> Construção De Edificios</p>
        </div>
        <div className="WrapperIcons">
          <img className="Image_Icons" src={icon2} />
          <p className="Content">Obras de urbanização - ruas, praças e calçadas </p>
        </div>
        <div className="WrapperIcons">
          <img className="Image_Icons" src={icon3} />
          <p className="Content">Obras de irrigação</p>
        </div>
      </section>
    </div>
  );
}
