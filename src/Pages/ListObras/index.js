import React from "react";
import "./style.css";
import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import teste from "../../assets/images/Imagem4.jpg";
import teste2 from "../../assets/images/Imagem4.jpg";
import teste3 from "../../assets/images/Imagem4.jpg";

export default function ListObrasPage() {

    const itemData = [
        {img: teste, title: "teste1"},
        {img: teste3, title: "teste2"},
        {img: teste2, title: "teste13"},
        {img: teste2, title: "teste13"},
        {img: teste2, title: "teste13"},
        {img: teste2, title: "teste13"},
        {img: teste2, title: "teste13"},
        {img: teste2, title: "teste13"},
        
    ]
  return (
    <>
      <header className="Header"></header>
      <section className="Container_List">
      <ImageList sx={{ width: 800, height: 700 }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=248&fit=crop&auto=format`}
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
      </section>
    </>
  );
}
