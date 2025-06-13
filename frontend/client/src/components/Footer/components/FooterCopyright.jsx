import React from "react";
import { Typography } from "@mui/material";
import styles from "../Footer.module.css";

function FooterCopyright() {
  return (
    <Typography className={styles.copyRight}>
      © {new Date().getFullYear()} MyCompany. Tüm hakları saklıdır.
    </Typography>
  );
}

export default FooterCopyright;
