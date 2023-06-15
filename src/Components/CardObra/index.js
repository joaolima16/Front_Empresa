import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import React, { useState } from "react";
import './style.css'
import ModalContent from "../Modal";
export default function ContentCard({obra, imagem, resumo,}) {

  const [state,setState] = useState(false);
  const Toggle = () =>{  
    setState(!state)
    return (
        <ModalContent state={state} />

    )
  
  };
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
          <Button size="small" onClick={()=> Toggle() }>Detalhes</Button>
          <Button size="small">Mais obras</Button>
        </CardActions>
      </Card>
    </>
  );
}
