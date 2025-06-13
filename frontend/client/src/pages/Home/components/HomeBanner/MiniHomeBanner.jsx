import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import styles from "./MiniHomeBanner.module.css";

function MiniBannerCard({ image, title, description }) {
  return (
    <Card className={styles.card}>
      <CardMedia
        component="img"
        image={image}
        alt={title}
        className={styles.media}
      />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default MiniBannerCard;
