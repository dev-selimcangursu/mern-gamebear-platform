import React from "react";
import { Box } from "@mui/material";
import MainBannerCard from "./MegaHomeBanner";
import MiniBannerCard from "./MiniHomeBanner";
import styles from "./HomeBanner.module.css";
import HomeFeatured from "../HomeFeatured/HomeFeatured";
import Banner2 from '../../../../assets/banner-2.png'
import Banner4 from '../../../../assets/banner-4.png'

function HomeBanner() {
  return (
    <Box component="section" className={styles.wrapper}>
      <Box className={styles.bannerLayout}>
        <MainBannerCard />
        <Box className={styles.rightColumn}>
          <MiniBannerCard
            image={Banner2}
            title="Yeni Konsol"
            description="PS5 Pro şimdi stokta!"
          />
          <MiniBannerCard
            image={Banner4}
            title="Mekanik Klavye"
            description="RGB aydınlatmalı yeni seri"
          />
        </Box>
      </Box>
      <HomeFeatured/>
    </Box>
  );
}

export default HomeBanner;
