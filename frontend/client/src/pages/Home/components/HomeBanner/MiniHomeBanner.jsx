import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea
} from "@mui/material";
import styles from "./MiniHomeBanner.module.css";

function MiniBannerCard({ image, link }) {
  return (
    <Card className={styles.card}>
      <CardActionArea component="a" href={link}>
        <CardMedia
          component="img"
          image={image}
          alt={image}
          className={styles.media}
        />

      </CardActionArea>
    </Card>
  );
}

export default MiniBannerCard;
