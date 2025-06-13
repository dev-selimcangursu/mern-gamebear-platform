import React from "react";
import { Box, TextField } from "@mui/material";

function HeaderTopLogoArea() {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <img
        src="/logo.png"
        alt="logo"
        style={{ height: 50, objectFit: "contain" }}
      />
    </Box>
  );
}

export default HeaderTopLogoArea;
