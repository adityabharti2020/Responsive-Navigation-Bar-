import React from "react";
import {
  Grid,
  Toolbar,
  AppBar,
  Typography,
  Tabs,
  Tab,
  Box,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import PageviewIcon from "@mui/icons-material/Pageview";
import { useState } from "react";
import { DrawerComponent } from "./DrawerComponent";
const Navbar = ({ links }) => {
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(isMatch);
  // console.log(theme)
  return (
    <AppBar
      sx={{
        backgroundImage:
          "linear-gradient(90deg, rgba(12,36,0,0.8184523809523809) 0%, rgba(9,121,114,1) 35%, rgba(0,164,255,1) 100%);",
      }}
    >
      <Toolbar>
        {isMatch ? (
          <>
            <Typography>
                <PageviewIcon sx={{ fontSize: "35px" }} />
              </Typography>
            <DrawerComponent link ={links} />
          </>
        ) : (
          <Grid sx={{ placeItems: "center" }} container>
            <Grid item xs={2}>
              <Typography>
                <PageviewIcon sx={{ fontSize: "35px" }} />
              </Typography>
            </Grid>
            <Grid xs={6}>
              <Tabs
                value={value}
                textColor="inherit"
                indicatorColor="secondary"
                onChange={(e, value) => setValue(value)}
              >
                {links.map((link, index) => (
                  <Tab label={link} key={index} />
                ))}
              </Tabs>
            </Grid>
            <Grid xs={1} />
            <Grid xs={3}>
              <Box display="flex">
                <Button sx={{ marginLeft: "auto" }} variant="contained">
                  LogIn
                </Button>
                <Button sx={{ marginLeft: 1 }} variant="contained">
                  SignUp
                </Button>
              </Box>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
