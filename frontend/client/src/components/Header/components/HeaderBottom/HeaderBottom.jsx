import React from "react";
import Toolbar from "@mui/material/Toolbar";
import HeaderBottomList from "./components/HeaderBottomList";
import HeaderBottomActionArea from "./components/HeaderBottomActionArea";
import styles from "./HeaderBottom.module.css";

function HeaderBottom() {
  return (
    <Toolbar className={styles.toolbar}>
      <HeaderBottomList />
      <HeaderBottomActionArea />
    </Toolbar>
  );
}

export default HeaderBottom;
