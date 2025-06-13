import React from "react";
import Box from "@mui/material/Box";
import { Link, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styles from "./HeaderBottomActionArea.module.css";

function HeaderBottomActionArea() {
  return (
    <Box className={styles.container}>
      <Link
        href="https://wa.me/902163459360"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappLink}
      >
        <WhatsAppIcon className={styles.whatsappIcon} />
        <Typography className={styles.linkText}>
          WhatsApp Destek
        </Typography>
      </Link>
      <Link href="/favorilerim" className={styles.favoritesLink}>
        <FavoriteIcon className={styles.icon} />
        <Typography className={styles.linkText}>Favorilerim</Typography>
      </Link>
    </Box>
  );
}

export default HeaderBottomActionArea;
