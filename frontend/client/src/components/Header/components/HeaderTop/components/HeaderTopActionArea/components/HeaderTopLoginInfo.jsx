import React from "react";
import { Box, Typography, Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

function HeaderTopLoginInfo() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        justifyContent: "center",
      }}
    >
      <PersonIcon />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography sx={{fontSize:"11px",color:"gray"}} variant="caption">Hesabım</Typography>
        <Button
          variant="outlined"
          style={{ background: "orange", color: "black" }}
          size="small"
        >
          Giriş Yap
        </Button>
      </Box>
    </Box>
  );
}

export default HeaderTopLoginInfo;
