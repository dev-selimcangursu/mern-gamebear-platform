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
             link="/bilgisayar-monitorleri"
          />
          <MiniBannerCard
            image={Banner4}
             link="/oyun-konsol-aksesuarlari"
          />
        </Box>
      </Box>
      <HomeFeatured/>
    </Box>
  );
}

export default HomeBanner;
