import React, { useEffect, useState } from "react";
import ShopingCard from "../components/ShopingCard";
import { Box, Button, Typography } from "@mui/material";
import { centerDiv } from "../utils/CommonStyls";
import dealOfWeek from "../assets/images/deal.webp";

const Home = () => {
  const initialCountdownDate = new Date("2023-10-01T00:00:00").getTime(); // Example: October 1, 2023, 00:00:00
  const now = new Date().getTime();
  const initialCountdownDuration = Math.max(
    0,
    Math.floor((initialCountdownDate - now) / 1000)
  );

  const [countdown, setCountdown] = useState(initialCountdownDuration);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      }
    }, 1000); // Update the countdown every 1 second

    return () => clearInterval(countdownInterval); // Clean up the interval on component unmount
  }, [countdown]);

  // Calculate minutes and seconds for display
  const days = Math.floor(countdown / (3600 * 24));
  const hours = Math.floor((countdown % (3600 * 24)) / 3600);
  const minutes = Math.floor((countdown % 3600) / 60);
  const seconds = countdown % 60;
  return (
    <Box padding={"100px 0"}>
      <Box width={"100%"} sx={{ ...centerDiv, flexWrap: "wrap" }}>
        <Box
          id="dealOfTheWeek"
          width={"100%"}
          sx={{
            ...centerDiv,
            position: "relative",
            backgroundColor: "#f3f2ee",
            flexWrap: "wrap",
            paddingY:'100px'
          }}
        >
          <Box zIndex={'5'} margin={'0 50px'}>
            <Typography
              margin={"20px"}
              fontSize={"34px"}
              fontWeight={"600"}
              color={"#b7b7b7"}
            >
              Man Collection
            </Typography>
            <Typography
              margin={"20px"}
              fontSize={"34px"}
              fontWeight={"600"}
              color={"black"}
            >
              Girls Collection
            </Typography>
            <Typography
              margin={"20px"}
              fontSize={"34px"}
              fontWeight={"600"}
              color={"#b7b7b7"}
            >
              Accessories
            </Typography>
          </Box>
          <Box sx={{ ...centerDiv, marginY:'50px'}}>
            <img
              src={dealOfWeek}
              alt="Girl in a jacket"
              width="300"
              height="300"
            />
            <Box
              width={"100px"}
              height={"100px"}
              sx={{
                ...centerDiv,
                backgroundColor: "#111111;",
                borderRadius: "50px",
                color: "white",
                flexDirection: "column",
                position: "relative",
         
                bottom: "150px",
                right: "100px",
              }}
            >
              <Typography fontSize={"17px"}>Sale of</Typography>
              <Typography fontSize={"20px"} fontWeight={"700"}>
                $29.29
              </Typography>
            </Box>
          </Box>
          <Box width={"500px"}>
            <Typography margin={'20px'} variant="body2" color={'red'}fontWeight={'400'}>DEAL OF THE WEEK</Typography>
            <Typography  margin={'20px'} variant="h4" fontWeight={'700'}>Multi-pocket Chest Bag Black</Typography>
            <Typography  margin={'30px 20px'} variant="h4" fontWeight={'700'}>{`${days} : ${hours} : ${minutes} : ${seconds} `}</Typography>
            <Typography  margin={'20px'} variant="body2" sx={{wordSpacing:'7px'}} fontWeight={'100'}>{`Days  :  Hours : Minutes : Seconds `}</Typography>
            <Button  variant="contained" sx={{backgroundColor:'black' ,letterSpacing:'2px', padding:'10px 25px',margin:"30px 20px"}}>Shop Now</Button>
          </Box>
        </Box>
        <Box
          position={"absolute"}
          width={"600px"}
          height={"300px"}
        

          sx={{ backgroundColor: "white",left:"-18%",zIndex:'1' }}
        ></Box>
      </Box>

      <Box className={"clothCard"} sx={{ ...centerDiv, flexWrap: "wrap" }}>
        <ShopingCard />
        <ShopingCard />
        <ShopingCard />
        <ShopingCard />
        <ShopingCard />
        <ShopingCard />
        <ShopingCard />
        <ShopingCard />
        <ShopingCard />
        <ShopingCard />
      </Box>
    </Box>
  );
};

export default Home;
