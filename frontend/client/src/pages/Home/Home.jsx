import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
import Header from "../../components/Header/Header";
import styles from "./Home.module.css";

function Home() {
  return (
    <>
      <Header />
      <Box component="section" className={styles.section}>
        <Box className={styles.flexContainer}>
          <Card className={styles.mainCard}>
            <CardMedia
              component="img"
              height="300"
              image="https://source.unsplash.com/random/800x600?gaming"
              alt="Öne Çıkan Ürün"
            />
            <CardContent className={styles.cardContentOverlay}>
              <Typography variant="h4" fontWeight="bold">
                En Yeni Oyuncu Ekipmanları
              </Typography>
              <Typography variant="body1" mt={1} mb={2}>
                Yepyeni koleksiyonla oyun deneyimini bir üst seviyeye taşı!
              </Typography>
            </CardContent>
          </Card>

          <Box className={styles.sideCards}>
            <Card className={styles.miniCard}>
              <CardMedia
                component="img"
                image="https://source.unsplash.com/random/300x200?console"
                alt="Ürün"
                className={styles.miniImage}
              />
              <CardContent>
                <Typography variant="h6">Yeni Konsol</Typography>
                <Typography variant="body2" color="text.secondary">
                  PS5 Pro şimdi stokta!
                </Typography>
              </CardContent>
            </Card>

            <Card className={styles.miniCard}>
              <CardMedia
                component="img"
                image="https://source.unsplash.com/random/300x200?keyboard"
                alt="Ürün"
                className={styles.miniImage}
              />
              <CardContent>
                <Typography variant="h6">Mekanik Klavye</Typography>
                <Typography variant="body2" color="text.secondary">
                  RGB aydınlatmalı yeni seri
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Home;
