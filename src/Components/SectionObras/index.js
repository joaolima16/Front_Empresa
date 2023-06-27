import React from "react";
import "./style.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image from "../../assets/images/Obra.PNG";
import ContentCard from "../CardObra/CardObra";
export default function SectionObras() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
     
          
      <section className="parallax"> </section>
      <div className="Container">
        <h1 className="TitleObra" id="obras">Principais Obras</h1>
        <Carousel responsive={responsive}>
          <div>
            <ContentCard
              obra="São Vicente"
              resumo="Execução de Redes Coletoras, Coletores Tronco, Ligações Domiciliares, Linhas de Recalque e Estações Elevatórias de Esgotos de São Vicente
             – 2ª Etapa do Programa Onda Limpa – Lote 3 – Em  execução."
              imagem={image}
            />
          </div>
          <div>
            <ContentCard
              obra="ETE Polvilho"
              resumo="Execução de Redes Coletoras, Coletores Tronco, Ligações Domiciliares, Linhas de Recalque e Estações Elevatórias de Esgotos de São Vicente
             – 2ª Etapa do Programa Onda Limpa – Lote 3 – Em  execução."
              imagem={image}
            />
          </div>
          <div>
            <ContentCard
              obra="São Vicente"
              resumo="Execução de Redes Coletoras, Coletores Tronco, Ligações Domiciliares, Linhas de Recalque e Estações Elevatórias de Esgotos de São Vicente
             – 2ª Etapa do Programa Onda Limpa – Lote 3 – Em  execução."
              imagem={image}
            />
          </div>
          <div>
            <ContentCard
              obra="São Vicente"
              resumo="Execução de Redes Coletoras, Coletores Tronco, Ligações Domiciliares, Linhas de Recalque e Estações Elevatórias de Esgotos de São Vicente
             – 2ª Etapa do Programa Onda Limpa – Lote 3 – Em  execução."
              imagem={image}
            />
          </div>
          <div>
            <ContentCard
              obra="São Vicente"
              resumo="Execução de Redes Coletoras, Coletores Tronco, Ligações Domiciliares, Linhas de Recalque e Estações Elevatórias de Esgotos de São Vicente
             – 2ª Etapa do Programa Onda Limpa – Lote 3 – Em  execução."
              imagem={image}
            />
          </div>
        </Carousel>
      </div> 
    </>
  );
}
