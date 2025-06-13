import React, { useState } from "react";
import { Toolbar } from "@mui/material";
import HeaderTopSearchArea from "./components/HeaderTopSearchArea";
import HeaderTopLogoArea from "./components/HeaderTopLogoArea";
import HeaderTopActionArea from "./components/HeaderTopActionArea/HeaderTopAction";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "../../../Sidebar/Sidebar";

function HeaderTop() {
  const [openSidebarStatus, setOpenSidebarStatus] = useState(false);

  function openSidebar() {
    setOpenSidebarStatus(true);
  }

  return (
    <Toolbar
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      <HeaderTopLogoArea />
      <HeaderTopSearchArea />
      <HeaderTopActionArea />

      <MenuIcon
        onClick={openSidebar}
        sx={{
          display: { xs: "flex", sm: "flex", md: "none" },
          cursor: "pointer",
        }}
      />
      <Sidebar sidebarStatus={openSidebarStatus} setSidebarStatus={setOpenSidebarStatus} />
    </Toolbar>
  );
}

export default HeaderTop;
