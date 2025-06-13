import React from "react";
import { Box } from "@mui/material";
import styles from "./HeaderTopLogoArea.module.css";

function HeaderTopLogoArea() {
  return (
    <Box className={styles.logoWrapper}>
      <img
        src="/logo.png"
        alt="logo"
        className={styles.logoImage}
      />
    </Box>
  );
}

export default HeaderTopLogoArea;
