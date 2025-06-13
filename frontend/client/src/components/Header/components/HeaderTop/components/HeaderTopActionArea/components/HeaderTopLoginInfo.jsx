import React from "react";
import { Box, Typography, Link } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import styles from "./HeaderTopLoginInfo.module.css";

function HeaderTopLoginInfo() {
  return (
    <Link href="/giris" underline="none" className={styles.loginWrapper}>
      <PersonIcon />
      <Box className={styles.loginInfoBox}>
        <Typography className={styles.captionText}>Hesabım</Typography>
        <Typography className={styles.loginText}>Giriş Yap</Typography>
      </Box>
    </Link>
  );
}

export default HeaderTopLoginInfo;
