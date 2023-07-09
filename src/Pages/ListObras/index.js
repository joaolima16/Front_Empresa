import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import teste from "../../assets/images/Obra.PNG";
import teste2 from "../../assets/images/obra2.PNG";
import teste3 from "../../assets/images/obra3.PNG";
import "./style.css";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";

export default function ListObrasPage() {
  const [Data, SetData] = useState([]);
  const FecthDatas = async () => {
    await axios
      .get("http://localhost:3333/obra")
      .then(({ data }) => {
        SetData(data);
        console.log(data)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const itemData = [
    { img: teste, title: "teste1" },
    { img: teste2, title: "teste2" },
    { img: teste3, title: "teste13" },
    { img: teste3, title: "teste13" },
    { img: teste3, title: "teste13" },
    { img: teste3, title: "teste13" },
  ];

  useEffect(() => {
    FecthDatas();
  }, []);

  return (
    <>
      <header className="Header_obra">
        <Link to="/" className="Link_Page_Obra">
          <IoArrowBackCircleOutline className="Link_Home" />
        </Link>
        <h3 className="Title_Header">Portfólio de Obras</h3>
      </header>
      <section className="Container_List">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={2000}
          centerMode={false}
          className="Container_Carrosel"
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 450,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 0,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={2}
          swipeable
        >
        
          {Data.map(({ images }) => {
            return (
              <Link to="/obra">
                <img
                  src={`http://localhost:3333/files/${images[0].imageUrl}`}
                  className="Image_Obras"
                />
                ;
              </Link>
            );
          })}
        </Carousel>
      </section>
      <Footer />
    </>
  );
}
