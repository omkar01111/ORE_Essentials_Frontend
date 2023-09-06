import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { centerDiv } from "../utils/CommonStyls";

const Footer = () => {


  return (
    <Box sx={{...centerDiv,flexDirection:'column',backgroundColor:'black',color:'white',padding:'0 20px'}}>
      <Box sx={{...centerDiv,flexDirection:'row',gap:'90px',flexWrap:'wrap',paddingY:'80px'}}>
        <Box width={'300px'} sx={{display:{xs:'none',sm:'flex'} ,flexDirection:'column', gap:'25px'}}>
            <Typography  variant="h4">ORE</Typography>
          <Typography variant={'body1'} color={'grey'} fontWeight={'100'} >
            The customer is at the heart of our unique business model, which
            includes design.
          </Typography>
          <Typography>LOgo</Typography>
        </Box>
        <Box sx={{display:'flex' ,flexDirection:'column', gap:'18px'}}>
          <Typography  variant="h6" fontWeight={'600'}>SHOPPING</Typography>
          <Typography variant="body1" fontWeight={'100'} color={'grey'} >Clothing Store</Typography>
          <Typography variant="body1" fontWeight={'100'} color={'grey'}>Tranding SHose</Typography>
          <Typography variant="body1" fontWeight={'100'} color={'grey'}>Accessories</Typography>
          <Typography variant="body1" fontWeight={'100'} color={'grey'}>Sale</Typography>
        </Box>
        <Box sx={{display:'flex' ,flexDirection:'column', gap:'18px'}}>
        <Typography variant="h6" fontWeight={'600'} >SHOPPING</Typography>
          <Typography variant="body1" fontWeight={'100'} color={'grey'}>Clothing Store</Typography>
          <Typography variant="body1" fontWeight={'100'} color={'grey'}>Tranding SHose</Typography>
          <Typography variant="body1" fontWeight={'100'} color={'grey'}>Accessories</Typography>
          <Typography variant="body1" fontWeight={'100'} color={'grey'}>Sale</Typography>
        </Box>
        <Box width={'300px'} sx={{display:'flex' ,flexDirection:'column', gap:'25px'}}>
        <Typography>NEWLETTER</Typography>
          <Typography variant="p">Be the first to know about new arrivals, look books, sales & promos!</Typography>
          <Typography>mail</Typography>
        </Box>
      </Box>
      <Divider sx={{color:'red'}} />
      <Box sx={{...centerDiv,padding:'30px 0' ,borderTop:'1px solid grey' ,width:'75%',}}>
        <Typography>
          Copyright © 2023 All rights reserved | This template is made with
          by ORE
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
