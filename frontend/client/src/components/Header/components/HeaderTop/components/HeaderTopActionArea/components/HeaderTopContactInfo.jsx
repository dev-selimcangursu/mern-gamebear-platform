import React from "react";
import { Box, Typography, Link } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import styles from "./HeaderTopContactInfo.module.css";

function HeaderTopContactInfo() {
  return (
    <Link href="/iletisim" underline="none" className={styles.contactWrapper}>
      <PhoneIcon />
      <Box>
        <Typography className={styles.captionText}>7/24 Destek</Typography>
        <Typography variant="body2">+90 216 345 9360</Typography>
      </Box>
    </Link>
  );
}

export default HeaderTopContactInfo;
