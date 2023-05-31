import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import React from "react";
import './style.css'
export default function ContentCard({obra, imagem, resumo,}) {
  return (
    <>
      <Card sx={{ maxWidth: 355 }} className="CardWrapper">
        <CardMedia
          component="img"
          alt="green iguana"
          height="170"
          image={imagem}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="section" className="TitleCard">
            {obra}
          </Typography>
          <Typography variant="body2" className="ContentCard" >
            {resumo}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Detalhes</Button>
          <Button size="small">Mais obras</Button>
        </CardActions>
      </Card>
    </>
  );
}
