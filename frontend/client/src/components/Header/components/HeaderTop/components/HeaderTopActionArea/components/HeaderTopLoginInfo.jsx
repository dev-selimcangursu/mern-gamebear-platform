import React from "react";
import { Box, Typography, Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import styles from "./HeaderTopLoginInfo.module.css";

function HeaderTopLoginInfo() {
  return (
    <Box className={styles.loginWrapper}>
      <PersonIcon />
      <Box className={styles.loginInfoBox}>
        <Typography className={styles.captionText} variant="caption">
          Hesabım
        </Typography>
        <Button variant="contained" size="small" className={styles.loginButton}>
          Giriş Yap
        </Button>
      </Box>
    </Box>
  );
}

export default HeaderTopLoginInfo;
