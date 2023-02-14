import React, { useState } from "react";
import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const PAGES = ["Recents", "Favorites", "Add Playlist", "Akash"];

const DrawerComp = ({ handleClickOpen }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor={"right"}
      >
        <List sx={{ backgroundColor: "green", height: "100%" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button sx={{ color: "#efefef", margin: "1rem" }}>Favorites</Button>
            <Button sx={{ color: "#efefef", margin: "1rem" }}>Recents</Button>
            <Button
              onClick={handleClickOpen}
              sx={{ color: "#efefef", margin: "1rem" }}
            >
              Add Playlist
            </Button>
          </div>
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon sx={{ color: "#efefef" }} />
      </IconButton>
    </>
  );
};

export default DrawerComp;