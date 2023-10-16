import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import List from "@mui/material/List";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

export const DrawerComponent = ({ link }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer PaperProps={{sx:{backgroundColor:'rgba(9,121,114,1)'}}} open={open} onClose={() => setOpen(false)}>
        <List>
          {link.map((link, index) => (
            <ListItemButton key={index} divider onClick={()=>setOpen(false)}>
              <ListItemIcon>
                <ListItemText sx={{color:'white'}}>{link}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto", color: "white" }}
        onClick={() => setOpen(!open)}
      >
        <MenuRoundedIcon />
      </IconButton>
    </>
  );
};
