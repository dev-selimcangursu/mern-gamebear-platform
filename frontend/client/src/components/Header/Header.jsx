import React from "react";
import AppBar from "@mui/material/AppBar";
import HeaderTop from "./components/HeaderTop/HeaderTop";
import HeaderBottom from "./components/HeaderBottom/HeaderBottom";
function Header() {
  return (
    <AppBar
      position="static"
      sx={{ background: "white", color: "black" }}
      elevation={1}
    >
      <HeaderTop />
      <HeaderBottom/>
    </AppBar>
  );
}

export default Header;
