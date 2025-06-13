import React from "react";
import { Box, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function HeaderTopShoppingArea() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <ShoppingCartIcon />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ fontSize: "11px", color: "gray" }}
          variant="caption"
        >
          Sepetim
        </Typography>
        <Typography variant="caption">0 TL</Typography>
      </Box>
    </Box>
  );
}

export default HeaderTopShoppingArea;
