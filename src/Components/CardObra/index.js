import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import React, { useState } from "react";
import './style.css'

import { Link } from "react-router-dom";
export default function ContentCard({obra, imagem, resumo,}) {

  const [state,setState] = useState(false);
  
  return (
    <>
      <Card sx={{ maxWidth: 355 }} className="CardWrapper">
        <CardMedia
          component="img"
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
          <Button size="small"><Link to="/obra" className="link_page">Detalhes</Link></Button>
          <Button size="small"><Link to="/obras" className="link_page">Mais obras</Link></Button>
        </CardActions>
      </Card>
    </>
  );
}
