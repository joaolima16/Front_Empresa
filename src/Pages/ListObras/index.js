import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "./style.css";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
import { useDispatch } from "react-redux";
import teste from "../../assets/images/deposito-de-agua.png";
import { changeConstruction } from "../../Redux/Slice";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-creative';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, EffectCreative, Keyboard} from "swiper/modules";

export default function ListObrasPage() {
  const [Data, SetData] = useState([]);
  const dispatch = useDispatch();
  const FecthDatas = async () => {
    await axios
      .get("http://localhost:3333/obra")
      .then(({ data }) => {
        SetData(data);
        console.log(data);
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
      <header className="Header_obra">
        <Link to="/" className="Link_Page_Obra">
          <IoArrowBackCircleOutline className="Link_Home" />
        </Link>
        <h3 className="Title_Header">Portfólio de Obras</h3>
      </header>
      <section className="swiper_container">
      <Swiper
          slidesPerView={1}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          className="mySwiper"
        // effect={'coverflow'}
        // grabCursor={true}
        // slidesPerView={'auto'}
        // loop={true}
        // centeredSlides={true}
        // coverflowEffect={{
        //   rotate:0,
        //   stretch:0,
        //   depth: 100,
        //   modifier: 2.5
        // }}
        // modules={[EffectCoverflow, Pagination, Navigation]}
        // pagination={{el:'Swiper_Pagination', clickable: true}}
        // navigation={{
        //   nextEl: ".Swiper_btn_next",
        //   prevEl: ".Swiper_btn_preview",
        //   clickable: true
      >
          {Data.map((index) => {
            return (
              <SwiperSlide className="swiper-slide">
                <Link
                  to="/obra"
                  onClick={() => {
                    dispatch(changeConstruction(index));
                  }}
                >
                  <img
                    src={`http://localhost:3333/files/${index?.images[0].imageUrl}`}
                    className="Image_Obras"
                  />
                  
                </Link>
              </SwiperSlide>
            );
          })}
          <div className="Swiper_Controller">
          </div>
          <div className="Swiper_Pagination">

          </div>
        </Swiper>
        {/* <Carousel
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
          {Data.map((index) => {
            return (
              <Link
                to="/obra"
                onClick={() => {
                  dispatch(changeConstruction(index));
                }}
              >
                <img
                  src={`http://localhost:3333/files/${index?.images[0].imageUrl}`}
                  className="Image_Obras"
                />
                ;
              </Link>
            );
          })}
        </Carousel> */}
      </section>
      <Footer />
    </>
  );
}
