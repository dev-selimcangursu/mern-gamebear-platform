import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "../Footer.module.css";

function FooterLinks() {
  return (
    <>
      <Box className={styles.column}>
        <Typography variant="h6" gutterBottom>
          Hakkımızda
        </Typography>
        <ul className={styles.linkList}>
          <li className={styles.linkItem}>Şirket Profili</li>
          <li className={styles.linkItem}>Kariyer</li>
          <li className={styles.linkItem}>Basın</li>
        </ul>
      </Box>

      <Box className={styles.column}>
        <Typography variant="h6" gutterBottom>
          Yardım
        </Typography>
        <ul className={styles.linkList}>
          <li className={styles.linkItem}>SSS</li>
          <li className={styles.linkItem}>İade Politikası</li>
          <li className={styles.linkItem}>İletişim</li>
        </ul>
      </Box>
    </>
  );
}

export default FooterLinks;
