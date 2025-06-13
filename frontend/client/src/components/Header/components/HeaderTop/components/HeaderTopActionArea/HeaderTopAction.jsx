import React from "react";
import { Box } from "@mui/material";
import HeaderTopContactInfo from "./components/HeaderTopContactInfo";
import HeaderTopLoginInfo from "./components/HeaderTopLoginInfo";
import HeaderTopShoppingArea from "./components/HeaderTopShoppingArea";
function HeaderTopAction() {
  return (
    <Box
      sx={{
        display: {
          xs: "none",
          sm: "none",
          md: "flex",
        },
        alignItems: "center",
        gap: 3,
        flexWrap: "wrap",
      }}
    >
      <HeaderTopContactInfo />
      <HeaderTopLoginInfo />
      <HeaderTopShoppingArea />
    </Box>
  );
}

export default HeaderTopAction;
