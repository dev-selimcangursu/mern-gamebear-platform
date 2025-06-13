import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import styles from "./MegaHomeBanner.module.css";

function MegaHomeBanner() {
  return (
    <Card className={styles.megaCard}>
      <CardMedia
        component="img"
        className={styles.media}
        image="https://source.unsplash.com/random/800x600?gaming"
        alt="Öne Çıkan Ürün"
      />
      <CardContent className={styles.contentOverlay}>
        <Typography variant="h4" fontWeight="bold">
          En Yeni Oyuncu Ekipmanları
        </Typography>
        <Typography variant="body1" mt={1} mb={2}>
          Yepyeni koleksiyonla oyun deneyimini bir üst seviyeye taşı!
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MegaHomeBanner;
