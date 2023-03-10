import {
    Toolbar,
    styled,
  } from "@mui/material";
  
  
  export const colors = {
    textColor: "#ffffff",
    bgColors: "#1976D2",
    color1: "#000000"
  };
  
  export const NavToolbar = styled(Toolbar)(() => ({
    display: "flex",
    flexFlow: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }));
  