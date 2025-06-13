import React from "react";
import { Box } from "@mui/material";
import MainBannerCard from "./MainBannerCard";
import MiniBannerCard from "./MiniBannerCard";
import styles from "./HomeBanner.module.css";

function HomeBanner() {
  return (
    <Box component="section" className={styles.wrapper}>
      <Box className={styles.bannerLayout}>
        <MainBannerCard />
        <Box className={styles.rightColumn}>
          <MiniBannerCard
            image="https://source.unsplash.com/random/300x200?console"
            title="Yeni Konsol"
            description="PS5 Pro şimdi stokta!"
          />
          <MiniBannerCard
            image="https://source.unsplash.com/random/300x200?keyboard"
            title="Mekanik Klavye"
            description="RGB aydınlatmalı yeni seri"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default HomeBanner;
