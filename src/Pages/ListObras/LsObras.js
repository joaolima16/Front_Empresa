import axios from "axios";
import React, { useEffect, useState } from "react";
import {IoArrowBackCircleOutline, IoArrowForwardCircleOutline, } from "react-icons/io5";
import "react-multi-carousel/lib/styles.css";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Footer from "../../Components/Footer/Footer";
import "./style.css";
import { changeConstruction } from "../../Redux/Slice";


export default function ListObrasPage() {
  const [Data, SetData] = useState([]);
  const dispatch = useDispatch();
  const [ImageIndex, SetImageIndex] = useState(0);

  const NextBtn = ({ onClick }) => {
    return (
      <div className="Icon_route Next" onClick={onClick}>
        <IoArrowForwardCircleOutline className="Icon" />
      </div>
    );
  };
  const PrevBtn = ({ onClick }) => {
    return (
      <div onClick={onClick} className="Icon_route Prev">
        <IoArrowBackCircleOutline className="Icon" />
      </div>
    );
  };

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    beforeChange: (current, next) => SetImageIndex(next),
  };
  const FecthDatas = async () => {
    await axios
      .get("http://localhost:3333/obra")
      .then(({ data }) => {
        SetData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    FecthDatas();
  }, []);

  return (
    <>
      <div className="Container_List">
        <header className="Header_obra">
          <Link to="/" className="Link_Page_Obra">
            <IoArrowBackCircleOutline className="Link_Home" />
          </Link>
          <h3 className="Title_Header">Portfólio de Obras</h3>
        </header>
        <section className="Carrosel_Container">
          <Slider {...settings}>
            {Data.map((index, idx) => {
              return (
                <div
                  className={idx === ImageIndex ? "slide activeSlide" : "slide"}
                >
                     <Link
                  to="/obra"
                  onClick={() => {
                    dispatch(changeConstruction(index));
                  }}
                >
                  <img
                    className="Images_List"
                    src={`http://localhost:3333/files/${index?.images[0].imageUrl}`}
                  />
                  </Link>
                </div>
              );
            })}
          </Slider>
        </section>
        <Footer />
      </div>
    </>
  );
}
