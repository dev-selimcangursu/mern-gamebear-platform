import React from "react";
import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import styles from "./MegaHome.module.css";
import Banner1 from "../../../../assets/banner-1.png";

function MegaHomeBanner() {
  return (
    <Card className={styles.megaCard}>
      <CardActionArea component="a" href="/oyuncu-kulakliklari">
        <CardMedia
          component="img"
          className={styles.media}
          image={Banner1}
          alt="Öne Çıkan Ürün"
        />
      </CardActionArea>
    </Card>
  );
}

export default MegaHomeBanner;
