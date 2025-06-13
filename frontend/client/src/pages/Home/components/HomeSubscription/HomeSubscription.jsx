import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import styles from "./HomeSubscription.module.css";

function HomeSubscription() {
  return (
    <Box className={styles.wrapper}>
      <Box className={styles.inner}>
        <Box className={styles.left}>
          <Typography variant="h5" className={styles.title}>
            En son trendleri ve fırsatları kaçırmayın
          </Typography>
          <Typography variant="body1" className={styles.subtitle}>
            En son teklifler ve indirim kodları hakkında haber almak için
            kaydolun
          </Typography>
        </Box>

        <Box className={styles.right}>
          <TextField
            variant="outlined"
            placeholder="E-posta adresinizi girin"
            className={styles.input}
            size="small"
          />
          <Button variant="contained" color="primary" className={styles.button}>
            Abone Ol
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default HomeSubscription;
