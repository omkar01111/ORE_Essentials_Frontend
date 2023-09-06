import react, { useState } from "react";

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,

  Container,
  Button,

} from "@mui/material";


import { centerDiv } from "../utils/CommonStyls";
import { Heart, Search, ShoppingBag, User } from "lucide-react";
import { Link } from "react-router-dom";
import SwipeableTemporaryDrawer from "./drawer";

const Header = () => {
  const pages = ["Home", "Shope", "Contacts"];
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  

  };

  const isOpen = Boolean(anchorElNav);
  return (
    <nav>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          color: "black",
          height: "88px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box  sx={{ ...centerDiv ,width:{xs: "0", md: "20%"}}}> 
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "Montserrat Alternates, sans-serif",
                  fontWeight: 700,
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                ORE.
              </Typography>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                justifyContent: "start",
               
              }}
            >
             <SwipeableTemporaryDrawer pages={pages}/>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "Montserrat Alternates, sans-serif",
                fontWeight: 700,

                color: "inherit",
                textDecoration: "none",
              }}
            >
              ORE
            </Typography>
            {/*  */}
            <Box
              sx={{
                ...centerDiv,
                flexGrow: 1,
                display: {
                  xs: "none",
                  md: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
              
               
                  sx={{
                    fontFamily: "Montserrat Alternates, sans-serif",
                    my: 2,
                    color: "black",
                    display: "block",
                    margin: "0 5%",
                    padding: "0 10px",
                    position: "relative",
                    backgroundColor:'none', // Make sure the button is relatively positioned
                    "&:after": {
                      content: '" "', // Add double quotes around the content value
                      position: "absolute",
                      backgroundColor: "red",
                      height: "3px",
                      width: "100%",
                      left: "0",
                      bottom: "-10px",
                      transition: "0.3s",
                      transform: "scaleX(0)", // Start with the line hidden
                      transformOrigin: "left",
                    },
                    "&:hover:after": {
                      transform: "scaleX(1)", // Show the line on hover
                    },
                    "&:hover": {
                      backgroundColor: "transparent !important",
                      color: "red !important",
                    },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box width={"30%"} sx={{ ...centerDiv,gap:'2%',display:{xs:'none',md:'flex'} }}>
              <IconButton sx={{ '&:hover':{
                color:'red'
              }}}>
                <Search size={20} strokeWidth={3} />
              </IconButton>
              <IconButton sx={{'&:hover':{
                color:'red'
              }}}>
                <Heart  size={20} strokeWidth={3}  />
              </IconButton>
              <IconButton sx={{ '&:hover':{
                color:'red'
              }}}>
                <ShoppingBag  size={20} strokeWidth={3}  />
              </IconButton>
              
              <Typography color={'red'}>$0.00</Typography>

              <IconButton sx={{ '&:hover':{
                color:'red'
              }}}>
                <User  size={20} strokeWidth={3}  />
              </IconButton>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
    </nav>
  );
};

export default Header;
