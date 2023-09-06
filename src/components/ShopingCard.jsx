import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import image from "../assets/images/cardImage.webp";
import Rating from "@mui/material/Rating";
import '../assets/styles/card.css'

const ShopingCard = () => {
  const nameOfCloth = "Ace anime print";
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Box>
      <Card
        variant="plain"
        className="card"
        sx={{ maxWidth: 263, margin: "15px" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardMedia
          component="img"
          alt="green iguana"
          width={"263px"}
          height="260px"
          image={image}
        />

        <CardContent sx={{ padding: "25px 0 0 0" }}>
          {isHovered && <Button  className={`button-container ${isHovered ? 'hovered' : ''}`} sx={{display:'block',color:'red' ,margin:'-10px 0  0 -5px' ,position:'relative'}}>+ Add To Cart</Button>}

          {!isHovered && (
            <Typography
              gutterBottom
              variant="body1"
              component="div"
              marginBottom={"5px"}
            >
              {nameOfCloth}
            </Typography>
          )}

          <Rating
            sx={{ fontSize: "18px", marginBottom: "8px" }}
            name="half-rating"
            defaultValue={2.5}
            precision={0.5}
          />
          <Typography
            gutterBottom
            variant="body1"
            component="div"
            fontWeight={"bold"}
          >
            $75.58
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ShopingCard;
