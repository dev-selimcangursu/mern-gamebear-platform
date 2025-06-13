import React from "react";
import { Box, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";

function HeaderTopContactInfo() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <PhoneIcon />
      <Box>
        <Typography
          sx={{ color: "gray", fontSize: "11px" }}
          variant="caption"
        >
          7/24 Destek
        </Typography>
        <Typography variant="body2">+90 216 345 9360</Typography>
      </Box>
    </Box>
  );
}

export default HeaderTopContactInfo;
