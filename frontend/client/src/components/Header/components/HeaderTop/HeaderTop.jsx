import React, { useState } from "react";
import { Toolbar } from "@mui/material";
import HeaderTopSearchArea from "./components/HeaderTopSearchArea";
import HeaderTopLogoArea from "./components/HeaderTopLogoArea";
import HeaderTopActionArea from "./components/HeaderTopActionArea/HeaderTopAction";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "../../../Sidebar/Sidebar";
import styles from "./HeaderTop.module.css";

function HeaderTop() {
  const [openSidebarStatus, setOpenSidebarStatus] = useState(false);

  function openSidebar() {
    setOpenSidebarStatus(true);
  }

  return (
    <Toolbar className={styles.toolbar}>
      <HeaderTopLogoArea />
      <HeaderTopSearchArea />
      <HeaderTopActionArea />

      <MenuIcon
        onClick={openSidebar}
        className={styles.menuIcon}
      />
      <Sidebar
        sidebarStatus={openSidebarStatus}
        setSidebarStatus={setOpenSidebarStatus}
      />
    </Toolbar>
  );
}

export default HeaderTop;
