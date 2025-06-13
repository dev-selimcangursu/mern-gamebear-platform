import React from "react";
import { Box } from "@mui/material";
import styles from "./Footer.module.css";
import FooterBrand from "./components/FooterBrand";
import FooterLinks from "./components/FooterLinks";
import FooterSocial from "./components/FooterSocial";
import FooterCopyright from "./components/FooterCopyright";

function Footer() {
  return (
    <Box component="footer" className={styles.footer}>
      <Box className={styles.container}>
        <FooterBrand />
        <FooterLinks />
        <FooterSocial />
      </Box>
      <FooterCopyright />
    </Box>
  );
}

export default Footer;
