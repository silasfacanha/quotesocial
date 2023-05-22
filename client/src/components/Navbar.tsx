import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Navbar
        </Typography>
        <Typography variant="body1" component="div">
          Home
        </Typography>
        <Typography variant="body1" component="div">
          About
        </Typography>
        <Typography variant="body1" component="div">
          Contact
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
