import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import styles from "../Footer.module.css";

function FooterSocial() {
  return (
    <Box className={styles.column}>
      <Typography variant="h6" gutterBottom>
        Sosyal Medya Hesaplarımız
      </Typography>
      <Box sx={{ display: "flex", gap: 1 }}>
        <Link
          href="https://instagram.com"
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
        >
          <IconButton sx={{ color: "#333" }} size="large">
            <InstagramIcon fontSize="inherit" />
          </IconButton>
        </Link>
        <Link
          href="https://twitter.com"
          target="_blank"
          rel="noopener"
          aria-label="Twitter"
        >
          <IconButton sx={{ color: "#333" }} size="large">
            <TwitterIcon fontSize="inherit" />
          </IconButton>
        </Link>
        <Link
          href="https://facebook.com"
          target="_blank"
          rel="noopener"
          aria-label="Facebook"
        >
          <IconButton sx={{ color: "#333" }} size="large">
            <FacebookIcon fontSize="inherit" />
          </IconButton>
        </Link>
      </Box>
    </Box>
  );
}

export default FooterSocial;
