import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import styles from "./MegaHome.module.css";
import Banner1 from '../../../../assets/banner-1.png'
function MegaHomeBanner() {
  return (
    <Card className={styles.megaCard}>
      <CardMedia
        component="img"
        className={styles.media}
        image={Banner1}
        alt="Öne Çıkan Ürün"
      />

    </Card>
  );
}

export default MegaHomeBanner;
