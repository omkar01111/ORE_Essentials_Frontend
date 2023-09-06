import * as React from "react";
import {
  Box,
  IconButton,
  Typography,
  SwipeableDrawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { Search } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Home, Mail, Store } from "lucide-react";

export default function SwipeableTemporaryDrawer({ pages }) {
  const pageIcons = [
    <Home size={20} strokeWidth={2.25} />,
    <Store size={20} strokeWidth={2.25} />,
    <Mail size={20} strokeWidth={2.25} />,
  ];
  const [state, setState] = React.useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {pages.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>{pageIcons[index]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

      <Box
        width={"30%"}
        sx={{
          gap: "2%",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <IconButton
          sx={{
            "&:hover": {
              color: "red",
            },
          }}
        >
          <Search size={20} strokeWidth={3} />
        </IconButton>
        <IconButton
          sx={{
            "&:hover": {
              color: "red",
            },
          }}
        >
          <FavoriteBorderIcon size={20} strokeWidth={3} />
        </IconButton>
        <IconButton
          sx={{
            "&:hover": {
              color: "red",
            },
          }}
        >
          <FavoriteBorderIcon size={20} strokeWidth={3} />
        </IconButton>

        <Typography color={"red"}>$0.00</Typography>

        <IconButton
          sx={{
            "&:hover": {
              color: "red",
            },
          }}
        >
          <FavoriteBorderIcon size={20} strokeWidth={3} />
        </IconButton>
      </Box>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon /> {/* Use MenuIcon here */}
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
