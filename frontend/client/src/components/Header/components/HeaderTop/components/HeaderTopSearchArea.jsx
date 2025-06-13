import React from "react";
import { Box, TextField } from "@mui/material";
function HeaderTopSearchArea() {
  return (
    <Box sx={{ flexGrow: 1, mx: 3 }}>
      <TextField
        fullWidth
        placeholder="Ürün Ara"
        variant="outlined"
        size="small"
      />
    </Box>
  );
}

export default HeaderTopSearchArea;
