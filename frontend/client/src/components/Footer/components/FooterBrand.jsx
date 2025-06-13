import React from "react";
import { Box, Typography, Link } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import styles from "../Footer.module.css";

function FooterBrand() {
  return (
    <Box className={styles.column}>
      <Typography className={styles.logo}>MyCompany</Typography>
      <Typography variant="body2" className={styles.description}>
        Güvenli alışverişin adresi. Kalite ve müşteri memnuniyeti
        önceliğimizdir. Her zaman en iyi deneyimi sunmak için buradayız.
      </Typography>

      <Box mt={2}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          İletişim
        </Typography>
        <Box className={styles.contactItem}>
          <LocationOnIcon fontSize="small" sx={{ mr: 1 }} />
          <Typography variant="body2">İstanbul, Türkiye</Typography>
        </Box>
        <Box className={styles.contactItem}>
          <PhoneIcon fontSize="small" sx={{ mr: 1 }} />
          <Link href="tel:+902122222222" underline="hover" color="inherit">
            +90 212 222 22 22
          </Link>
        </Box>
        <Box className={styles.contactItem}>
          <EmailIcon fontSize="small" sx={{ mr: 1 }} />
          <Link
            href="mailto:info@mycompany.com"
            underline="hover"
            color="inherit"
          >
            info@mycompany.com
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default FooterBrand;
