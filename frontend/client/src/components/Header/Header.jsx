import React from "react";
import AppBar from "@mui/material/AppBar";
import HeaderTop from "./components/HeaderTop/HeaderTop";
import HeaderBottom from "./components/HeaderBottom/HeaderBottom";
import styles from "./Header.module.css";

function Header() {
  return (
    <AppBar position="static" className={styles.headerAppBar} elevation={1}>
      <HeaderTop />
      <HeaderBottom />
    </AppBar>
  );
}

export default Header;
