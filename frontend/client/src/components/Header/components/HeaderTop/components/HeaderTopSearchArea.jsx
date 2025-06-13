import React from "react";
import { Box, TextField } from "@mui/material";
import styles from "./HeaderTopSearchArea.module.css";

function HeaderTopSearchArea() {
  return (
    <Box className={styles.searchBox}>
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
