import React from "react";
import Carousel from "react-multi-carousel";
import teste from "../../assets/images/Obra.PNG";
import teste2 from "../../assets/images/obra2.PNG";
import teste3 from "../../assets/images/obra3.PNG";
import "./style.css";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Footer from "../../Components/Footer";

export default function ListObrasPage() {
  const itemData = [
    { img: teste, title: "teste1" },
    { img: teste2, title: "teste2" },
    { img: teste3, title: "teste13" },
    { img: teste3, title: "teste13" },
    { img: teste3, title: "teste13" },
    { img: teste3, title: "teste13" },
  ];
  return (
    <>
      <header className="Header_obra">
        <Link to="/" className="Link_Page_Obra">
          <IoArrowBackCircleOutline className="Link_Home" />
        </Link>
        <h3 className="Title_Header">Portfólio de Obras</h3>
      </header>
      <section className="Container_List">
        <div
          style={{
            position: "relative",
          }}
        >
          <Carousel
            additionalTransfrom={0}
            arrows={false}
            autoPlaySpeed={1000}
            centerMode={false}
            className="Carrosel_Container"
            containerClass="container-padding-bottom"
            dotListClass=""
            draggable
            focusOnSelect
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={true}
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
                  max: 350,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 6,
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
            showDots
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
           {itemData.map((index)=>{
            return(
                <img src={index.img} className="Image"/>
            )
           })}
          </Carousel>
        </div>
       
      </section>
      <Footer />
    </>
  );
}
