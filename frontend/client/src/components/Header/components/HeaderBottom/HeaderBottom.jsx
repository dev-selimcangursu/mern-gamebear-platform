import React from "react";
import Toolbar from "@mui/material/Toolbar";
import HeaderBottomList from "./components/HeaderBottomList";
import HeaderBottomActionArea from "./components/HeaderBottomActionArea";

function HeaderBottom() {
  return (
    <Toolbar
      sx={{
        display: {
          xs: "none",
          sm: "none",
          md: "flex",
        },
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        px: 3,
        py: 1,
      }}
    >
      <HeaderBottomList />
      <HeaderBottomActionArea />
    </Toolbar>
  );
}

export default HeaderBottom;
